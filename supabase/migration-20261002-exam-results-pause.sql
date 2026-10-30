-- 2026-10-02 마이그레이션 (schema.sql 에도 반영됨). Supabase SQL Editor 에서 Run. 여러 번 실행해도 안전.
-- 1) 운영 DB 에 빠져 있던 실전 시험 결과 테이블·함수
-- 2) 일시정지 시험을 화면(sid) 단위로 안전하게 저장하는 함수

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
alter table public.saa_exam_results enable row level security;
revoke all on public.saa_exam_results from anon, authenticated;

-- 내가 완료한 실전 시험의 최신 결과
create or replace function public.saa_exam_results(p_token uuid)
returns setof public.saa_exam_results language sql security definer set search_path = public as $$
  select r.* from public.saa_exam_results r
  join public.saa_users u on u.id = r.user_id
  where u.token = p_token;
$$;

-- 실전 시험 결과 저장. 전 문항 제출을 마친 뒤 클라이언트가 한 번만 호출한다.
create or replace function public.saa_save_exam_result(
  p_token uuid, p_exam_id text, p_started_at timestamptz, p_finished_at timestamptz,
  p_elapsed_seconds integer, p_limit_seconds integer, p_total integer, p_correct integer, p_answers jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  select id into uid from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  insert into public.saa_exam_results
    (user_id, exam_id, started_at, finished_at, elapsed_seconds, limit_seconds, total, correct, answers)
  values
    (uid, p_exam_id, p_started_at, p_finished_at, p_elapsed_seconds, p_limit_seconds, p_total, p_correct, p_answers)
  on conflict (user_id, exam_id) do update
    set started_at = excluded.started_at, finished_at = excluded.finished_at,
        elapsed_seconds = excluded.elapsed_seconds, limit_seconds = excluded.limit_seconds,
        total = excluded.total, correct = excluded.correct, answers = excluded.answers;
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

grant execute on function
  public.saa_exam_results(uuid),
  public.saa_save_exam_result(uuid, text, timestamptz, timestamptz, integer, integer, integer, integer, jsonb),
  public.saa_save_pause(uuid, text, jsonb, boolean),
  public.saa_clear_pause(uuid, text, text)
to anon, authenticated;
