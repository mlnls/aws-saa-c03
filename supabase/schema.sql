-- AWS SAA-C03 문제 사이트 · Supabase 스키마 (v2)
-- Supabase 대시보드 → SQL Editor 에 전체 붙여넣고 Run 하세요.
-- Auth(이메일 확인 등) 설정은 전혀 필요 없습니다. 닉네임+PIN을 아래 함수들이 직접 검증합니다.

-- v1(가짜 이메일 + Supabase Auth) 테이블 정리. 데이터가 있다면 이 두 줄을 지우세요.
drop table if exists public.attempts;
drop table if exists public.profiles;

create extension if not exists pgcrypto with schema extensions;

-- 사용자: handle = 소문자 닉네임, pin_hash = bcrypt, token = 클라이언트 세션 키
create table if not exists public.saa_users (
  id           uuid primary key default gen_random_uuid(),
  handle       text unique not null,
  nickname     text not null,
  pin_hash     text not null,
  token        uuid not null default gen_random_uuid(),
  failed       int  not null default 0,
  locked_until timestamptz,
  is_admin     boolean not null default false,
  created_at   timestamptz not null default now()
);

-- 이미 만들어진 테이블에도 컬럼 추가 (재실행 안전)
alter table public.saa_users add column if not exists is_admin boolean not null default false;

-- 풀이 기록: 사람당 문제당 1행
create table if not exists public.saa_attempts (
  user_id    uuid not null references public.saa_users(id) on delete cascade,
  qid        text not null,
  choice     text[],
  correct    boolean,
  bookmarked boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, qid)
);

-- 완료된 실전 시험: 진행 중 답변은 저장하지 않고 제출 시에만 최신 결과를 기록한다.
create table if not exists public.saa_exam_results (
  user_id         uuid not null references public.saa_users(id) on delete cascade,
  exam_id         text not null,
  started_at      timestamptz not null,
  finished_at     timestamptz not null,
  elapsed_seconds integer not null,
  limit_seconds   integer not null,
  total           integer not null,
  correct         integer not null,
  answers         jsonb not null default '{}'::jsonb,
  primary key (user_id, exam_id)
);

-- RLS 켜고 정책은 만들지 않음 → 공개 키(anon)로는 테이블 직접 접근 불가.
-- 모든 접근은 아래 security definer 함수를 통해서만 가능하다.
alter table public.saa_users    enable row level security;
alter table public.saa_attempts enable row level security;
alter table public.saa_exam_results enable row level security;

-- 실전 시험 응시 이력: 응시 1회 = 1행 (다시 응시해도 이전 결과 유지). 관리자는 첫 응시만 본다.
create table if not exists public.saa_exam_attempts (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references public.saa_users(id) on delete cascade,
  exam_id         text not null,
  started_at      timestamptz not null,
  finished_at     timestamptz not null,
  elapsed_seconds integer not null,
  limit_seconds   integer not null,
  total           integer not null,
  correct         integer not null,
  answers         jsonb not null default '{}'::jsonb,
  created_at      timestamptz not null default now()
);
-- 같은 제출을 여러 기기/재시도로 올려도 1행 (finished_at 은 클라이언트 ms 값 그대로)
create unique index if not exists saa_exam_attempts_once on public.saa_exam_attempts (user_id, exam_id, finished_at);
alter table public.saa_exam_attempts enable row level security;
revoke all on public.saa_exam_attempts from anon, authenticated;

revoke all on public.saa_users, public.saa_attempts, public.saa_exam_results from anon, authenticated;

-- 가입 / 로그인은 실패를 예외로 던지지 않고 {"error": "..."} 를 반환한다.
-- (예외를 던지면 트랜잭션이 롤백되어 PIN 실패 카운터가 저장되지 않기 때문)

