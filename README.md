# AWS SAA-C03 문제 모음

SAA-C03 문제를 모아두고 풀면서, **틀린 문제만 따로 모아 보는** 정적 사이트입니다.
프레임워크·빌드 없음 — `index.html` 을 열면 바로 동작합니다.

- **실전 모의고사별로 관리** — 세트 상세에서 공식 영역 구성과 최근 점수를 확인 후 시작
- **분류(태그)별 성적** — 푼 문제만 집계해 약한 분류부터 다시 풀기
- **29일 서비스 교재** — AWS 공식 문서로 S3·CloudFront·EC2부터 학습하고 관련 기출로 복습
- 서비스 소개는 역할·사용 예시 그림·작동 방식·선택 조건·공식 문서 순서로 구성합니다. `data/study-intros.js`는 29일의 소개 본문과 문서 근거를 관리합니다.
- 모바일에서는 학습 목차를 펼쳐 이동할 수 있으며, 작은 화면에 맞춘 본문·그림과 터치 영역을 제공합니다.
- 문제 원문(EN) ↔ 한국어 번역 토글
- 선택 즉시 채점 + 정답 근거 / 오답 이유 해설
- 필터: 전체 / 안 푼 문제 / 틀린 문제 / 북마크, 태그·검색
- 닉네임 + PIN 로그인 → 사람별로 기록 분리, 세트별 랭킹 (Supabase 연동 시 기기 상관없이 이어짐)

## 구조

### PWA 설치와 오프라인 학습

HTTPS 배포 후 브라우저의 앱 설치 메뉴를 사용합니다. iPhone/iPad는 공유 → 홈 화면에 추가를 선택합니다. S3 정적 웹사이트의 HTTP 주소와 `file://`에서는 설치·서비스 워커가 동작하지 않으므로 CloudFront, GitHub Pages 또는 HTTPS 터널을 사용하세요.

첫 온라인 접속에서 오프라인 파일 준비가 완료되면 725문제와 29일 워크북을 오프라인으로 열 수 있습니다. 로그인·서버 기록 저장에는 인터넷이 필요합니다. 서버 저장 요청은 캐시하거나 오프라인 큐에 넣지 않습니다. 새 버전은 열린 앱·사이트 탭을 모두 닫은 뒤 다시 열 때 적용되어 진행 중인 시험을 강제로 새로고침하지 않습니다.

직접 업로드할 때는 `node scripts/build-pwa.js` 실행 후 `pwa-assets.js`, `sw.js`, `manifest.webmanifest`, 아이콘을 포함해 업로드합니다. GitHub Pages/S3 워크플로는 이 목록을 자동 생성합니다. `sw.js`, `pwa-assets.js`, manifest에는 `Cache-Control: no-cache`를 사용하세요. 코드·데이터·아이콘의 내용 해시로 캐시 버전을 갱신합니다.

```
index.html          앱 화면 (세트 선택 → 문제 풀이)
assets/style.css    스타일 (라이트/다크 자동 + 토글)
assets/app.js       라우팅·렌더링·채점·필터
assets/store.js     로그인/기록 저장 (Supabase 또는 localStorage 폴백)
assets/config.js    Supabase URL / publishable key
data/exam1.js       문제 세트 1  (Topic 1의 #1~50)
data/exam2.js       문제 세트 2  (Topic 1의 #51~100)
data/exam3.js       문제 세트 3  (Topic 1의 #101~150)
data/exam4.js       문제 세트 4  (Topic 1의 #151~200)
data/exam5.js       문제 세트 5  (Topic 1의 #201~250)
data/exam6.js       문제 세트 6  (현재 Topic 1의 #251~300)
data/exam7.js       문제 세트 7  (현재 Topic 1의 #301~350)
data/exam8.js       문제 세트 8  (Topic 1의 #351~400)
data/exam9.js       문제 세트 9  (Topic 1의 #401~450)
data/exam10.js      문제 세트 10 (Topic 1의 #451~500)
data/exam11.js      문제 세트 11 (Topic 1의 #501~550)
data/exam12.js      문제 세트 12 (Topic 1의 #551~600)
data/exam13.js      문제 세트 13 (Topic 1의 #601~650)
data/exam14.js      문제 세트 14 (Topic 1의 #651~700)
data/exam15.js      문제 세트 15 (Topic 1의 #701~725)
data/mock-exams.js  65문항 실전 모의고사 11세트의 문항 순서·평가 영역
scripts/build-mock-exams.js  원본 문제를 공식 영역 비율에 맞춰 다시 배치
supabase/schema.sql 테이블 + 함수 (닉네임/PIN 검증, 기록 저장)
```

