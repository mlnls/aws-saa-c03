-- 2026-10-01 마이그레이션: 계정에 묶인 학습 상태 (schema.sql 에도 반영됨)
-- Supabase SQL Editor 에 붙여넣고 Run. 여러 번 실행해도 안전.

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

-- 내 기록 전체 초기화
create or replace function public.saa_reset(p_token uuid)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  delete from public.saa_attempts where user_id = uid;
  delete from public.saa_exam_results where user_id = uid;
  delete from public.saa_user_state where user_id = uid;
end $$;

grant execute on function
  public.saa_state(uuid),
  public.saa_set_state(uuid, text, jsonb)
to anon, authenticated;