-- 가입
create or replace function public.saa_signup(p_nick text, p_pin text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare v public.saa_users;
begin
  if p_nick !~ '^[A-Za-z0-9._-]{2,20}$' then return json_build_object('error', 'BAD_NICK'); end if;
  if length(p_pin) < 6 then return json_build_object('error', 'SHORT_PIN'); end if;
  if exists (select 1 from public.saa_users where handle = lower(p_nick)) then
    return json_build_object('error', 'DUP_NICK');
  end if;
  insert into public.saa_users (handle, nickname, pin_hash)
  values (lower(p_nick), p_nick, extensions.crypt(p_pin, extensions.gen_salt('bf')))
  returning * into v;
  return json_build_object('id', v.id, 'token', v.token, 'nickname', v.nickname, 'is_admin', v.is_admin);
end $$;

-- 로그인 (PIN 10회 연속 실패 시 10분 잠금)
create or replace function public.saa_login(p_nick text, p_pin text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare v public.saa_users;
begin
  select * into v from public.saa_users where handle = lower(p_nick);
  if v.id is null then return json_build_object('error', 'NO_USER'); end if;
  if v.locked_until is not null and v.locked_until > now() then
    return json_build_object('error', 'LOCKED',
      'seconds', ceil(extract(epoch from (v.locked_until - now()))));
  end if;
  if v.pin_hash <> extensions.crypt(p_pin, v.pin_hash) then
    update public.saa_users
       set failed = case when failed + 1 >= 10 then 0 else failed + 1 end,
           locked_until = case when failed + 1 >= 10 then now() + interval '10 minutes' else locked_until end
     where id = v.id;
    return json_build_object('error', 'BAD_PIN');
  end if;
  update public.saa_users set failed = 0, locked_until = null where id = v.id;
  return json_build_object('id', v.id, 'token', v.token, 'nickname', v.nickname, 'is_admin', v.is_admin);
end $$;

-- 토큰으로 내 정보 조회 (새로고침 시 세션 복구)
create or replace function public.saa_me(p_token uuid)
returns json language plpgsql security definer set search_path = public as $$
declare v public.saa_users;
begin
  select * into v from public.saa_users where token = p_token;
  if v.id is null then return null; end if;
  return json_build_object('id', v.id, 'token', v.token, 'nickname', v.nickname, 'is_admin', v.is_admin);
end $$;

-- 내 기록 전체
create or replace function public.saa_records(p_token uuid)
returns setof public.saa_attempts language sql security definer set search_path = public as $$
  select a.* from public.saa_attempts a
  join public.saa_users u on u.id = a.user_id
  where u.token = p_token;
$$;

-- 기록 저장 (문제 하나)
create or replace function public.saa_save(
  p_token uuid, p_qid text, p_choice text[], p_correct boolean, p_bookmarked boolean)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid; adm boolean;
begin
  select id, is_admin into uid, adm from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  if adm then raise exception 'ADMIN_READONLY'; end if;
  insert into public.saa_attempts (user_id, qid, choice, correct, bookmarked, updated_at)
  values (uid, p_qid, p_choice, p_correct, p_bookmarked, now())
  on conflict (user_id, qid) do update
    set choice = excluded.choice, correct = excluded.correct,
        bookmarked = excluded.bookmarked, updated_at = now();
end $$;

-- 내가 완료한 실전 시험의 최신 결과
drop function if exists public.saa_exam_results(uuid);
create function public.saa_exam_results(p_token uuid)
returns table (id uuid, exam_id text, started_at timestamptz, finished_at timestamptz, elapsed_seconds integer,
               limit_seconds integer, total integer, correct integer, answers jsonb)
language sql security definer set search_path = public as $$
  select a.id, a.exam_id, a.started_at, a.finished_at, a.elapsed_seconds, a.limit_seconds, a.total, a.correct, a.answers
  from public.saa_exam_attempts a
  join public.saa_users u on u.id = a.user_id
  where u.token = p_token
  order by a.exam_id, a.finished_at;
$$;

-- 실전 시험 결과 저장. 전 문항 제출을 마친 뒤 클라이언트가 한 번만 호출한다.
create or replace function public.saa_save_exam_result(
  p_token uuid, p_exam_id text, p_started_at timestamptz, p_finished_at timestamptz,
  p_elapsed_seconds integer, p_limit_seconds integer, p_total integer, p_correct integer, p_answers jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid; adm boolean;
begin
  select id, is_admin into uid, adm from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  if adm then raise exception 'ADMIN_READONLY'; end if;
  if p_exam_id !~ '^[A-Za-z0-9_-]{1,40}$' then raise exception 'BAD_KEY'; end if;
  if length(coalesce(p_answers, '{}'::jsonb)::text) > 65536 then raise exception 'TOO_BIG'; end if;
  insert into public.saa_exam_attempts
    (user_id, exam_id, started_at, finished_at, elapsed_seconds, limit_seconds, total, correct, answers)
  values
    (uid, p_exam_id, p_started_at, p_finished_at, p_elapsed_seconds, p_limit_seconds, p_total, p_correct,
     coalesce(p_answers, '{}'::jsonb))
  on conflict (user_id, exam_id, finished_at) do nothing;
end $$;

-- 계정에 묶인 학습 상태 (일시정지한 실전 시험, 워크북 읽음 체크·복습 문제 답 등)
-- key 하나당 jsonb 1행. 클라이언트가 key 단위로 통째로 덮어쓴다.
create table if not exists public.saa_user_state (
  user_id    uuid not null references public.saa_users(id) on delete cascade,
  key        text not null,
  value      jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.saa_user_state enable row level security;
revoke all on public.saa_user_state from anon, authenticated;

-- 내 상태 전체
create or replace function public.saa_state(p_token uuid)
returns table (key text, value jsonb, updated_at timestamptz)
language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  return query select s.key, s.value, s.updated_at from public.saa_user_state s where s.user_id = uid;
end $$;

-- 상태 하나 저장 (p_value 가 null 이면 삭제). 값은 256KB 까지.
create or replace function public.saa_set_state(p_token uuid, p_key text, p_value jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  if p_key !~ '^[a-z0-9._-]{1,64}$' then raise exception 'BAD_KEY'; end if;
  if p_value is null or p_value = 'null'::jsonb then
    delete from public.saa_user_state where user_id = uid and key = p_key;
    return;
  end if;
  if length(p_value::text) > 262144 then raise exception 'TOO_BIG'; end if;
  insert into public.saa_user_state (user_id, key, value, updated_at)
  values (uid, p_key, p_value, now())
  on conflict (user_id, key) do update set value = excluded.value, updated_at = now();
end $$;

-- 일시정지한 실전 시험 저장 (exam.paused 맵의 시험 하나만 원자적으로 갱신).
-- 각 풀이 화면은 sid 를 갖는다. p_takeover=false 면 서버의 sid 가 같을 때만 저장하고,
-- 다른 곳에서 이어 풀었으면 'TAKEN', 제출·삭제됐으면 'GONE' 을 돌려준다 (오래된 화면이 덮어쓰지 못하게).
create or replace function public.saa_save_pause(p_token uuid, p_exam text, p_entry jsonb, p_takeover boolean)
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid; cur jsonb; old jsonb;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  if p_exam !~ '^[A-Za-z0-9_-]{1,40}$' then raise exception 'BAD_KEY'; end if;
  if p_entry is null or jsonb_typeof(p_entry) <> 'object' then raise exception 'BAD_VALUE'; end if;
  if length(p_entry::text) > 65536 then raise exception 'TOO_BIG'; end if;
  select value into cur from public.saa_user_state where user_id = uid and key = 'exam.paused' for update;
  old := cur -> p_exam;
  if not coalesce(p_takeover, false) then
    if old is null then return 'GONE'; end if;
    if (old->>'sid') is distinct from (p_entry->>'sid') then return 'TAKEN'; end if;
  end if;
  insert into public.saa_user_state (user_id, key, value, updated_at)
  values (uid, 'exam.paused', jsonb_build_object(p_exam, p_entry), now())
  on conflict (user_id, key) do update
    set value = public.saa_user_state.value || jsonb_build_object(p_exam, p_entry), updated_at = now();
  return 'OK';
end $$;

-- 일시정지 삭제 (제출·처음부터 다시). p_sid 를 주면 그 화면 것일 때만 지운다.
create or replace function public.saa_clear_pause(p_token uuid, p_exam text, p_sid text)
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid; old jsonb;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  select value -> p_exam into old from public.saa_user_state where user_id = uid and key = 'exam.paused' for update;
  if old is null then return 'OK'; end if;
  if p_sid is not null and (old->>'sid') is distinct from p_sid then return 'TAKEN'; end if;
  update public.saa_user_state set value = value - p_exam, updated_at = now()
   where user_id = uid and key = 'exam.paused';
  delete from public.saa_user_state where user_id = uid and key = 'exam.paused' and value = '{}'::jsonb;
  return 'OK';
end $$;

-- 같이 푸는 사람들 현황: 닉네임 × 세트별 푼 개수·정답 수.
-- qid 가 "exam1-12" 형태이므로 첫 '-' 앞부분을 세트 id 로 사용한다.
-- (세트 id 에는 '-' 를 쓰지 마세요.)  PIN·토큰은 절대 노출되지 않는다.
drop function if exists public.saa_board();
create or replace function public.saa_board()
returns table (nickname text, exam text, solved bigint, correct bigint)
language sql security definer set search_path = public as $$
  select u.nickname,
         split_part(a.qid, '-', 1) as exam,
         count(*) filter (where a.correct is not null) as solved,
         count(*) filter (where a.correct) as correct
  from public.saa_users u
  join public.saa_attempts a on a.user_id = u.id
  where not u.is_admin
  group by u.nickname, split_part(a.qid, '-', 1)
  order by 1, 2;
$$;

-- 내 기록 전체 초기화
create or replace function public.saa_reset(p_token uuid)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  delete from public.saa_attempts where user_id = uid;
  delete from public.saa_exam_results where user_id = uid;
  delete from public.saa_exam_attempts where user_id = uid;
  delete from public.saa_user_state where user_id = uid;
end $$;

-- 계정 삭제 (기록까지 함께 삭제, PIN 재확인)
create or replace function public.saa_delete_me(p_token uuid, p_pin text)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare v public.saa_users;
begin
  select * into v from public.saa_users where token = p_token;
  if v.id is null then raise exception 'BAD_TOKEN'; end if;
  if v.pin_hash <> extensions.crypt(p_pin, v.pin_hash) then raise exception 'BAD_PIN'; end if;
  delete from public.saa_users where id = v.id;
end $$;

-- 관리자 전용: 모든 사람의 풀이 기록 (누가 어느 문제에서 무엇을 골랐는지)
-- 호출자의 토큰이 is_admin 사용자가 아니면 한 행도 반환하지 않는다.
create or replace function public.saa_admin_rows(p_token uuid)
returns table (nickname text, qid text, choice text[], correct boolean, bookmarked boolean, updated_at timestamptz)
language sql security definer set search_path = public as $$
  select u.nickname, a.qid, a.choice, a.correct, a.bookmarked, a.updated_at
  from public.saa_attempts a
  join public.saa_users u on u.id = a.user_id
  where not u.is_admin
    and exists (select 1 from public.saa_users me where me.token = p_token and me.is_admin)
  order by u.nickname, a.qid;
$$;

-- 관리자 전용: 가입자 목록 (기록이 없는 사람도 보이도록)
create or replace function public.saa_admin_users(p_token uuid)
returns table (nickname text, created_at timestamptz, is_admin boolean)
language sql security definer set search_path = public as $$
  select u.nickname, u.created_at, u.is_admin
  from public.saa_users u
  where not u.is_admin
    and exists (select 1 from public.saa_users me where me.token = p_token and me.is_admin)
  order by u.created_at;
$$;

create or replace function public.saa_admin_exams(p_token uuid)
returns table (nickname text, exam_id text, status text, answers jsonb, correct integer, total integer, at timestamptz)
language sql security definer set search_path = public as $$
  with me as (select 1 from public.saa_users where token = p_token and is_admin),
  firsts as (
    select distinct on (a.user_id, a.exam_id) a.*
    from public.saa_exam_attempts a
    order by a.user_id, a.exam_id, a.finished_at
  )
  select u.nickname, r.exam_id, 'done'::text, r.answers, r.correct, r.total, r.finished_at
  from firsts r join public.saa_users u on u.id = r.user_id
  where not u.is_admin and exists (select 1 from me)
  union all
  select u.nickname, p.key, 'paused'::text, coalesce(p.value -> 'answers', '{}'::jsonb), null::integer, null::integer,
         to_timestamp(nullif(p.value ->> 'pausedAt', '')::double precision / 1000)
  from public.saa_user_state s
  join public.saa_users u on u.id = s.user_id
  cross join lateral jsonb_each(case when jsonb_typeof(s.value) = 'object' then s.value else '{}'::jsonb end) p
  where s.key = 'exam.paused' and not u.is_admin and exists (select 1 from me) and jsonb_typeof(p.value) = 'object'
    and not exists (select 1 from public.saa_exam_attempts a where a.user_id = s.user_id and a.exam_id = p.key);
$$;
grant execute on function
  public.saa_signup(text, text),
  public.saa_login(text, text),
  public.saa_me(uuid),
  public.saa_records(uuid),
  public.saa_save(uuid, text, text[], boolean, boolean),
  public.saa_exam_results(uuid),
  public.saa_save_exam_result(uuid, text, timestamptz, timestamptz, integer, integer, integer, integer, jsonb),
  public.saa_state(uuid),
  public.saa_set_state(uuid, text, jsonb),
  public.saa_save_pause(uuid, text, jsonb, boolean),
  public.saa_clear_pause(uuid, text, text),
  public.saa_reset(uuid),
  public.saa_delete_me(uuid, text),
  public.saa_board(),
  public.saa_admin_rows(uuid),
  public.saa_admin_users(uuid),
  public.saa_admin_exams(uuid)
to anon, authenticated;

-- ⚠️ 관리자 지정
-- 사이트에서 닉네임 admin 으로 먼저 가입한 뒤, 아래 한 줄을 실행하세요.
--   update public.saa_users set is_admin = true where handle = 'admin';
--
-- PIN 을 바꾸려면 (권장: 6자리보다 길게)
--   update public.saa_users
--      set pin_hash = extensions.crypt('새PIN', extensions.gen_salt('bf')), failed = 0, locked_until = null
--    where handle = 'admin';
