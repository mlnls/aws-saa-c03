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
  created_at   timestamptz not null default now()
);

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

-- 가입
create or replace function public.saa_signup(p_nick text, p_pin text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare v public.saa_users;
begin
  if p_nick !~ '^[A-Za-z0-9._-]{2,20}$' then raise exception 'BAD_NICK'; end if;
  if length(p_pin) < 6 then raise exception 'SHORT_PIN'; end if;
  if exists (select 1 from public.saa_users where handle = lower(p_nick)) then raise exception 'DUP_NICK'; end if;
  insert into public.saa_users (handle, nickname, pin_hash)
  values (lower(p_nick), p_nick, extensions.crypt(p_pin, extensions.gen_salt('bf')))
  returning * into v;
  return json_build_object('id', v.id, 'token', v.token, 'nickname', v.nickname);
end $$;

-- 로그인 (PIN 10회 연속 실패 시 10분 잠금)
create or replace function public.saa_login(p_nick text, p_pin text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare v public.saa_users;
begin
  select * into v from public.saa_users where handle = lower(p_nick);
  if v.id is null then raise exception 'NO_USER'; end if;
  if v.locked_until is not null and v.locked_until > now() then raise exception 'LOCKED'; end if;
  if v.pin_hash <> extensions.crypt(p_pin, v.pin_hash) then
    update public.saa_users
       set failed = case when failed + 1 >= 10 then 0 else failed + 1 end,
           locked_until = case when failed + 1 >= 10 then now() + interval '10 minutes' else locked_until end
     where id = v.id;
    raise exception 'BAD_PIN';
  end if;
  update public.saa_users set failed = 0, locked_until = null where id = v.id;
  return json_build_object('id', v.id, 'token', v.token, 'nickname', v.nickname);
end $$;

-- 토큰으로 내 정보 조회 (새로고침 시 세션 복구)
create or replace function public.saa_me(p_token uuid)
returns json language plpgsql security definer set search_path = public as $$
declare v public.saa_users;
begin
  select * into v from public.saa_users where token = p_token;
  if v.id is null then return null; end if;
  return json_build_object('id', v.id, 'token', v.token, 'nickname', v.nickname);
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

-- 같이 푸는 사람들 현황 (닉네임 + 푼 개수 + 정답 수). PIN·토큰은 노출되지 않음.
create or replace function public.saa_board()
returns table (nickname text, solved bigint, correct bigint) language sql security definer set search_path = public as $$
  select u.nickname,
         count(a.qid) filter (where a.correct is not null) as solved,
         count(a.qid) filter (where a.correct) as correct
  from public.saa_users u
  left join public.saa_attempts a on a.user_id = u.id
  group by u.nickname
  order by 3 desc, 2 desc;
$$;

grant execute on function
  public.saa_signup(text, text),
  public.saa_login(text, text),
  public.saa_me(uuid),
  public.saa_records(uuid),
  public.saa_save(uuid, text, text[], boolean, boolean),
  public.saa_board()
to anon, authenticated;
