# AWS SAA-C03 문제 모음

SAA-C03 문제를 모아두고 풀면서, **틀린 문제만 따로 모아 보는** 정적 사이트입니다.
프레임워크·빌드 없음 — `index.html` 을 열면 바로 동작합니다.

- **exam 세트별로 나눠서** 고른 세트만 풀기 (세트별 진행률 표시)
- 문제 원문(EN) ↔ 한국어 번역 토글
- 선택 즉시 채점 + 정답 근거 / 오답 이유 해설
- 필터: 전체 / 안 푼 문제 / 틀린 문제 / 북마크, 태그·검색
- 닉네임 + PIN 로그인 → 사람별로 기록 분리 (Supabase 연동 시 기기 상관없이 이어짐)

## 구조

```
index.html          앱 화면 (세트 선택 → 문제 풀이)
assets/style.css    스타일 (라이트/다크 자동 + 토글)
assets/app.js       라우팅·렌더링·채점·필터
assets/store.js     로그인/기록 저장 (Supabase 또는 localStorage 폴백)
assets/config.js    Supabase URL / publishable key
data/exam1.js       문제 세트 1  (세트 하나 = 파일 하나)
supabase/schema.sql 테이블 + 함수 (닉네임/PIN 검증, 기록 저장)
```

## 문제 세트 (exam1, exam2 …)

문제는 세트 단위로 나뉘어 있고, 사이트 첫 화면에서 세트를 고르면 **그 세트의 문제만** 풀립니다.
세트별 진행률·정답률·오답 수가 카드에 표시되고, `#/exam1` 처럼 주소로 바로 들어갈 수도 있습니다.

세트 하나 = 파일 하나입니다.

```
data/exam1.js   → Exam 1
data/exam2.js   → Exam 2   (새로 만들 때)
```

새 세트를 추가할 때:

1. `data/exam2.js` 를 만들고
   ```js
   window.SAA_EXAMS = window.SAA_EXAMS || [];
   window.SAA_EXAMS.push({
     id: "exam2",              // 주소(#/exam2) 및 내부 키
     title: "Exam 2",
     note: "Topic 1 · Exam B", // 카드에 붙는 부제 (선택)
     questions: [ /* 아래 스키마 */ ]
   });
   ```
2. `index.html` 에 한 줄 추가: `<script src="data/exam2.js"></script>`

## 문제 추가하기

해당 세트 파일의 `questions` 배열 끝에 객체를 추가합니다.

```js
{
  id: "exam1-2",                     // 고유 ID (기록의 키. 한 번 정하면 바꾸지 마세요)
  number: 2,                         // 화면에 표시되는 문제 번호
  tags: ["EC2", "Auto Scaling"],     // 태그 필터에 쓰임
  question: { en: "...", ko: "..." },
  options: [
    { k: "A", en: "...", ko: "..." },
    { k: "B", en: "...", ko: "..." }
  ],
  answer: ["A"],                     // 복수 정답이면 ["A","C"] → 확인 버튼 방식으로 바뀜
  explanation: { ko: "...", en: "..." },      // **굵게** 표시 가능
  why_wrong: { B: { ko: "...", en: "..." } }  // 선택 사항
}
```

## Supabase 연동 (닉네임 + PIN 로그인)

Supabase Auth 를 쓰지 않습니다. `supabase/schema.sql` 이 만드는 DB 함수
(`saa_signup` / `saa_login` / `saa_records` / `saa_save`)가 닉네임 + PIN(bcrypt)을
직접 검증하므로, 대시보드의 Auth 설정(이메일 확인 등)은 건드릴 필요가 없습니다.

1. [supabase.com](https://supabase.com) 무료 프로젝트 생성
2. **SQL Editor** → New query → `supabase/schema.sql` 전체 붙여넣고 **Run**
3. **Settings → Data API** 의 `Project URL`, **Settings → API Keys** 의 `Publishable key`
   를 `assets/config.js` 에 입력
4. 커밋 & 푸시

> publishable key 는 공개용이라 저장소에 올려도 됩니다.
> 테이블은 RLS 만 켜고 정책을 두지 않아, 이 키로는 테이블에 직접 접근할 수 없습니다.
> 모든 읽기·쓰기는 위 함수(security definer)를 통해서만 일어나고, 토큰 없이는 남의 기록을 볼 수 없습니다.
> PIN 은 bcrypt 해시로만 저장되고, 10회 연속 틀리면 10분 잠깁니다.

키를 넣기 전에는 "이 브라우저에만 저장" 폴백 모드로 동작합니다.

## 배포 (GitHub Pages)

1. GitHub 저장소 → **Settings → Pages**
2. Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save
3. 1~2분 뒤 `https://mlnls.github.io/aws-saa-c03/` 에서 접속
