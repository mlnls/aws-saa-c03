# AWS SAA-C03 문제 모음

SAA-C03 문제를 모아두고 풀면서, **틀린 문제만 따로 모아 보는** 정적 사이트입니다.
프레임워크·빌드 없음 — `index.html` 을 열면 바로 동작합니다.

- 문제 원문(EN) ↔ 한국어 번역 토글
- 선택 즉시 채점 + 정답 근거 / 오답 이유 해설
- 필터: 전체 / 안 푼 문제 / 틀린 문제 / 북마크, 태그·검색
- 닉네임 + PIN 로그인 → 사람별로 기록 분리 (Supabase 연동 시 기기 상관없이 이어짐)

## 구조

```
index.html          앱 화면
assets/style.css    스타일 (라이트/다크 자동 + 토글)
assets/app.js       렌더링·채점·필터
assets/store.js     로그인/기록 저장 (Supabase 또는 localStorage 폴백)
assets/config.js    Supabase URL / anon key  ← 여기만 채우면 서버 저장 모드
data/questions.js   문제 데이터
supabase/schema.sql Supabase 테이블 + RLS
```

## 문제 추가하기

`data/questions.js` 의 배열 끝에 객체를 하나 추가합니다.

```js
{
  id: "t1-a-2",                      // 고유 ID (기록의 키. 한 번 정하면 바꾸지 마세요)
  topic: 1, exam: "A", number: 2,    // 화면에 표시되는 라벨
  tags: ["EC2", "Auto Scaling"],     // 태그 필터에 쓰임
  question: { en: "...", ko: "..." },
  options: [
    { k: "A", en: "...", ko: "..." },
    { k: "B", en: "...", ko: "..." }
  ],
  answer: ["A"],                     // 복수 정답이면 ["A","C"] → 확인 버튼 방식으로 바뀜
  explanation: { ko: "...", en: "..." },   // **굵게** 표시 가능
  why_wrong: { B: { ko: "...", en: "..." } }  // 선택 사항
}
```

## Supabase 연동 (닉네임 + PIN 로그인)

1. [supabase.com](https://supabase.com) 무료 프로젝트 생성
2. **SQL Editor** 에 `supabase/schema.sql` 붙여넣고 Run
3. **Authentication → Sign In / Providers → Email** 에서 `Confirm email` **OFF**
4. **Project Settings → API** 의 `Project URL` 과 `anon public` 키를 `assets/config.js` 에 입력
5. 커밋 & 푸시

> anon key 는 공개용 키라서 저장소에 올려도 됩니다. RLS 정책이 남의 기록 접근을 막습니다.
> 로그인은 `닉네임@saa-c03.local` 형태의 가상 이메일 + PIN(비밀번호 6자 이상)으로 처리됩니다.

키를 넣기 전에는 "이 브라우저에만 저장" 폴백 모드로 동작합니다.

## 배포 (GitHub Pages)

1. GitHub 저장소 → **Settings → Pages**
2. Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save
3. 1~2분 뒤 `https://mlnls.github.io/aws-saa-c03/` 에서 접속
