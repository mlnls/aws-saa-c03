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

-- RLS 켜고 정책은 만들지 않음 → 공개 키(anon)로는 테이블 직접 접근 불가.
-- 모든 접근은 아래 security definer 함수를 통해서만 가능하다.
alter table public.saa_users    enable row level security;
alter table public.saa_attempts enable row level security;
revoke all on public.saa_users, public.saa_attempts from anon, authenticated;

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
declare uid uuid;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  insert into public.saa_attempts (user_id, qid, choice, correct, bookmarked, updated_at)
  values (uid, p_qid, p_choice, p_correct, p_bookmarked, now())
  on conflict (user_id, qid) do update
    set choice = excluded.choice, correct = excluded.correct,
        bookmarked = excluded.bookmarked, updated_at = now();
end $$;

-- 같이 푸는 사람들 현황: 닉네임 × 세트별 푼 개수·정답 수.
-- qid 가 "exam1-12" 형태이므로 첫 '-' 앞부분을 세트 id 로 사용한다.
-- (세트 id 에는 '-' 를 쓰지 마세요.)  PIN·토큰은 절대 노출되지 않는다.
drop function if exists public.saa_board();
create function public.saa_board()
returns table (nickname text, exam text, solved bigint, correct bigint)
language sql security definer set search_path = public as $$
  select u.nickname,
         split_part(a.qid, '-', 1) as exam,
         count(*) filter (where a.correct is not null) as solved,
         count(*) filter (where a.correct) as correct
  from public.saa_users u
  join public.saa_attempts a on a.user_id = u.id
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
  where exists (select 1 from public.saa_users me where me.token = p_token and me.is_admin)
  order by u.nickname, a.qid;
$$;

-- 관리자 전용: 가입자 목록 (기록이 없는 사람도 보이도록)
create or replace function public.saa_admin_users(p_token uuid)
returns table (nickname text, created_at timestamptz, is_admin boolean)
language sql security definer set search_path = public as $$
  select u.nickname, u.created_at, u.is_admin
  from public.saa_users u
  where exists (select 1 from public.saa_users me where me.token = p_token and me.is_admin)
  order by u.created_at;
$$;

grant execute on function
  public.saa_signup(text, text),
  public.saa_login(text, text),
  public.saa_me(uuid),
  public.saa_records(uuid),
  public.saa_save(uuid, text, text[], boolean, boolean),
  public.saa_reset(uuid),
  public.saa_delete_me(uuid, text),
  public.saa_board(),
  public.saa_admin_rows(uuid),
  public.saa_admin_users(uuid)
to anon, authenticated;

-- ⚠️ 관리자 지정
-- 사이트에서 닉네임 admin 으로 먼저 가입한 뒤, 아래 한 줄을 실행하세요.
--   update public.saa_users set is_admin = true where handle = 'admin';
--
-- PIN 을 바꾸려면 (권장: 6자리보다 길게)
--   update public.saa_users
--      set pin_hash = extensions.crypt('새PIN', extensions.gen_salt('bf')), failed = 0, locked_until = null
--    where handle = 'admin';
