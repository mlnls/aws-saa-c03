-- AWS SAA-C03 문제 사이트용 Supabase 스키마
-- Supabase 대시보드 → SQL Editor 에 붙여넣고 Run 하세요.

-- 1) 닉네임 프로필
create table if not exists public.profiles (
  id         uuid primary key references auth.users on delete cascade,
  nickname   text unique not null,
  created_at timestamptz not null default now()
);

-- 2) 문제 풀이 기록 (사람당 문제당 1행)
create table if not exists public.attempts (
  user_id    uuid not null references auth.users on delete cascade,
  qid        text not null,
  choice     text[],
  correct    boolean,
  bookmarked boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, qid)
);

alter table public.profiles enable row level security;
alter table public.attempts enable row level security;

-- 프로필: 닉네임은 서로 볼 수 있고, 수정은 본인만
drop policy if exists "profiles read"   on public.profiles;
drop policy if exists "profiles write"  on public.profiles;
drop policy if exists "profiles update" on public.profiles;
create policy "profiles read"   on public.profiles for select using (true);
create policy "profiles write"  on public.profiles for insert with check (auth.uid() = id);
create policy "profiles update" on public.profiles for update using (auth.uid() = id);

-- 기록: 본인 것만 읽고 쓸 수 있음
drop policy if exists "attempts own" on public.attempts;
create policy "attempts own" on public.attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ⚠️ 대시보드에서 한 가지 더:
--   Authentication → Sign In / Providers → Email 에서
--   "Confirm email" 을 OFF (닉네임@saa-c03.local 가상 이메일을 쓰기 때문에 확인 메일을 받을 수 없음)