## 원본 문제와 실전 모의고사

`data/exam1.js`~`data/exam15.js`는 725개의 원본 문제를 보관하는 파일입니다. 화면의 실전 모의고사는
원본 파일 경계와 관계없이 문제를 섞어 만든 11개 세트이며, `#/mock1`처럼 주소로 바로 들어갈 수 있습니다.

첫 화면의 **문제 유형으로 풀기**에서는 전체 문제를 스토리지, 네트워킹·전송, 컴퓨팅·컨테이너,
데이터베이스, 보안·자격 증명, 애플리케이션 통합, 분석·AI, 관리·비용으로 나눠 바로 풀 수 있습니다.
유형별 문제에는 아직 풀지 않은 문제도 모두 포함됩니다.

각 실전 세트는 AWS SAA-C03 공식 형식에 맞춘 **65문항·130분**입니다. AWS가 공개한 채점 영역 비율을
65문항에 적용해 세트마다 보안 20문항, 복원력 17문항, 고성능 15문항, 비용 최적화 13문항으로 구성합니다.
공식 시험의 15개 비채점 문항은 시험 중 구분되지 않고 영역별 분포도 공개되지 않으므로, 모의고사에서는
65문항 전체에 같은 비율을 적용합니다. 단일 선택과 복수 선택의 정확한 출제 수 역시 공개되지 않아 원본
문제의 비율을 세트 사이에 고르게 나눕니다.

원본 문제를 추가하거나 수정한 뒤 실전 세트를 다시 만들려면 다음 명령을 실행합니다.

```
node scripts/build-mock-exams.js
```

