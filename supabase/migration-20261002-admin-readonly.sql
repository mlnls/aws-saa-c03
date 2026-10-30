-- 2026-10-02 관리자는 문제를 풀지 않는다: 관리자 목록·순위에서 제외 + 관리자 토큰으로는 풀이 기록 저장 불가.
-- (일시정지 저장 saa_save_pause 는 클라이언트에서 막는다 — 관리자는 시험 화면에 들어갈 수 없음)

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

create or replace function public.saa_save_exam_result(
  p_token uuid, p_exam_id text, p_started_at timestamptz, p_finished_at timestamptz,
  p_elapsed_seconds integer, p_limit_seconds integer, p_total integer, p_correct integer, p_answers jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid; adm boolean;
begin
  select id, is_admin into uid, adm from public.saa_users where token = p_token;
  if uid is null then raise exception 'BAD_TOKEN'; end if;
  if adm then raise exception 'ADMIN_READONLY'; end if;
  insert into public.saa_exam_results
    (user_id, exam_id, started_at, finished_at, elapsed_seconds, limit_seconds, total, correct, answers)
  values
    (uid, p_exam_id, p_started_at, p_finished_at, p_elapsed_seconds, p_limit_seconds, p_total, p_correct, p_answers)
  on conflict (user_id, exam_id) do update
    set started_at = excluded.started_at, finished_at = excluded.finished_at,
        elapsed_seconds = excluded.elapsed_seconds, limit_seconds = excluded.limit_seconds,
        total = excluded.total, correct = excluded.correct, answers = excluded.answers;
end $$;

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
  with me as (select 1 from public.saa_users where token = p_token and is_admin)
  select u.nickname, r.exam_id, 'done'::text, r.answers, r.correct, r.total, r.finished_at
  from public.saa_exam_results r join public.saa_users u on u.id = r.user_id
  where not u.is_admin and exists (select 1 from me)
  union all
  select u.nickname, p.key, 'paused'::text, coalesce(p.value -> 'answers', '{}'::jsonb), null::integer, null::integer,
         to_timestamp(nullif(p.value ->> 'pausedAt', '')::double precision / 1000)
  from public.saa_user_state s
  join public.saa_users u on u.id = s.user_id
  cross join lateral jsonb_each(case when jsonb_typeof(s.value) = 'object' then s.value else '{}'::jsonb end) p
  where s.key = 'exam.paused' and not u.is_admin and exists (select 1 from me) and jsonb_typeof(p.value) = 'object';
$$;
