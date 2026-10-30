-- 2026-10-02 관리자 "같이 오답 리뷰" 용: 모든 사람의 실전 시험 답안 (제출 결과 + 일시정지 중인 답)
-- 호출자의 토큰이 is_admin 사용자가 아니면 한 행도 반환하지 않는다.
create or replace function public.saa_admin_exams(p_token uuid)
returns table (nickname text, exam_id text, status text, answers jsonb, correct integer, total integer, at timestamptz)
language sql security definer set search_path = public as $$
  with me as (select 1 from public.saa_users where token = p_token and is_admin)
  select u.nickname, r.exam_id, 'done'::text, r.answers, r.correct, r.total, r.finished_at
  from public.saa_exam_results r join public.saa_users u on u.id = r.user_id
  where exists (select 1 from me)
  union all
  select u.nickname, p.key, 'paused'::text, coalesce(p.value -> 'answers', '{}'::jsonb), null::integer, null::integer,
         to_timestamp(nullif(p.value ->> 'pausedAt', '')::double precision / 1000)
  from public.saa_user_state s
  join public.saa_users u on u.id = s.user_id
  cross join lateral jsonb_each(case when jsonb_typeof(s.value) = 'object' then s.value else '{}'::jsonb end) p
  where s.key = 'exam.paused' and exists (select 1 from me) and jsonb_typeof(p.value) = 'object';
$$;
revoke all on function public.saa_admin_exams(uuid) from public;
grant execute on function public.saa_admin_exams(uuid) to anon, authenticated;