새 원본 문제 파일을 추가할 때:

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
3. `node scripts/build-mock-exams.js`를 실행해 실전 모의고사 배치를 갱신합니다.

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
유형별 연습 (#/practice)     AWS 영역별 문제 · 문제마다 즉시 채점과 해설
실전 시험 (#/exams)         65문항 · 130분 · 공식 영역 비율 · 완료한 시험 점수
   └ 시험 안내 (#/mock1)    영역별 문항 수 · 선택 유형 · 최근 완료 점수
        └ 실전 풀이 (#/mock1/exam)   전 문항을 한 번에 푼 뒤 제출
분류 모아보기 (#/tag/S3)     푼 문제 중 그 분류만 (세트 통합)
워크북 (#/workbook)          4주·Day 1~29 학습 일정과 전체 진도
   └ Day 학습 (#/workbook/day/1)  서비스 이론·선택 기준·관련 기출·공식 문서
```

**유형별 연습**과 **실전 시험**은 서로 다른 기록으로 관리합니다. 유형별 연습은 문제마다 바로 채점하고 기존 오답·북마크 흐름을 사용합니다.
실전 시험은 AWS 공식 시험 형식대로 65문항/130분으로 고정합니다. 답변은 진행 중 메모리에만 두며 전 문항을
제출했을 때만 별도 시험 기록에 저장합니다. 페이지를 나가거나 새로고침하려고 하면 저장되지 않는다는 확인창을 표시하며, 이탈을 선택한 시도는 기록되지 않습니다. 제한 시간이 지나도 시험 화면은
종료되지 않아 계속 풀 수 있습니다. 실전 풀이 중에는 정답을 유추할 수 있는 서비스·분류 태그를 표시하지 않습니다.

상단의 **워크북** 탭은 AWS 공식 문서를 바탕으로 구성한 29일 서비스 학습 과정입니다. 문제 번호 순서와 관계없이 S3, CloudFront,
EC2, VPC, IAM, RDS, Lambda 등의 서비스 원리와 선택 기준을 먼저 설명합니다. 각 이론 단락 아래에는 전체 725문항 중 해당 서비스와
관련된 대표 문제를 자동으로 연결하며, 선택지를 고르고 답안을 제출한 뒤 정답과 해설을 표시합니다. 각 Core Concept 아래의 복습 문제를
모두 제출하면 해당 개념이 자동 완료되고 Day별 및 전체 진도가 브라우저에 저장됩니다. 각 Day 첫 부분에는 AWS 공식 문서를 연결한 서비스 소개, 오늘의 학습 목표,
실제 사용 상황, 역할별 다이어그램, 쉬운 용도 설명과 학습 순서가 먼저 표시됩니다.
29개 Day의 입문 예시는 `data/study-visuals.js`에서 관리하며, 세부 주제 요약은 펼쳐서 확인합니다.
교재 원문은 `data/study.js`에서 관리합니다.

- 유형별 연습 진행률: 푼 개수 / 정답 / 오답 / 정답률 / 북마크
- **같이 푸는 사람들**: 그 세트 기준으로 닉네임별 푼 개수·점수·정답률 랭킹 (Supabase 연동 + 로그인 시 표시)
- **문제 유형으로 풀기**: 스토리지 / 네트워킹 / 컴퓨팅 / 데이터베이스 / 보안 / 애플리케이션 통합 / 분석 / 관리·비용 중 하나를 골라 연습합니다. 유형 선택 카드는 진도나 성적 수치 없이 유형명만 표시합니다.

## 관리자 화면

특정 닉네임에만 보이는 `#/admin` 화면에서 **누가 어느 문제에서 무엇을 골라 틀렸는지** 볼 수 있습니다.

- **사람별 현황** — 닉네임 / 푼 개수 / 정답 / 오답 / 정답률 / 최근 활동. 이름을 누르면
  그 사람이 틀린 문제와 **고른 답 ↔ 정답**이 아래에 펼쳐집니다.
- **문제별 현황** — 많이 틀린 문제부터. 사람들이 고른 **선택지 분포**(`D 3` `A 1` …, 정답은 초록)와
  틀린 사람 목록이 함께 나옵니다. `틀린 문제 있는 것만` / `푼 문제 전체` 토글.

### 관리자 지정 방법

1. 사이트에서 닉네임 `admin` 으로 **직접 가입**합니다. (가입은 사이트에서 해야 PIN 해시가 제대로 저장됩니다)
2. Supabase SQL Editor 에서 한 줄 실행:
   ```sql
   update public.saa_users set is_admin = true where handle = 'admin';
   ```
3. 다시 로그인하면 헤더에 `관리자` 버튼이 나타납니다.

권한은 **DB 함수 안에서** 확인합니다(`saa_admin_rows` / `saa_admin_users`). 호출자 토큰이
`is_admin` 사용자가 아니면 **한 행도 반환하지 않으므로**, 프런트엔드를 조작해도 남의 기록은 볼 수 없습니다.

> ⚠️ PIN 은 관리자 계정의 유일한 자격 증명입니다. `000000` 같은 값은 누구나 대입할 수 있으니
> (10회 실패 시 10분 잠금은 걸려 있지만) 공개 배포 후에는 길게 바꾸는 것을 권합니다.
> ```sql
> update public.saa_users
>    set pin_hash = extensions.crypt('새PIN', extensions.gen_salt('bf')), failed = 0, locked_until = null
>  where handle = 'admin';
> ```

## 풀이 방식

- **한 화면에 한 문제**만 나옵니다. `문제 목록` 버튼을 누르면 오른쪽 사이드 패널이 열리고,
  Exam별로 묶인 번호를 눌러 바로 이동할 수 있습니다. 번호 색은 정답(초록)·오답(빨강)·미풀이(회색)를 나타냅니다.
- 유형별 연습에서는 선택지를 누른 뒤 **확인**을 눌러 문제마다 채점합니다. (확인 전에는 선택을 자유롭게 변경 가능)
- 채점 결과는 **맞았다 / 틀렸다만** 알려주고 **정답과 해설은 가려 둡니다.**
  보고 싶을 때 `정답·해설 보기` 를 누르면 펼쳐집니다. → 나중에 오답만 다시 풀 때 정답이 기억나버리는 걸 막습니다.
- 키보드: `A`~`D` 또는 `1`~`4` 선택, `Enter` 확인/다음, `←` `→` 이동
- 실전 시험에서는 선택 직후 채점하지 않습니다. 문제 목록에는 답변 여부만 표시하고 전 문항 제출 후 점수를 계산합니다.
- 필터는 **풀이 대상 목록**을 정합니다. 필터를 건 뒤 문제를 풀어도 목록에서 즉시 사라지지 않아 흐름이 끊기지 않습니다.

## 배포

### GitHub Pages (기본, `.github/workflows/pages.yml`)

`main` 에 push 하면 자동 배포됩니다. 처음 한 번만 저장소 **Settings → Pages → Source: GitHub Actions** 로 바꿔 주세요.
배포 전에 문제 데이터를 검사해서 **문법 오류·중복 id·정답 키 불일치가 있으면 배포를 막습니다.**

### S3 정적 웹사이트 호스팅만으로 열기

CloudFront 없이 S3 하나로 공개할 때의 설정입니다.

1. **버킷 생성** — 리전은 아무 곳이나(예: `ap-northeast-2`). Object Ownership 은 기본값
   `ACLs disabled (Bucket owner enforced)` 그대로 둡니다. (ACL 대신 버킷 정책으로 공개)
2. **Block Public Access 해제** — 버킷 → Permissions → *Block public access (bucket settings)* → Edit →
   **네 항목 모두 해제** → Save (`confirm` 입력). 버킷 정책으로 공개하려면 필요합니다.
3. **버킷 정책** — Permissions → *Bucket policy* → `aws/bucket-policy.json` 내용을 붙여넣고
   `BUCKET_NAME` 을 실제 버킷 이름으로 바꿉니다.
   ```json
   { "Version": "2012-10-17", "Statement": [{
       "Sid": "PublicReadGetObject", "Effect": "Allow", "Principal": "*",
       "Action": "s3:GetObject", "Resource": "arn:aws:s3:::BUCKET_NAME/*" }] }
   ```
4. **정적 웹사이트 호스팅 활성화** — Properties → *Static website hosting* → Enable
   - Index document: `index.html`
   - Error document: `index.html`
5. **파일 업로드** — 아래 10개만 올립니다(폴더 구조 유지).
   ```
   index.html
   assets/config.js  assets/store.js  assets/app.js  assets/style.css
   data/exam1.js  data/exam2.js  data/exam3.js  data/exam4.js  data/exam5.js  data/exam6.js  data/exam7.js  data/exam8.js  data/exam9.js  data/exam10.js  data/exam11.js  data/exam12.js
   ```
   ```bash
   aws s3 sync . s3://BUCKET_NAME --delete \
     --exclude ".*" --exclude ".git/*" --exclude ".github/*" \
     --exclude "supabase/*" --exclude "aws/*" --exclude "README.md" \
     --exclude "index.html" --exclude "data/*" \
     --cache-control "public,max-age=86400"
   aws s3 cp index.html s3://BUCKET_NAME/index.html --cache-control "no-cache"
   aws s3 sync data s3://BUCKET_NAME/data --delete --cache-control "no-cache"
   ```
6. **접속** — Properties 의 *Bucket website endpoint*
   (`http://BUCKET_NAME.s3-website.ap-northeast-2.amazonaws.com`)

> 주의할 점
> - 웹사이트 엔드포인트는 **HTTP 전용**입니다. 페이지가 HTTP 라도 Supabase(HTTPS) 호출은 정상 동작합니다
>   (차단되는 건 HTTPS 페이지 → HTTP 요청 방향). 자물쇠가 필요하면 CloudFront + OAC 를 앞에 두세요.
> - `s3://BUCKET/x` 같은 REST 엔드포인트(`BUCKET.s3.ap-northeast-2.amazonaws.com`)로 열면
>   Index document 가 적용되지 않습니다. 반드시 **website endpoint** 로 접속하세요.
> - 이 구성은 버킷을 전체 공개로 만듭니다. 올린 파일(문제·해설·publishable key)은 모두 공개되어도
>   되는 것들이지만, 같은 버킷에 다른 파일을 두지 마세요.

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
