# AWS SAA-C03 문제 모음

SAA-C03 문제를 모아두고 풀면서, **틀린 문제만 따로 모아 보는** 정적 사이트입니다.
프레임워크·빌드 없음 — `index.html` 을 열면 바로 동작합니다.

- **세트(exam)별로 나눠서** 관리 — 세트 상세에서 진행률·랭킹·분류별 성적 확인 후 시작
- **분류(태그)별 성적** — 푼 문제만 집계해 약한 분류부터 다시 풀기
- 문제 원문(EN) ↔ 한국어 번역 토글
- 선택 즉시 채점 + 정답 근거 / 오답 이유 해설
- 필터: 전체 / 안 푼 문제 / 틀린 문제 / 북마크, 태그·검색
- 닉네임 + PIN 로그인 → 사람별로 기록 분리, 세트별 랭킹 (Supabase 연동 시 기기 상관없이 이어짐)

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

**한 세트 = 50문제**를 기준으로 나눕니다. 세트 하나 = 파일 하나입니다.

```
data/exam1.js   → Exam 1  (Topic 1 의 #1~50)
data/exam2.js   → Exam 2  (Topic 1 의 #51~100)  ← 새로 만들 때
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

> `schema.sql` 은 여러 번 실행해도 안전합니다(기존 기록 유지). 함수가 바뀌면 다시 실행해 주세요.

> publishable key 는 공개용이라 저장소에 올려도 됩니다.
> 테이블은 RLS 만 켜고 정책을 두지 않아, 이 키로는 테이블에 직접 접근할 수 없습니다.
> 모든 읽기·쓰기는 위 함수(security definer)를 통해서만 일어나고, 토큰 없이는 남의 기록을 볼 수 없습니다.
> PIN 은 bcrypt 해시로만 저장되고, 10회 연속 틀리면 10분 잠깁니다.

키를 넣기 전에는 "이 브라우저에만 저장" 폴백 모드로 동작합니다.

## 화면 구성

```
세트 목록 (#/)              세트 카드 + 전체 분류별 성적
   └ 세트 상세 (#/exam1)    내 진행률 · 같이 푸는 사람들 랭킹 · 이 세트의 분류별 성적 · 시작 버튼들
        └ 문제 풀이 (#/exam1/solve/all)   한 화면에 한 문제
분류 모아보기 (#/tag/S3)     푼 문제 중 그 분류만 (세트 통합)
```

세트를 누르면 바로 문제로 들어가지 않고 **상세 화면**이 먼저 열립니다.

- 진행률(푼 개수 / 정답 / 오답 / 정답률)과 시작 버튼: `이어서 풀기` `처음부터` `안 푼 문제만` `틀린 문제만` `북마크만`
- **같이 푸는 사람들**: 그 세트 기준으로 닉네임별 푼 개수·점수·정답률 랭킹 (Supabase 연동 + 로그인 시 표시)
- **분류별 성적**: 그 세트에서 **푼 문제만** 집계해 태그별 정답률을 보여주고, **약한 분류가 위로** 정렬됩니다.
  줄을 누르면 그 분류로 푼 문제만 모아 다시 풀 수 있습니다.

세트 목록 화면 아래의 분류별 성적은 **모든 세트를 합친** 집계입니다.

## 풀이 방식

- **한 화면에 한 문제**만 나옵니다. 위쪽 번호 스트립으로 아무 문제나 바로 이동할 수 있고,
  번호 색이 정답(초록)·오답(빨강)·미풀이(회색)를 나타냅니다.
- 선택지를 누르면 **선택만** 되고 채점되지 않습니다. **확인**을 눌러야 채점됩니다. (선택은 자유롭게 변경 가능)
- 채점 결과는 **맞았다 / 틀렸다만** 알려주고 **정답과 해설은 가려 둡니다.**
  보고 싶을 때 `정답·해설 보기` 를 누르면 펼쳐집니다. → 나중에 오답만 다시 풀 때 정답이 기억나버리는 걸 막습니다.
- 키보드: `A`~`D` 또는 `1`~`4` 선택, `Enter` 확인(채점 후엔 다음 문제), `←` `→` 이동
- 마지막으로 보던 문제 번호는 세트별로 기억되어 `이어서 풀기` 로 그 자리에서 계속할 수 있습니다.
- 필터는 **풀이 대상 목록**을 정합니다. 필터를 건 뒤 문제를 풀어도 목록에서 즉시 사라지지 않아 흐름이 끊기지 않습니다.

## 배포

### GitHub Pages (기본, `.github/workflows/pages.yml`)

`main` 에 push 하면 자동 배포됩니다. 처음 한 번만 저장소 **Settings → Pages → Source: GitHub Actions** 로 바꿔 주세요.
배포 전에 문제 데이터를 검사해서 **문법 오류·중복 id·정답 키 불일치가 있으면 배포를 막습니다.**

### S3 + CloudFront (선택, `.github/workflows/s3.yml`)

Actions 탭에서 수동 실행(`Run workflow`)합니다. 먼저 저장소에 값을 넣어 주세요.

| 종류 | 이름 | 예시 |
| --- | --- | --- |
| Variables | `AWS_REGION` | `ap-northeast-2` |
| Variables | `S3_BUCKET` | `saa-c03-quiz` |
| Variables | `CLOUDFRONT_ID` | CloudFront 안 쓰면 비워 두기 |
| Secrets | `AWS_ROLE_ARN` | GitHub OIDC 를 신뢰하는 IAM 역할 ARN |

`index.html` 과 `data/` 는 `no-cache`, 나머지 정적 자원은 1일 캐시로 올리고, CloudFront ID 가 있으면 무효화까지 수행합니다.
문제를 추가해도 캐시 때문에 안 보이는 상황이 생기지 않습니다.

> S3 정적 웹사이트 엔드포인트는 HTTP 전용입니다. HTTPS 가 필요하면 CloudFront + OAC 를 앞에 두세요.

## 그 밖의 배포 (수동)

1. GitHub 저장소 → **Settings → Pages**
2. Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save
3. 1~2분 뒤 `https://mlnls.github.io/aws-saa-c03/` 에서 접속
