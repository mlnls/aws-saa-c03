-- 2026-10-07 실전 시험 응시 이력 (schema.sql 에도 반영됨). Supabase SQL Editor 에서 Run. 여러 번 실행해도 안전.
-- 1) 다시 응시해도 이전 결과가 남도록 응시 1회 = 1행 (saa_exam_attempts)
-- 2) 본인은 전체 이력, 관리자는 사람·시험별 "첫 응시"만 본다 (재응시 결과·재응시 중 일시정지 답은 본인만)
-- 기존 saa_exam_results(시험당 최신 1행)는 이관 후 더 이상 쓰지 않는다 (백업으로 남겨 둠).

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

-- 기존 결과 이관
insert into public.saa_exam_attempts
  (user_id, exam_id, started_at, finished_at, elapsed_seconds, limit_seconds, total, correct, answers)
select user_id, exam_id, started_at, finished_at, elapsed_seconds, limit_seconds, total, correct, answers
from public.saa_exam_results
on conflict do nothing;

-- 내 응시 이력 전체 (오래된 것 → 최근 순)
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

-- 응시 결과 저장: 덮어쓰지 않고 한 행 추가 (같은 제출 재전송은 무시)
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

-- 관리자: 사람·시험별 첫 응시만. 일시정지 답은 아직 한 번도 제출 안 한 시험일 때만 (재응시 중인 답은 본인만).
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

-- 내 기록 전체 초기화 (응시 이력 포함)
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

revoke all on function public.saa_exam_results(uuid) from public;
grant execute on function
  public.saa_exam_results(uuid),
  public.saa_save_exam_result(uuid, text, timestamptz, timestamptz, integer, integer, integer, integer, jsonb),
  public.saa_admin_exams(uuid),
  public.saa_reset(uuid)
to anon, authenticated;
