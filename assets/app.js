(function () {
  const SOURCE_EXAMS = (window.SAA_EXAMS || []).map((e) => ({
    id: e.id, title: e.title, note: e.note || "",
    questions: (e.questions || []).map((q) => Object.assign({}, q, { examId: e.id, sourceExamId: e.id })),
  }));
  const ALL = SOURCE_EXAMS.flatMap((e) => e.questions);
  const QUESTION_BY_ID = new Map(ALL.map((question) => [question.id, question]));
  const byId = (id) => QUESTION_BY_ID.get(id);
  const MOCK_DOMAINS = window.SAA_MOCK_DOMAINS || [];
  const EXAMS = (window.SAA_MOCK_EXAMS || []).map((exam) => {
    const entries = (exam.questions || []).filter((item) => byId(item.id));
    return {
      id: exam.id,
      title: exam.title,
      note: exam.note || "",
      entries,
      questions: entries.map((item) => byId(item.id)),
      domainByQuestion: Object.fromEntries(entries.map((item) => [item.id, item.domain])),
    };
  });
  const examOf = (id) => EXAMS.find((e) => e.id === id);
  const sourceExamOf = (id) => SOURCE_EXAMS.find((e) => e.id === id);
  const MOCK_ASSIGNMENT = (() => {
    const map = {};
    EXAMS.forEach((exam) => exam.entries.forEach((item, index) => {
      map[item.id] = { examId: exam.id, domain: item.domain, position: index + 1 };
    }));
    return map;
  })();

  const $ = (s, r = document) => r.querySelector(s);
  // 관리자는 문제를 풀지 않는다 — 관리자 화면 + 워크북 읽기만
  const isAdmin = () => !!(window.Store && Store.user && Store.user.isAdmin);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = (s) => esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

  const S = {
    lang: localStorage.getItem("saa.lang") || "en",
    view: "home",                 // home | detail | solve
    scope: null,                  // {type:"exam", id} | {type:"tag", tag}
    filter: "all", tag: "", search: "",
    work: [], idx: 0,
    sel: {}, reveal: {},
    board: null,                  // saa_board 결과 캐시
    boardLegacy: false,
    adm: null,                    // 관리자 데이터 {rows, users}
    admPerson: null,              // 상세를 펼친 사람
    admScope: "wrong",
    rv: null,                     // 같이 오답 리뷰 {set, pos}
    rvOnlyWrong: true, rvPaused: true, rvAlways: false, rvShown: {}, rvList: [],
    rvNames: (() => { try { return localStorage.getItem("saa.rv.names") || "show"; } catch (_) { return "show"; } })(), // show | after | hide
    workbookDay: 1,
    homeMode: "practice",        // practice | exams
    examSession: null,            // 진행 중 실전 시험 (나가면 계정 상태 exam.paused 에 일시정지 저장)
    resumeIdx: null,              // 이어서 풀 때 복원할 문제 위치
    examTimerId: null,
    reportFilter: "wrong",        // wrong | all
    reportAttempt: 0,             // 리포트로 볼 회차 (0 = 최근)
    reportTag: "",
    reportFocus: null,            // 워크북에서 돌아올 때 스크롤할 문제 id
    workbookTopic: 0,             // #/workbook/day/N/topic/M 의 M
    studyReturn: null,            // {hash, qid, pos} 리포트에서 워크북으로 넘어온 경우
  };

  const txt = (o) => (!o ? "" : S.lang === "ko" ? (o.ko || o.en || "") : (o.en || o.ko || ""));
  const rec = (id) => Store.records[id] || {};
  const answered = (id) => Array.isArray(rec(id).choice) && rec(id).choice.length > 0;
  const posKey = (id) => "saa.pos." + id;
  const examDurationSeconds = (count) => count === 65 ? 130 * 60 : count * 120;
  // 일시정지한 실전 시험: 계정 상태 "exam.paused" = {examId: {sid, startedAt, elapsedSeconds, limitSeconds, answers, idx, pausedAt}}
  // 쓰기는 Store.savePause / Store.clearPause (화면 sid 단위 조건부 저장)로만 한다.
  function pausedMap() {
    const map = Store.user && Store.getState("exam.paused");
    return map && typeof map === "object" ? Object.assign({}, map) : {};
  }
  const newSid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  // 그 뒤에 제출한 시험이 있으면(다른 기기에서 제출 등) 낡은 일시정지로 보고 무시한다.
  const isStalePause = (examId, p) => {
    const done = latestAttempt(examId);
    return !!(done && Number(done.finishedAt) > Number(p.startedAt || 0));
  };
  const pausedExam = (examId) => {
    const p = pausedMap()[examId];
    return p && p.answers && !isStalePause(examId, p) ? p : null;
  };
  function purgeStalePauses() {
    const map = pausedMap();
    const stale = Object.keys(map).filter((id) => !map[id] || !map[id].answers || isStalePause(id, map[id]));
    stale.forEach((id) => { if (!(isTimedExam() && S.examSession.examId === id)) Store.clearPause(id, null); });
  }
  function clearPausedExam(examId) { if (pausedMap()[examId]) Store.clearPause(examId, null); }
  // resumedAt 이 null 이면 멈춘 상태(다른 곳과 충돌)
  const examElapsed = (session) => session.elapsedBefore + (session.resumedAt ? (Date.now() - session.resumedAt) / 1000 : 0);
  const pausedAnsweredCount = (e, p) => e.questions.filter((q) => (p.answers[q.id] || []).length === (q.answer || []).length).length;
  const latestAttempt = (examId) => Store.latestExamAttempt ? Store.latestExamAttempt(examId) : null;
  // 응시 이력: 오래된 것부터 1회차, 2회차 …
  const examHistory = (examId) => (Store.examHistory ? Store.examHistory(examId) : []).slice().reverse();
  function reportAttemptOf(examId, n) {
    const h = examHistory(examId);
    if (!h.length) return null;
    const i = n && n >= 1 && n <= h.length ? n - 1 : h.length - 1;
    return { attempt: h[i], no: i + 1, count: h.length };
  }
  const isTimedExam = () => !!(S.scope && S.scope.type === "exam" && S.examSession && S.examSession.examId === S.scope.id);
  const timedChoice = (id) => isTimedExam() ? (S.examSession.answers[id] || []) : [];
  const timedAnswered = (id) => {
    const q = byId(id);
    return !!(q && timedChoice(id).length === (q.answer || []).length);
  };
  const domainCounts = (exam) => MOCK_DOMAINS.map((domain) => ({
    ...domain,
    count: exam.entries.filter((item) => item.domain === domain.id).length,
  }));
  const multiCount = (exam) => exam.questions.filter((question) => (question.answer || []).length > 1).length;
  function domainResults(exam, attempt) {
    return domainCounts(exam).map((domain) => {
      const entries = exam.entries.filter((item) => item.domain === domain.id);
      const correct = entries.filter((item) => {
        const question = byId(item.id);
        const selected = (attempt && attempt.answers && attempt.answers[item.id]) || [];
        return (question.answer || []).slice().sort().join(",") === selected.slice().sort().join(",");
      }).length;
      return { ...domain, correct };
    });
  }
  const domainMixHtml = (exam, attempt) => `<div class="exam-domain-mix">${(attempt ? domainResults(exam, attempt) : domainCounts(exam)).map((domain) =>
    `<span data-domain="${domain.id}"><small>${esc(domain.shortName || domain.name)} ${domain.weight}%</small><b>${attempt ? `${domain.correct}/${domain.count}` : `${domain.count}문항`}</b></span>`
  ).join("")}</div>`;

  function tally(list) {
    let ok = 0, bad = 0, marked = 0;
    list.forEach((q) => { const r = rec(q.id); if (r.correct === true) ok++; else if (r.correct === false) bad++; if (r.bookmarked) marked++; });
    return { total: list.length, ok, bad, marked, solved: ok + bad, rate: ok + bad ? Math.round((ok / (ok + bad)) * 100) : 0 };
  }

  /* ---------------- theme ---------------- */
  const savedTheme = localStorage.getItem("saa.theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("saa.theme", next);
  });

  /* ---------------- 분류(태그) 그룹 ---------------- */
  const TAG_GROUPS = [
    { id: "storage", icon: "🗄️", name: "스토리지", keywords: ["s3", "glacier", "ebs", "efs", "fsx", "storage", "snowball", "snapshot", "backup", "durability"], tags: ["S3", "S3 Lifecycle", "S3 Storage Class", "S3 Versioning", "MFA Delete", "Glacier", "EBS", "EFS", "Instance Store", "Storage Gateway", "Snowball", "Snapshot", "Durability"] },
    { id: "networking", icon: "🌐", name: "네트워킹 · 전송", keywords: ["vpc", "endpoint", "nat", "cloudfront", "route 53", "global accelerator", "load balancer", "direct connect", "nlb", "alb", "network", "data transfer", "latency", "hybrid"], tags: ["VPC", "VPC Endpoint", "NAT Gateway", "CloudFront", "Route 53", "Global Accelerator", "Gateway Load Balancer", "Direct Connect", "NLB", "Data Transfer", "Latency", "Hybrid"] },
    { id: "compute", icon: "⚙️", name: "컴퓨팅 · 컨테이너", keywords: ["ec2", "auto scaling", "lambda", "serverless", "ecs", "eks", "fargate", "elastic beanstalk", "capacity", "scaling", "compute"], tags: ["EC2", "Auto Scaling", "Lambda", "Serverless", "Capacity Reservation", "Scaling", "Performance", "Static Website"] },
    { id: "database", icon: "🛢️", name: "데이터베이스", keywords: ["rds", "aurora", "dynamodb", "elasticache", "dax", "database", "redis", "memcached", "documentdb", "redshift"], tags: ["RDS", "Aurora", "DynamoDB"] },
    { id: "security", icon: "🔐", name: "보안 · 자격 증명", keywords: ["iam", "security", "kms", "secret", "shield", "waf", "ddos", "firewall", "macie", "pii", "phi", "compliance", "organizations", "identity", "certificate", "acm", "encryption"], tags: ["IAM", "Security", "KMS", "Secrets Manager", "Shield Advanced", "DDoS", "Network Firewall", "Macie", "PII", "Least Privilege", "Organizations", "Active Directory", "SSO", "IAM Identity Center"] },
    { id: "integration", icon: "🔗", name: "애플리케이션 통합", keywords: ["sqs", "sns", "eventbridge", "api gateway", "appflow", "ses", "decoupling", "queue", "step functions"], tags: ["SQS", "SQS FIFO", "SNS", "Decoupling", "API Gateway", "AppFlow", "SaaS"] },
    { id: "analytics", icon: "📊", name: "분석 · AI", keywords: ["athena", "analytics", "quicksight", "kinesis", "firehose", "redshift", "glue", "emr", "rekognition", "textract", "comprehend", "sagemaker", "transcribe"], tags: ["Athena", "Analytics", "QuickSight", "Kinesis Data Streams", "Kinesis Data Firehose", "Ingestion"] },
    { id: "management", icon: "📋", name: "관리 · 비용", keywords: ["config", "cloudtrail", "cloudwatch", "systems manager", "session manager", "service catalog", "governance", "patch", "cost", "billing", "migration", "operational excellence", "tagging"], tags: ["AWS Config", "CloudTrail", "CloudWatch", "Systems Manager", "Session Manager", "AWS Service Catalog", "Governance", "Run Command", "Patching", "Compliance", "Audit", "Tagging", "Cost", "Cost Explorer", "Billing", "Migration", "Multi-Region", "High Availability"] },
  ];
  const categoryOf = (id) => TAG_GROUPS.find((g) => g.id === id);
  const inCategory = (q, group) => {
    const hay = (q.tags || []).join(" ").toLowerCase();
    return group.keywords.some((k) => hay.includes(k));
  };

  /* ---------------- 서비스 중심 학습 워크북 ---------------- */
  const STUDY_PRACTICE_KEY = "saa.study.practice.answers";
  const STUDY_DAYS = (window.SAA_STUDY || []).map((day, index) => Object.assign({ number: index + 1 }, day));
  const STUDY_WEEKS = [7, 7, 7, 8].map((size, index, sizes) => {
    const start = sizes.slice(0, index).reduce((sum, value) => sum + value, 0);
    return { number: index + 1, days: STUDY_DAYS.slice(start, start + size) };
  });
  // 로그인하면 계정 상태(study.answers / study.read)를, 아니면 이 기기 사본을 쓴다.
  function guestJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || "{}") || {}; } catch (_) { return {}; }
  }
  let studyAnswers = guestJson(STUDY_PRACTICE_KEY);
  const studySelections = {};
  /* 컨셉/전체 설명 '봤어요' 체크(로컬 저장) + 접힘 상태(세션 메모리, 기본값은 읽은 섹션만 접힘) */
  const STUDY_READ_KEY = "saa.study.read";
  let studyRead = guestJson(STUDY_READ_KEY);
  const studyFold = {};
  function saveStudyRead() {
    if (Store.user) { Store.setState("study.read", Object.keys(studyRead).length ? studyRead : null); return; }
    try { localStorage.setItem(STUDY_READ_KEY, JSON.stringify(studyRead)); } catch (_) {}
  }
  // 로그인/로그아웃·다른 기기 변경 반영. 로그인 시 이 기기에 남은 비로그인 기록은 계정으로 합치고 기기 사본은 비운다.
  function applyAccountState() {
    if (!Store.user) {
      studyRead = guestJson(STUDY_READ_KEY);
      studyAnswers = guestJson(STUDY_PRACTICE_KEY);
      return;
    }
    const guestRead = guestJson(STUDY_READ_KEY), guestAnswers = guestJson(STUDY_PRACTICE_KEY);
    studyRead = Object.assign({}, guestRead, Store.getState("study.read") || {});
    studyAnswers = Object.assign({}, guestAnswers, Store.getState("study.answers") || {});
    if (Object.keys(guestRead).length) { saveStudyRead(); try { localStorage.removeItem(STUDY_READ_KEY); } catch (_) {} }
    if (Object.keys(guestAnswers).length) { saveStudyAnswers(); try { localStorage.removeItem(STUDY_PRACTICE_KEY); } catch (_) {} }
    // 이전 버전(기기별 저장)의 일시정지 시험 이관
    const legacyKey = "saa.exam.paused." + Store.user.nickname;
    const legacy = guestJson(legacyKey);
    if (Object.keys(legacy).length) {
      const current = pausedMap();
      Object.keys(legacy).forEach((id) => {
        if (!current[id] && legacy[id] && legacy[id].answers) Store.savePause(id, Object.assign({}, legacy[id], { sid: newSid() }), true);
      });
      try { localStorage.removeItem(legacyKey); } catch (_) {}
    }
    purgeStalePauses();
  }
  const overviewKey = (day) => `day-${day.number}-overview`;
  const primerKey = (day) => `day-${day.number}-primer`;
  const studyHook = (day) => (window.SAA_STUDY_HOOKS || {})[day.number] || {};
  const isStudyFolded = (key) => key in studyFold ? studyFold[key] : true; // 처음엔 모두 접힌 상태
  function studyReadKeys(day) {
    const keys = day.lessons.map((_, index) => sectionKey(day, index));
    if (!window.SAA_STUDY_DETAILS || studyDetail(day)) keys.unshift(overviewKey(day));
    keys.unshift(primerKey(day));
    return keys;
  }
  function studyReadCount(day) {
    const keys = studyReadKeys(day);
    return { done: keys.filter((key) => studyRead[key]).length, total: keys.length };
  }

  function saveStudyAnswers() {
    if (Store.user) { Store.setState("study.answers", Object.keys(studyAnswers).length ? studyAnswers : null); return; }
    try { localStorage.setItem(STUDY_PRACTICE_KEY, JSON.stringify(studyAnswers)); } catch (_) {}
  }
  const sectionKey = (day, index) => `day-${day.number}-section-${index}`;
  const studyAnswerKey = (day, lessonIndex, questionId) => `${sectionKey(day, lessonIndex)}-${questionId}`;
  function studySectionComplete(day, lessonIndex) {
    const practice = practiceFor(day, lessonIndex);
    return practice.length > 0 && practice.every((question) => !!studyAnswers[studyAnswerKey(day, lessonIndex, question.id)]);
  }
  function studyProgress(days) {
    const keys = days.flatMap((day) => day.lessons.map((_, index) => sectionKey(day, index)));
    const complete = new Set(days.flatMap((day) => day.lessons
      .map((_, index) => studySectionComplete(day, index) ? sectionKey(day, index) : null)
      .filter(Boolean)));
    const done = keys.filter((key) => complete.has(key)).length;
    return { done, total: keys.length, pct: keys.length ? Math.round(done / keys.length * 100) : 0 };
  }
  function cleanStudyText(value) {
    return String(value || "")
      .replace(/질문이 묻는 것은\s*/g, "")
      .replace(/정답 공식입니다/g, "대표적인 선택입니다")
      .replace(/정답입니다/g, "적합합니다")
      .replace(/([A-D])\s*\((?:O|X)\)\s*:\s*/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  function studyLead(value) {
    const text = cleanStudyText(value);
    const match = text.match(/^.*?[.!?](?:\s|$)/);
    return match ? match[0].trim() : text;
  }
  function studyVisual(day) {
    const visual = day.visual;
    if (!visual) return `<p class="study-primer-definition">${esc(day.summary)}</p>`;
    const comparison = visual.incoming === "비교";
    return `<div class="study-story">
      <p class="study-story-situation"><span>이런 상황을 떠올려 보세요</span><strong>${esc(visual.situation)}</strong></p>
      <figure class="study-scene ${comparison ? "comparison" : ""}">
        <figcaption>이해를 돕는 예시 그림 · ${comparison ? "역할별 비교" : "요청과 데이터의 흐름"}</figcaption>
        <div class="study-scene-flow">${visual.nodes.map((node, index) => `${index ? `<div class="study-scene-link"><span>${esc(index === 1 ? visual.incoming : visual.outgoing)}</span><svg viewBox="0 0 60 24" aria-hidden="true"><path d="M3 12h50m-9-8 9 8-9 8"/></svg></div>` : ""}
          <div class="study-scene-node ${index === 1 ? "central" : ""}"><span class="study-scene-icon" aria-hidden="true">${node.icon}</span><b>${esc(node.label)}</b><p>${esc(node.detail)}</p></div>`).join("")}</div>
        ${day.title === "Amazon S3" ? `<div class="study-object"><span aria-hidden="true">🖼️</span><div><b>버킷 안의 객체 한 개</b><code>products/shoes.jpg</code><small>키 = 파일을 찾는 이름표 · 데이터 = 사진 내용 · 메타데이터 = 파일에 대한 설명</small></div></div>` : ""}
        <p class="study-scene-explanation">${esc(visual.explanation)}</p>
      </figure>
      <div class="study-use-case"><span aria-hidden="true">💡</span><div><b>이럴 때 사용해요</b><p>${esc(visual.use)}</p></div></div>
    </div>`;
  }

  function studyIntroduction(day) {
    if (!day.intro) return studyVisual(day);
    const intro = day.intro;
    const sources = `<div class="study-intro-sources">${intro.sources.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`).join("")}</div>`;
    return `<div class="study-intro-lead"><h4>어떤 서비스인가요?</h4><p>${esc(intro.description)}</p></div>
      ${studyVisual(day)}
      <div class="study-intro-reading"><h4>어떻게 동작하나요?</h4><p>${esc(intro.mechanics)}</p>
        <div class="study-intro-caution"><h4>선택 전에 확인하세요</h4><p>${esc(intro.caution)}</p></div>
        <small>공식 문서를 바탕으로 풀어 쓴 설명 · 위 상황과 그림은 학습용 예시입니다.</small>${sources}
      </div>`;
  }

  function questionText(q) {
    return [
      ...(q.tags || []), txt(q.question), txt(q.explanation),
      ...(q.options || []).map((option) => txt(option)),
    ].join(" ").toLowerCase();
  }
  function questionScore(q, day) {
    const tags = (q.tags || []).join(" ").toLowerCase();
    const body = questionText(q);
    return day.keywords.reduce((score, keyword) => {
      const value = keyword.toLowerCase();
      return score + (tags.includes(value) ? 8 : 0) + (body.includes(value) ? 2 : 0);
    }, 0);
  }
  const QUESTIONS_BY_DAY = (() => {
    return new Map(STUDY_DAYS.map((day) => [day.number, ALL
      .map((question) => ({ question, score: questionScore(question, day) }))
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score || a.question.number - b.question.number)
      .map((row) => row.question)]));
  })();
  function practiceFor(day, lessonIndex) {
    const related = QUESTIONS_BY_DAY.get(day.number) || [];
    const picked = related.filter((_, index) => index % day.lessons.length === lessonIndex).slice(0, 2);
    return picked.length ? picked : related.slice(lessonIndex, lessonIndex + 1);
  }
  const practiceCount = (day) => day.lessons.reduce((total, _, index) => total + practiceFor(day, index).length, 0);

  /* 문제 → 관련 워크북 Day/컨셉 매칭 (리포트에서 바로 이동용) */
  const PARTICLE = /(으로|에서|에게|까지|부터|하고|하면|합니다|입니다|이며|이고|은|는|이|가|을|를|과|와|의|에|로|도|만)$/;
  const studyTerms = (text) => (String(text || "").toLowerCase().match(/[a-z][a-z0-9-]{2,}|[가-힣]{2,}/g) || [])
    .map((w) => /[가-힣]/.test(w) ? w.replace(PARTICLE, "") : w)
    .filter((w) => w.length >= 2);
  const LESSON_TERMS = new Map(STUDY_DAYS.map((day) => {
    const perLesson = day.lessons.map((l) => {
      const m = new Map();
      const add = (text, w) => studyTerms(text).forEach((t) => m.set(t, Math.max(m.get(t) || 0, w)));
      add(l.body + " " + l.decision, 1);
      add(l.title + " " + l.points.join(" "), 3);
      return m;
    });
    const df = new Map();
    perLesson.forEach((m) => m.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1)));
    return [day.number, perLesson.map((m) => [...m].map(([t, w]) => [t, w * Math.log((perLesson.length + 1) / df.get(t))]).filter(([, w]) => w > 0))];
  }));
  const STUDY_MATCH = new Map();
  function studyMatches(q) {
    if (STUDY_MATCH.has(q.id)) return STUDY_MATCH.get(q.id);
    const scored = STUDY_DAYS.map((day) => ({ day, score: questionScore(q, day) }))
      .filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
    const top = scored[0];
    const picked = top ? scored.filter((x, i) => i === 0 || (i < 2 && x.score >= top.score * 0.6)) : [];
    const answerText = (q.options || []).filter((o) => (q.answer || []).includes(o.k)).map((o) => o.en + " " + o.ko).join(" ");
    const hay = [(q.tags || []).join(" "), q.question.en, q.question.ko, q.explanation && q.explanation.en, q.explanation && q.explanation.ko, answerText]
      .join(" ").toLowerCase();
    const tagHay = (q.tags || []).join(" ").toLowerCase();
    const out = picked.map(({ day }) => {
      // 컨셉 본문/요점 용어가 문제·태그에 얼마나 나오는지로 고르고, 워크북에 복습 문제로 실린 컨셉이면 가산점
      let lesson = 0, best = -1;
      (LESSON_TERMS.get(day.number) || []).forEach((terms, i) => {
        const sc = terms.reduce((sum, [t, w]) => sum + (hay.includes(t) ? w : 0) + (tagHay.includes(t) ? w * 4 : 0), 0)
          + (practiceFor(day, i).some((x) => x.id === q.id) ? 1.5 : 0);
        if (sc > best) { best = sc; lesson = i; }
      });
      lesson = Math.max(0, lesson);
      return { day: day.number, dayTitle: day.title, icon: day.icon, lesson: lesson + 1, lessonTitle: day.lessons[lesson].title };
    });
    STUDY_MATCH.set(q.id, out);
    return out;
  }
  function studyLinksHtml(q, pos, label) {
    const links = studyMatches(q);
    if (!links.length) return "";
    return `<div class="study-links"><b>관련 워크북</b>${links.map((l) =>
      `<a href="#/workbook/day/${l.day}/topic/${l.lesson}" data-study-link data-q="${q.id}" data-pos="${pos}"${label ? ` data-label="${esc(label)}"` : ""}>
        <span class="sl-day">${l.icon || "📘"} Day ${l.day} · ${esc(l.dayTitle)}</span>
        <span class="sl-topic">${String(l.lesson).padStart(2, "0")} ${esc(l.lessonTitle)} →</span></a>`).join("")}</div>`;
  }
  function focusStudyTopic() {
    const bar = $("#studyReturnBar");
    if (bar) bar.remove();
    if (S.studyReturn) {
      const r = S.studyReturn;
      document.body.insertAdjacentHTML("beforeend",
        `<a id="studyReturnBar" class="study-return" href="${esc(r.hash)}" data-study-return>← ${esc(r.label || "리포트 Question #" + r.pos)}(으)로 돌아가기</a>`);
    }
    if (!S.workbookTopic) return;
    if (studyDetailsState === "loading") return; // 상세 설명이 들어오면 레이아웃이 바뀌므로 로드 후 스크롤
    const n = S.workbookTopic;
    S.workbookTopic = 0;
    const el = document.getElementById("study-topic-" + n);
    if (!el) return;
    unfoldStudySection(el);
    syncStickyHeaderHeight();
    el.scrollIntoView({ block: "start" });
    // 글꼴·이미지로 레이아웃이 늦게 바뀌는 경우를 한 번 더 보정
    setTimeout(() => el.scrollIntoView({ block: "start" }), 250);
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }
  function focusReportQuestion() {
    const id = S.reportFocus;
    S.reportFocus = null;
    let el = document.getElementById("rq-" + id);
    if (!el) { S.reportFilter = "all"; S.reportTag = ""; renderReport(); el = document.getElementById("rq-" + id); }
    if (!el) return;
    el.scrollIntoView({ block: "start" });
    setTimeout(() => el.scrollIntoView({ block: "start" }), 250);
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }
  document.addEventListener("click", (ev) => {
    const sl = ev.target.closest("a[data-study-link][data-label]");
    if (sl) { S.studyReturn = { hash: location.hash, qid: sl.dataset.q, pos: sl.dataset.pos, label: sl.dataset.label }; return; }
    const back = ev.target.closest("[data-study-return]");
    if (back && S.studyReturn) { S.reportFocus = S.studyReturn.qid; }
  });
  function practiceCard(q, day, lessonIndex) {
    if (isAdmin()) {
      const ans = (q.answer || []);
      return `<article class="study-practice readonly">
      <header><span>CHECK Q${q.number}</span><b>${esc((q.tags || []).slice(0, 2).join(" · ") || "설계 문제")}</b></header>
      <p class="study-practice-question">${esc(cleanStudyText(txt(q.question)))}</p>
      <ol>${(q.options || []).map((o) => `<li><button type="button" class="${ans.includes(o.k) ? "correct" : ""}" disabled><b>${esc(o.k)}</b><span>${esc(cleanStudyText(txt(o)))}</span></button></li>`).join("")}</ol>
      <div class="study-practice-answer"><b>정답 ${esc(ans.slice().sort().join(", "))}</b><p>${md(cleanStudyText(txt(q.explanation)))}</p></div>
    </article>`;
    }
    const key = studyAnswerKey(day, lessonIndex, q.id);
    const saved = studyAnswers[key] || null;
    const selected = saved ? saved.choice : (studySelections[key] || []);
    const answerKeys = (q.answer || []).slice().sort();
    const answer = answerKeys.join(", ");
    const correct = saved && answerKeys.join(",") === (saved.choice || []).slice().sort().join(",");
    return `<article class="study-practice ${saved ? (correct ? "correct" : "wrong") : ""}">
      <header><span>CHECK Q${q.number}</span><b>${saved ? (correct ? "정답" : "오답 · 해설 확인") : esc((q.tags || []).slice(0, 2).join(" · ") || "설계 문제")}</b></header>
      <p class="study-practice-question">${esc(cleanStudyText(txt(q.question)))}</p>
      <ol>${(q.options || []).map((option) => {
        const picked = selected.includes(option.k);
        const isAnswer = (q.answer || []).includes(option.k);
        const state = saved ? (isAnswer ? "correct" : picked ? "wrong" : "") : picked ? "selected" : "";
        return `<li><button type="button" class="${state}" data-study-pick data-study-question="${esc(q.id)}" data-study-lesson="${lessonIndex}" data-study-choice="${esc(option.k)}" ${saved ? "disabled" : ""}><b>${esc(option.k)}</b><span>${esc(cleanStudyText(txt(option)))}</span></button></li>`;
      }).join("")}</ol>
      ${saved
        ? `<div class="study-practice-answer"><b>정답 ${esc(answer)}</b><p>${md(cleanStudyText(txt(q.explanation)))}</p></div>`
        : `<div class="study-practice-actions"><small>${(q.answer || []).length > 1 ? `${(q.answer || []).length}개 선택` : "답을 선택한 뒤 제출하세요."}</small><button type="button" class="primary" data-study-submit data-study-question="${esc(q.id)}" data-study-lesson="${lessonIndex}" ${selected.length === (q.answer || []).length ? "" : "disabled"}>답안 제출</button></div>`}
    </article>`;
  }

  function renderWorkbook() {
    const allProgress = studyProgress(STUDY_DAYS);
    const completeDays = STUDY_DAYS.filter((day) => studyProgress([day]).done === day.lessons.length).length;
    $("#stats").innerHTML = [
      `<span class="chip">워크북 <b>${STUDY_DAYS.length}</b>일</span>`,
      `<span class="chip">개념 완료 <b>${allProgress.done}</b> / ${allProgress.total}</span>`,
      `<span class="chip good">완료한 Day <b>${completeDays}</b></span>`,
    ].join("");
    $("#workbookTotal").innerHTML = `<b>${allProgress.pct}%</b><span>${allProgress.done} / ${allProgress.total} Core Concept 완료</span>
      <div class="bar big"><span style="width:${allProgress.pct}%"></span></div>`;
    $("#workbookDays").innerHTML = STUDY_WEEKS.map((week) => {
      const weekProgress = studyProgress(week.days);
      const weekTitle = ["핵심 인프라", "데이터와 보안", "서버리스와 통합", "운영·마이그레이션·종합"][week.number - 1];
      return `<section class="workbook-week">
        <header class="workbook-week-head">
          <div><span>${week.number}주차</span><h3>${weekTitle}</h3></div>
          <b>${weekProgress.done} / ${weekProgress.total}</b>
        </header>
        <div class="workbook-timeline">${week.days.map((day) => {
          const progress = studyProgress([day]);
          const relatedCount = practiceCount(day);
          return `<a class="workbook-day-card ${progress.done === progress.total ? "complete" : ""}" href="#/workbook/day/${day.number}">
            <span class="workbook-day-marker">${progress.done === progress.total ? "✓" : day.number}</span>
            <div class="workbook-day-main">
              <div class="workbook-day-card-head"><span>DAY ${String(day.number).padStart(2, "0")} · ${esc(day.domain)}</span><b>◷ ${day.lessons.length * 18}분</b></div>
              <h3>${day.icon} ${esc(day.title)}</h3>
              <p class="workbook-day-subtitle">${esc(day.summary)}</p>
              <div class="workbook-day-categories">${day.lessons.map((item) => `<span>${esc(item.title)}</span>`).join("")}<span>복습 문제 ${relatedCount}</span></div>
            </div>
            <div class="workbook-day-status"><b>${progress.pct}%</b><span>${progress.done} / ${progress.total} 개념</span><span class="workbook-day-read">✓ 읽음 ${studyReadCount(day).done} / ${studyReadCount(day).total}</span><i>→</i></div>
          </a>`;
        }).join("")}</div>
      </section>`;
    }).join("");
  }

  /* 워크북 상세 설명(data/study-details.js, 약 550KB)은 워크북 Day를 처음 열 때만 불러온다 */
  const STUDY_DETAILS_SRC = "data/study-details.js?v=20260929-2";
  let studyDetailsState = window.SAA_STUDY_DETAILS ? "ready" : "idle";
  function ensureStudyDetails() {
    if (window.SAA_STUDY_DETAILS) { studyDetailsState = "ready"; return true; }
    if (studyDetailsState !== "idle") return false;
    studyDetailsState = "loading";
    const tag = document.createElement("script");
    tag.src = STUDY_DETAILS_SRC;
    tag.onload = () => {
      studyDetailsState = window.SAA_STUDY_DETAILS ? "ready" : "failed";
      if (S.view === "workbookDay") { renderWorkbookDay(); requestAnimationFrame(focusStudyTopic); }
    };
    tag.onerror = () => { studyDetailsState = "failed"; if (S.view === "workbookDay") { renderWorkbookDay(); requestAnimationFrame(focusStudyTopic); } };
    document.head.appendChild(tag);
    return false;
  }
  const studyDetail = (day) => (window.SAA_STUDY_DETAILS || {})[day.number] || null;
  /* 상세 설명 블록: text | flow | compare | cards | nest | steps | callout */
  const CALLOUT_LABEL = { key: ["💡", "핵심"], tip: ["✅", "요령"], warn: ["⚠️", "주의"] };
  const FLOW_ARROW = `<svg viewBox="0 0 60 24" aria-hidden="true"><path d="M3 12h50m-9-8 9 8-9 8"/></svg>`;
  function nestHtml(node, depth) {
    return `<div class="sb-nest-node d${depth}">
      <b>${md(node.label || "")}</b>
      ${(node.items || []).length ? `<div class="sb-nest-items">${node.items.map((x) => `<span>${md(x)}</span>`).join("")}</div>` : ""}
      ${(node.children || []).length ? `<div class="sb-nest-children">${node.children.map((c) => nestHtml(c, depth + 1)).join("")}</div>` : ""}
    </div>`;
  }
  function studyBlockHtml(b) {
    if (!b || typeof b !== "object") return typeof b === "string" ? `<div class="sb-text"><p>${md(b)}</p></div>` : "";
    const cap = (kind) => b.caption ? `<figcaption><span>${kind}</span>${md(b.caption)}</figcaption>` : "";
    switch (b.type) {
      case "text":
        return `<div class="sb-text">${b.h ? `<h4>${md(b.h)}</h4>` : ""}<p>${md(b.text)}</p></div>`;
      case "callout": {
        const [icon, label] = CALLOUT_LABEL[b.tone] || CALLOUT_LABEL.key;
        return `<aside class="sb-callout ${esc(b.tone || "key")}"><span class="sb-callout-icon" aria-hidden="true">${icon}</span><div><b>${label}${b.title ? ` · ${md(b.title)}` : ""}</b><p>${md(b.text)}</p></div></aside>`;
      }
      case "flow":
        return `<figure class="sb-fig sb-flow">${cap("흐름")}<div class="sb-flow-row">${(b.steps || []).map((st, i) => `${i ? `<div class="sb-flow-arrow">${b.arrows && b.arrows[i - 1] ? `<span>${md(b.arrows[i - 1])}</span>` : ""}${FLOW_ARROW}</div>` : ""}
          <div class="sb-flow-step"><span class="sb-icon" aria-hidden="true">${esc(st.icon || "")}</span><b>${md(st.label)}</b>${st.detail ? `<small>${md(st.detail)}</small>` : ""}</div>`).join("")}</div></figure>`;
      case "compare":
        return `<figure class="sb-fig sb-compare">${cap("비교")}<div class="sb-table-wrap"><table>
          <thead><tr>${(b.columns || []).map((c) => `<th>${md(c)}</th>`).join("")}</tr></thead>
          <tbody>${(b.rows || []).map((r) => `<tr>${r.map((c, i) => i ? `<td>${md(c)}</td>` : `<th scope="row">${md(c)}</th>`).join("")}</tr>`).join("")}</tbody>
        </table></div></figure>`;
      case "cards":
        return `<figure class="sb-fig sb-cards">${cap("한눈에")}<div class="sb-card-grid">${(b.items || []).map((it) => `<div class="sb-card"><span class="sb-icon" aria-hidden="true">${esc(it.icon || "")}</span><b>${md(it.title)}</b><p>${md(it.text)}</p></div>`).join("")}</div></figure>`;
      case "nest":
        return `<figure class="sb-fig sb-nest">${cap("구조")}${b.root ? nestHtml(b.root, 1) : ""}</figure>`;
      case "steps":
        return `<figure class="sb-fig sb-steps">${cap("순서")}<ol>${(b.items || []).map((it, i) => `<li><span class="sb-step-no">${i + 1}</span><div><b>${md(it.label)}</b>${it.detail ? `<p>${md(it.detail)}</p>` : ""}</div></li>`).join("")}</ol></figure>`;
      default:
        return "";
    }
  }
  const studyBlocks = (list) => (list || []).map(studyBlockHtml).join("");
  const FOLD_CHEVRON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
  const foldClass = (key) => `${isStudyFolded(key) ? "folded" : ""} ${studyRead[key] ? "read" : ""}`;
  const readLabel = (key) => studyRead[key] ? "✓ 봤어요" : "봤어요 체크";
  function foldHeadActions(key, extra) {
    const folded = isStudyFolded(key);
    return `<div class="study-head-actions">${extra || ""}
      <button type="button" class="study-read-btn ${studyRead[key] ? "on" : ""}" data-study-read="${key}" aria-pressed="${!!studyRead[key]}" title="다 본 섹션으로 표시하고 접기">${readLabel(key)}</button>
      <button type="button" class="study-fold-btn" data-study-fold="${key}" aria-expanded="${!folded}" aria-label="${folded ? "펼치기" : "접기"}">${FOLD_CHEVRON}</button>
    </div>`;
  }
  function foldFootHtml(key) {
    return `<div class="study-fold-foot"><button type="button" class="study-read-btn big" data-study-read-done="${key}">${studyRead[key] ? "접기 ↑" : "✓ 다 봤어요 · 접기"}</button></div>`;
  }
  function studyOverviewHtml(day) {
    const d = studyDetail(day);
    if (!d || !d.overview) {
      return studyDetailsState === "loading" ? `<section class="study-overview loading"><p class="muted">자세한 설명을 불러오는 중…</p></section>` : "";
    }
    const textLen = JSON.stringify(d.overview).length;
    const key = overviewKey(day);
    return `<section class="study-overview study-fold ${foldClass(key)}" id="study-overview" data-fold-key="${key}">
      <header data-study-fold-head><span class="eyebrow">OVERVIEW</span>${studyHook(day).overview
        ? `<div class="study-hook-title"><h3>${esc(studyHook(day).overview)}</h3><p class="study-subtitle">${esc(day.title)} 전체 설명 · 약 ${Math.max(3, Math.round(textLen / 700))}분</p></div>`
        : `<h3>${esc(day.title)} 전체 설명</h3><small>약 ${Math.max(3, Math.round(textLen / 700))}분</small>`}${foldHeadActions(key)}</header>
      <div class="study-fold-body"><div class="study-blocks">${studyBlocks(d.overview)}</div>${foldFootHtml(key)}</div>
    </section>`;
  }
  function lessonDetailHtml(day, lessonIndex) {
    const d = studyDetail(day);
    const l = d && d.lessons && d.lessons[lessonIndex];
    if (!l) return "";
    return `<div class="study-topic-detail study-blocks">${studyBlocks(l.blocks || l.paragraphs)}</div>`;
  }
  function lessonExtrasHtml(day, lessonIndex) {
    const d = studyDetail(day);
    const l = d && d.lessons && d.lessons[lessonIndex];
    if (!l) return "";
    const tips = (l.examTips || []).length ? `<div class="study-exam-tips"><b>시험 포인트</b><ul>${l.examTips.map((t) => `<li>${md(t)}</li>`).join("")}</ul></div>` : "";
    const docs = (l.docs || []).length ? `<div class="study-docs"><b>공식 문서</b>${l.docs.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`).join("")}</div>` : "";
    return tips + docs;
  }

  const tocLink = (id, key, mark, label) =>
    `<a href="#${id}" class="${studyRead[key] ? "read" : ""}" data-study-target="${id}" data-fold-key="${key}" data-mark="${mark}"><span>${studyRead[key] ? "✓" : mark}</span>${label}</a>`;
  /* 다시 렌더하지 않고 접힘/읽음 표시만 갱신 */
  function applyStudyFold(key) {
    const sec = document.querySelector(`.study-fold[data-fold-key="${key}"]`);
    const read = !!studyRead[key], folded = isStudyFolded(key);
    if (sec) {
      sec.classList.toggle("folded", folded);
      sec.classList.toggle("read", read);
      sec.querySelectorAll(`[data-study-read="${key}"]`).forEach((b) => { b.classList.toggle("on", read); b.setAttribute("aria-pressed", String(read)); b.textContent = readLabel(key); });
      sec.querySelectorAll(`[data-study-fold="${key}"]`).forEach((b) => { b.setAttribute("aria-expanded", String(!folded)); b.setAttribute("aria-label", folded ? "펼치기" : "접기"); });
      sec.querySelectorAll(`[data-study-read-done="${key}"]`).forEach((b) => { b.textContent = read ? "접기 ↑" : "✓ 다 봤어요 · 접기"; });
    }
    document.querySelectorAll(`.study-toc a[data-fold-key="${key}"]`).forEach((a) => {
      a.classList.toggle("read", read);
      a.firstElementChild.textContent = read ? "✓" : a.dataset.mark;
    });
    const day = STUDY_DAYS[S.workbookDay - 1];
    const chip = $("#studyReadChip");
    if (chip && day) { const c = studyReadCount(day); chip.innerHTML = `읽음 <b>${c.done}</b> / ${c.total}`; }
    return sec;
  }
  function unfoldStudySection(el) {
    if (el && el.dataset.foldKey && isStudyFolded(el.dataset.foldKey)) { studyFold[el.dataset.foldKey] = false; applyStudyFold(el.dataset.foldKey); }
  }
  function keepSectionInView(sec) {
    if (!sec) return;
    syncStickyHeaderHeight();
    const top = sec.getBoundingClientRect().top;
    if (top < $(".top").getBoundingClientRect().bottom) sec.scrollIntoView({ block: "start" });
  }

  function renderWorkbookDay() {
    const day = STUDY_DAYS[S.workbookDay - 1];
    if (!day) { location.hash = "#/workbook"; return; }
    ensureStudyDetails();
    const progress = studyProgress([day]);
    const relatedCount = practiceCount(day);
    $("#workbookDayTitle").textContent = `Day ${day.number} · ${day.title}`;
    $("#workbookDayRange").textContent = `약 ${day.lessons.length * 18}분`;
    $("#stats").innerHTML = [
      `<span class="chip">Day ${day.number} · ${esc(day.domain)}</span>`,
      `<span class="chip good">개념 완료 <b>${progress.done}</b> / ${progress.total}</span>`,
      `<span class="chip">복습 문제 <b>${relatedCount}</b></span>`,
      `<span class="chip">진도 <b>${progress.pct}%</b></span>`,
      `<span class="chip good" id="studyReadChip">읽음 <b>${studyReadCount(day).done}</b> / ${studyReadCount(day).total}</span>`,
    ].join("");
    $("#workbookDaySummary").innerHTML = `<div class="study-day-brief"><span>${day.lessons.length}개 컨셉 · 설명을 읽고 바로 문제로 확인해요</span><b>학습 완료 ${progress.done} / ${progress.total}</b>
      <div class="study-fold-all"><button type="button" data-study-fold-all="open">모두 펼치기</button><button type="button" data-study-fold-all="close">모두 접기</button><button type="button" data-study-fold-all="unread">안 읽은 것만</button></div></div>`;

    $("#workbookLessons").innerHTML = `<div class="study-layout">
      <article class="study-article">
        <section class="study-primer study-fold ${foldClass(primerKey(day))}" id="study-primer" data-fold-key="${primerKey(day)}">
          <header class="study-primer-head" data-study-fold-head>
            <div>
              <span class="eyebrow">서비스부터 이해하기</span>
              ${studyHook(day).primer
                ? `<h3>${esc(studyHook(day).primer)}</h3><p class="study-subtitle">${day.icon} ${esc(day.title)} 한눈에 이해하기</p>`
                : `<h3>${day.icon} ${esc(day.title)} 한눈에 이해하기</h3>`}
            </div>
            ${foldHeadActions(primerKey(day), `<a class="study-primer-source" href="${esc(day.source)}" target="_blank" rel="noopener">AWS 공식 문서 ↗</a>`)}
          </header>
          <div class="study-fold-body">
          ${studyIntroduction(day)}
          <div class="study-primer-purpose"><b>오늘 배울 내용</b><span>${esc(day.summary)}</span></div>
          <details class="study-preview"><summary>세부 학습 주제 ${day.lessons.length}개 보기</summary>
            <div class="study-primer-grid">${day.lessons.map((item, index) => `<div><small>${String(index + 1).padStart(2, "0")}</small><b>${esc(item.title)}</b><p>${esc(studyLead(item.body))}</p></div>`).join("")}</div>
          </details>
          <div class="study-primer-guide">
            <b>공부 순서</b><span>서비스 역할 이해</span><i>→</i><span>선택 기준 비교</span><i>→</i><span>관련 문제로 확인</span>
          </div>
          ${foldFootHtml(primerKey(day))}
          </div>
        </section>
        ${studyOverviewHtml(day)}
        ${day.lessons.map((item, lessonIndex) => {
          const practice = practiceFor(day, lessonIndex);
          const solvedPractice = practice.filter((question) => !!studyAnswers[studyAnswerKey(day, lessonIndex, question.id)]).length;
          const complete = practice.length > 0 && solvedPractice === practice.length;
          const foldKey = sectionKey(day, lessonIndex);
          return `<section class="study-topic study-fold ${complete ? "complete" : ""} ${foldClass(foldKey)}" id="study-topic-${lessonIndex + 1}" data-fold-key="${foldKey}">
            <header class="study-topic-head" data-study-fold-head>
              <span>${String(lessonIndex + 1).padStart(2, "0")}</span>
              <div><small>CORE CONCEPT</small>${(studyHook(day).lessons || [])[lessonIndex]
                ? `<h3>${esc(studyHook(day).lessons[lessonIndex])}</h3><p class="study-subtitle">${esc(item.title)}</p>`
                : `<h3>${esc(item.title)}</h3>`}</div>
              ${foldHeadActions(foldKey, `<div class="study-auto-status ${complete ? "complete" : ""}"><b>${complete ? "✓ 학습 완료" : "복습 문제 풀이"}</b><span>${solvedPractice} / ${practice.length}</span></div>`)}
            </header>
            <div class="study-fold-body">
            <p class="study-topic-body">${esc(item.body)}</p>
            ${lessonDetailHtml(day, lessonIndex)}
            <div class="study-topic-points">${item.points.map((point) => `<span>${esc(point)}</span>`).join("")}</div>
            <div class="study-design-note"><b>이 조건에서 선택하는 이유</b><p>${esc(item.decision)}</p></div>
            ${lessonExtrasHtml(day, lessonIndex)}
            ${practice.length ? `<div class="study-practice-list"><div class="study-practice-label"><span>RELATED QUESTIONS</span><b>이 개념과 연결되는 기출 · ${solvedPractice}/${practice.length} 완료</b></div>${practice.map((question) => practiceCard(question, day, lessonIndex)).join("")}</div>` : ""}
            ${foldFootHtml(foldKey)}
            </div>
          </section>`;
        }).join("")}
        <aside class="study-source"><span>공식 문서로 더 보기</span><a href="${esc(day.source)}" target="_blank" rel="noopener">AWS Documentation ↗</a></aside>
      </article>
      <aside class="study-toc">
        <details class="study-toc-disclosure" ${matchMedia("(max-width:650px)").matches ? "" : "open"}>
        <summary>학습 목차 <span>${day.lessons.length}개 컨셉</span></summary>
        <nav aria-label="Core Concept 이동">${tocLink("study-primer", primerKey(day), "◎", "한눈에 이해하기")}${studyDetail(day) ? tocLink("study-overview", overviewKey(day), "★", "전체 설명") : ""}${day.lessons.map((item, index) => tocLink(`study-topic-${index + 1}`, sectionKey(day, index), String(index + 1), esc(item.title))).join("")}</nav>
        </details>
        <div class="study-toc-related"><span>복습 문제</span><b>${relatedCount}개</b><small>각 이론 단락 사이에서 대표 문제를 확인합니다.</small></div>
        <div class="study-toc-progress"><span>오늘의 진도</span><b>${progress.pct}%</b><div class="bar"><span style="width:${progress.pct}%"></span></div></div>
      </aside>
    </div>`;

    $("#workbookDayNav").innerHTML = `
      ${day.number > 1 ? `<a class="btn" href="#/workbook/day/${day.number - 1}">← Day ${day.number - 1}</a>` : `<span></span>`}
      <a class="btn" href="#/workbook">전체 일정</a>
      ${day.number < STUDY_DAYS.length ? `<a class="btn primary" href="#/workbook/day/${day.number + 1}">Day ${day.number + 1} →</a>` : `<span></span>`}`;
  }

  /* ---------------- 세트 목록 ---------------- */
  function renderHome() {
    const practiceMode = S.homeMode !== "exams";
    $("#practiceModeTab").classList.toggle("on", practiceMode);
    $("#examModeTab").classList.toggle("on", !practiceMode);
    $("#practicePanel").hidden = !practiceMode;
    $("#examPanel").hidden = practiceMode;
    $("#practiceHomeTitle").textContent = practiceMode ? "유형별 연습" : "실전 시험 세트";
    $("#practiceHomeCopy").textContent = practiceMode
      ? "AWS 영역을 골라 정답과 해설을 바로 확인하며 연습합니다."
      : "타이머를 켜고 전 문항을 한 번에 푼 뒤 제출합니다.";
    $("#examRange").textContent = EXAMS.length ? `${EXAMS.length}세트 · ${EXAMS.length * 65}문항` : "시험 세트";
    $("#categories").innerHTML = TAG_GROUPS.map((g) => {
      return `<a class="category-card" href="#/category/${g.id}">
        <span class="category-icon" aria-hidden="true">${g.icon}</span>
        <span class="category-body"><h4>${esc(g.name)}</h4></span>
      </a>`;
    }).join("");

    $("#exams").innerHTML = EXAMS.map((e) => {
      const attempt = latestAttempt(e.id);
      const paused = pausedExam(e.id);
      const minutes = Math.round(examDurationSeconds(e.questions.length) / 60);
      const pct = attempt ? Math.round((attempt.correct / attempt.total) * 100) : 0;
      return `<a class="exam-card" href="#/${e.id}">
        <div class="ec-head"><h3>${esc(e.title)}</h3>${paused ? `<span class="badge paused">⏸ 이어서 풀기 ${pausedAnsweredCount(e, paused)}/${e.questions.length}</span>` : e.note ? `<span class="badge">${esc(e.note)}</span>` : ""}</div>
        <p class="ec-count">${e.questions.length}문제 · ${minutes}분</p>
        ${domainMixHtml(e, attempt)}
        <p class="exam-answer-types">단일 선택 ${e.questions.length - multiCount(e)} · 복수 선택 ${multiCount(e)}</p>
        <div class="bar"><span style="width:${pct}%"></span></div>
        <p class="ec-meta">
          ${attempt ? `<span>최근 점수 ${attempt.correct} / ${attempt.total}</span><span class="dot">·</span><span>정답률 ${pct}%</span>` : `<span>완료한 시험 없음</span>`}
        </p>
      </a>`;
    }).join("") || `<p class="empty">아직 문제 세트가 없어요. <code>data/exam1.js</code> 에 문제를 추가해 주세요.</p>`;

    const t = tally(ALL);
    const completedExams = EXAMS.filter((e) => latestAttempt(e.id)).length;
    $("#stats").innerHTML = practiceMode ? [
        `<span class="chip">유형 <b>${TAG_GROUPS.length}</b></span>`,
        `<span class="chip">전체 문제 <b>${t.total}</b></span>`,
        `<span class="chip">연습한 문제 <b>${t.solved}</b></span>`,
        t.solved ? `<span class="chip good">정답률 <b>${t.rate}%</b></span>` : "",
        t.bad ? `<span class="chip bad">오답 <b>${t.bad}</b></span>` : "",
      ].join("")
      : [
        `<span class="chip">시험 세트 <b>${EXAMS.length}</b></span>`,
        `<span class="chip">완료한 시험 <b>${completedExams}</b></span>`,
        `<span class="chip">공식 시험 <b>65문항 · 130분</b></span>`,
        `<span class="chip">실전 배치 <b>${EXAMS.length * 65}</b> / ${t.total}</span>`,
      ].join("");

  }

  /* ---------------- 응시 기록 ---------------- */
  function examHistoryHtml(e) {
    const h = examHistory(e.id);
    if (!h.length) return "";
    const rows = h.map((a, i) => {
      const pct = a.total ? Math.round((a.correct / a.total) * 100) : 0;
      const prev = h[i - 1];
      const diff = prev ? a.correct - prev.correct : null;
      return `<a class="eh-row" href="#/${e.id}/report/${i + 1}">
        <span class="eh-no">${i + 1}회차${i === h.length - 1 && h.length > 1 ? ' <em>최근</em>' : ""}</span>
        <span class="eh-date">${new Date(a.finishedAt).toLocaleString("ko-KR", { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>
        <span class="eh-score"><b>${a.correct}</b> / ${a.total} · ${pct}%${diff === null ? "" : ` <i class="${diff > 0 ? "up" : diff < 0 ? "down" : ""}">${diff > 0 ? "▲" + diff : diff < 0 ? "▼" + -diff : "±0"}</i>`}</span>
        <span class="eh-bar"><span style="width:${pct}%"></span></span>
      </a>`;
    }).reverse().join("");
    return `<section class="exam-history">
      <h4>응시 기록 <span>${h.length}회</span></h4>
      <div class="eh-list">${rows}</div>
      <p class="eh-note">다시 응시해도 이전 기록은 그대로 남아요. 관리자 화면(같이 오답 리뷰)에는 <b>1회차 결과만</b> 보이고, 2회차부터는 나만 볼 수 있어요.</p>
    </section>`;
  }

  /* ---------------- 세트 상세 ---------------- */
  async function renderDetail() {
    const e = examOf(S.scope.id);
    if (!e) { location.hash = "#/exams"; return; }
    $("#dTitle").textContent = e.title;
    $("#dNote").textContent = e.note || "";
    $("#dNote").hidden = !e.note;

    const attempt = latestAttempt(e.id);
    const total = e.questions.length;
    const minutes = Math.round(examDurationSeconds(total) / 60);
    const pct = attempt ? Math.round((attempt.correct / attempt.total) * 100) : 0;
    $("#dSolved").textContent = attempt ? attempt.correct : 0;
    $("#dTotal").textContent = "/ " + total + " 정답";
    $("#dBar").style.width = pct + "%";
    $("#dMeta").innerHTML = attempt
      ? `<span>최근 완료 ${new Date(attempt.finishedAt).toLocaleString("ko-KR")}</span><span class="dot">·</span><span>소요 ${formatClock(attempt.elapsedSeconds)}</span><span class="dot">·</span><span>정답 ${attempt.correct}</span><span class="dot">·</span><span class="warn-t">오답 ${attempt.total - attempt.correct}</span><span class="dot">·</span><span>정답률 ${pct}%</span>`
      : `<span>아직 완료한 시험이 없어요. 풀다가 나가면 진행 상황이 이 기기에 저장되어 이어서 풀 수 있어요.</span>`;

    const paused = pausedExam(e.id);
    let pausedHtml = "";
    if (paused) {
      const left = paused.limitSeconds - paused.elapsedSeconds;
      const done = pausedAnsweredCount(e, paused);
      pausedHtml = `<div class="exam-paused">
        <div class="exam-paused-copy"><b>⏸ 일시정지한 시험이 있어요</b>
          <span>답변 ${done} / ${total} · ${left >= 0 ? "남은 시간 " + formatClock(left) : "시간 초과 +" + formatClock(-left)} · ${new Date(paused.pausedAt).toLocaleString("ko-KR")} 저장</span></div>
        <div class="bar"><span style="width:${Math.round(done / total * 100)}%"></span></div>
        <button class="btn primary" type="button" data-resume-exam="${e.id}">이어서 풀기 · ${(paused.idx || 0) + 1}번부터</button>
      </div>`;
    }
    $("#dActions").innerHTML = `${pausedHtml}${attempt ? `<a class="btn primary" href="#/${e.id}/report">결과 리포트 · 틀린 문제 보기</a>` : ""}
      <button class="btn ${attempt || paused ? "" : "primary"}" type="button" data-start-exam="${e.id}">${paused ? "처음부터 다시" : attempt ? "다시 응시" : "실전 시험 시작"}</button>
      <span class="exam-start-copy">${total}문제 · 제한 시간 ${minutes}분 · 시간 초과 후에도 계속 풀이 가능</span>
      ${domainMixHtml(e, attempt)}
      <p class="exam-detail-format">단일 선택 ${total - multiCount(e)}문항 · 복수 선택 ${multiCount(e)}문항 · 50개 채점 문항과 15개 비채점 문항을 실제 시험에서는 구분할 수 없습니다.</p>
      ${examHistoryHtml(e)}`;

    $("#stats").innerHTML = [
      `<span class="chip">${esc(e.title)} <b>${total}</b>문제</span>`,
      `<span class="chip">제한 시간 <b>${minutes}분</b></span>`,
      attempt ? `<span class="chip good">최근 점수 <b>${attempt.correct} / ${attempt.total}</b></span>` : "",
      attempt ? `<span class="chip">정답률 <b>${pct}%</b></span>` : "",
    ].join("");

    $("#dBoardWrap").hidden = true;
  }

  async function loadBoard() {
    if (!Store.user || Store.mode !== "supabase") { S.board = []; return; }
    try {
      const rows = await Store.board();
      S.boardLegacy = !!(rows && rows.length && rows[0].exam === undefined);
      S.board = (rows || []).filter((r) => !/^__probe_/.test(r.nickname));
    } catch (e) { S.board = []; }
  }

  function renderBoard(e) {
    const wrap = $("#dBoardWrap");
    if (!e || !S.board || !S.board.length) { wrap.hidden = true; return; }
    const total = e.questions.length;
    const rows = S.boardLegacy
      ? S.board.map((r) => ({ nickname: r.nickname, solved: Number(r.solved), correct: Number(r.correct) }))
      : S.board.filter((r) => r.exam === e.id).map((r) => ({ nickname: r.nickname, solved: Number(r.solved), correct: Number(r.correct) }));
    if (!rows.length) { wrap.hidden = true; return; }
    rows.sort((a, b) => b.correct - a.correct || b.solved - a.solved);
    $("#dBoardNote").textContent = S.boardLegacy
      ? "세트별로 나누려면 supabase/schema.sql 을 다시 실행해 주세요"
      : e.title + " 기준";
    $("#dBoardBody").innerHTML = rows.map((r, i) => {
      const rate = r.solved ? Math.round((r.correct / r.solved) * 100) : 0;
      const me = Store.user && r.nickname === Store.user.nickname;
      return `<tr${me ? ' class="me"' : ""}>
        <td class="rank">${i + 1}</td>
        <td>${esc(r.nickname)}${me ? " (나)" : ""}</td>
        <td>${r.solved} / ${total} 풀이</td>
        <td>${r.correct}점</td>
        <td>정답률 ${rate}%</td></tr>`;
    }).join("");
    wrap.hidden = false;
  }

  /* ---------------- 관리자 화면 ---------------- */
  async function renderAdmin() {
    const u = Store.user;
    if (!u || !u.isAdmin) { location.hash = "#/"; return; }
    $("#adminNote").textContent = Store.mode === "supabase" ? "전체 사용자 기록" : "이 브라우저에 저장된 기록";
    $("#stats").innerHTML = "";

    if (!S.adm) {
      $("#admUsers").innerHTML = `<tr><td>불러오는 중…</td></tr>`;
      await loadAdminData();
      if (S.view !== "admin") return;
    }
    $("#admReviewSets").innerHTML = S.adm.error ? "" : reviewSetsHtml();
    syncNamesSeg();
    const rows = S.adm.rows, people = {};
    (S.adm.users || []).forEach((p) => { people[p.nickname] = { nickname: p.nickname, isAdmin: p.is_admin, solved: 0, ok: 0, last: null }; });
    (S.adm.exams || []).forEach((x) => { people[x.nickname] = people[x.nickname] || { nickname: x.nickname, solved: 0, ok: 0, last: null }; });
    rows.forEach((r) => {
      const p = (people[r.nickname] = people[r.nickname] || { nickname: r.nickname, solved: 0, ok: 0, last: null });
      if (r.correct === true || r.correct === false) { p.solved++; if (r.correct) p.ok++; }
      if (r.updated_at && (!p.last || r.updated_at > p.last)) p.last = r.updated_at;
    });
    const list = Object.values(people).sort((a, b) => b.solved - a.solved || a.nickname.localeCompare(b.nickname));
    const totalSolved = rows.filter((r) => r.correct !== null).length;
    const totalOk = rows.filter((r) => r.correct === true).length;

    $("#stats").innerHTML = [
      `<span class="chip">사용자 <b>${list.length}</b></span>`,
      `<span class="chip">총 풀이 <b>${totalSolved}</b></span>`,
      `<span class="chip good">정답 <b>${totalOk}</b></span>`,
      `<span class="chip bad">오답 <b>${totalSolved - totalOk}</b></span>`,
      totalSolved ? `<span class="chip">전체 정답률 <b>${Math.round((totalOk / totalSolved) * 100)}%</b></span>` : "",
    ].join("");

    $("#admUsers").innerHTML = S.adm.error
      ? `<tr><td>불러오지 못했어요: ${esc(S.adm.error)}</td></tr>`
      : (list.length ? list.map((p) => {
          const rate = p.solved ? Math.round((p.ok / p.solved) * 100) : 0;
          const me = Store.user && p.nickname === Store.user.nickname;
          const ex = (S.adm.exams || []).filter((x) => x.nickname === p.nickname).map((x) => {
            const e = examOf(x.exam_id), t = e ? e.title : x.exam_id;
            return x.status === "done" ? `${esc(t)} <b>${x.correct}/${x.total}</b>` : `${esc(t)} 푸는 중 ${Object.values(x.answers || {}).filter((v) => v && v.length).length}/${e ? e.questions.length : "?"}`;
          }).join("<br>");
          return `<tr${S.admPerson === p.nickname ? ' class="me"' : ""}>
            <td><a href="#" class="linky" data-person="${esc(p.nickname)}">${esc(p.nickname)}</a>${p.isAdmin ? ' <span class="badge">관리자</span>' : ""}${me ? " (나)" : ""}</td>
            <td>${p.solved}문제</td>
            <td>정답 ${p.ok}</td>
            <td class="${p.solved - p.ok ? "bad-t" : ""}">오답 ${p.solved - p.ok}</td>
            <td>정답률 ${rate}%</td>
            <td class="muted">${ex || "실전 기록 없음"}</td>
            <td class="muted">${p.last ? new Date(p.last).toLocaleString("ko-KR", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }) : ""}</td>
          </tr>`;
        }).join("") : `<tr><td>아직 기록이 없어요.</td></tr>`);

    // 선택한 사람의 오답 목록
    const pw = $("#admPersonWrap");
    if (S.admPerson) {
      const mine = rows.filter((r) => r.nickname === S.admPerson && r.correct === false)
        .map((r) => ({ q: byId(r.qid), qid: r.qid, sel: r.choice || [], where: "연습", review: null }));
      (S.adm.exams || []).filter((x) => x.nickname === S.admPerson).forEach((x) => {
        const e = examOf(x.exam_id); if (!e) return;
        e.questions.forEach((q, i) => {
          const sel = (x.answers && x.answers[q.id]) || [];
          if (x.status === "paused" && !sel.length) return;
          if (!sameAnswer(q, sel)) mine.push({ q, qid: q.id, sel, where: e.title + (x.status === "paused" ? " (푸는 중)" : ""), pos: i + 1, review: `#/admin/review/${e.id}/${i + 1}` });
        });
      });
      $("#admPersonTitle").textContent = S.admPerson + " 님이 틀린 문제 " + mine.length + "개";
      $("#admPerson").innerHTML = mine.length ? `<div class="wrongrows">` + mine.map((r) => {
        const q = r.q;
        const wb = q && studyMatches(q)[0];
        const label = r.review ? `${r.where} #${r.pos}` : (q ? "원본 #" + q.number : r.qid);
        return `<div class="wrongrow">
          <span class="wr-q">${r.review ? `<a href="${r.review}" class="linky">${esc(label)}</a>` : esc(label)}</span>
          <span class="wr-pick"><b class="bad-t">${r.sel.join(", ") || "-"}</b> 선택</span>
          <span class="wr-ans">정답 <b class="ok-t">${q ? q.answer.join(", ") : "?"}</b></span>
          <span class="wr-tags">${q ? (q.tags || []).slice(0, 3).map((t) => `<span class="badge">${esc(t)}</span>`).join("") : ""}</span>
          ${wb ? `<a class="wr-wb" href="#/workbook/day/${wb.day}/topic/${wb.lesson}" data-study-link data-q="${q.id}" data-pos="${r.pos || q.number}" data-label="관리자">${wb.icon || "📘"} Day ${wb.day} · ${esc(wb.lessonTitle)} →</a>` : ""}
        </div>`;
      }).join("") + `</div>` : `<p class="muted">틀린 문제가 없어요.</p>`;
      pw.hidden = false;
    } else pw.hidden = true;

    // 문제별 집계
    const byQ = {};
    rows.forEach((r) => {
      if (r.correct === null) return;
      const m = (byQ[r.qid] = byQ[r.qid] || { qid: r.qid, tries: 0, ok: 0, picks: {}, wrongBy: [] });
      m.tries++;
      if (r.correct) m.ok++; else m.wrongBy.push(r.nickname);
      const key = (r.choice || []).join(",") || "-";
      m.picks[key] = (m.picks[key] || 0) + 1;
    });
    let qlist = Object.values(byQ).map((m) => Object.assign(m, {
      bad: m.tries - m.ok,
      rate: m.tries ? Math.round((m.ok / m.tries) * 100) : 0,
      q: byId(m.qid),
    }));
    if (S.admScope === "wrong") qlist = qlist.filter((m) => m.bad > 0);
    qlist.sort((a, b) => b.bad - a.bad || a.rate - b.rate || (a.q && b.q ? a.q.number - b.q.number : 0));

    $("#admQuestions").innerHTML = qlist.length ? qlist.map((m) => {
      const q = m.q, assignment = q && MOCK_ASSIGNMENT[q.id], ex = assignment && examOf(assignment.examId);
      const ans = q ? q.answer.slice().sort().join(",") : "";
      const picks = Object.keys(m.picks).sort((a, b) => m.picks[b] - m.picks[a]).map((k) => {
        const right = k.split(",").sort().join(",") === ans;
        return `<span class="pick ${right ? "ok" : "bad"}">${esc(k)} <b>${m.picks[k]}</b></span>`;
      }).join("");
      return `<div class="admq">
        <div class="admq-head">
          <span class="qno">${q ? (ex ? esc(ex.title) + " #" + assignment.position : "원본 #" + q.number) : esc(m.qid)}</span>
          ${q ? (q.tags || []).slice(0, 3).map((t) => `<span class="badge">${esc(t)}</span>`).join("") : ""}
          <span class="spacer"></span>
          <span class="badge ${m.bad ? "bad" : "ok"}">${m.tries}명 중 정답 ${m.ok} (${m.rate}%)</span>
        </div>
        <div class="admq-picks">${picks}<span class="muted">정답 ${ans || "?"}</span></div>
        ${m.wrongBy.length ? `<div class="admq-wrong">${S.rvNames === "hide" ? `틀린 사람 ${m.wrongBy.length}명` : `틀린 사람: ${m.wrongBy.map((n) => esc(n)).join(", ")}`}</div>` : ""}
        ${q ? `<div class="admq-text">${esc(txt(q.question)).split("\n")[0].slice(0, 150)}…</div>` : ""}
        ${q ? studyLinksHtml(q, q.number, "관리자") : ""}
      </div>`;
    }).join("") : `<p class="muted">${S.admScope === "wrong" ? "아직 틀린 문제가 없어요." : "아직 푼 문제가 없어요."}</p>`;
  }

  $("#admUsers").addEventListener("click", (e) => {
    const a = e.target.closest("a[data-person]");
    if (!a) return;
    e.preventDefault();
    S.admPerson = S.admPerson === a.dataset.person ? null : a.dataset.person;
    renderAdmin();
  });
  $("#admScope").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-scope]"); if (!b) return;
    S.admScope = b.dataset.scope;
    [...$("#admScope").children].forEach((x) => x.classList.toggle("on", x === b));
    renderAdmin();
  });

  /* ---------------- 관리자: 같이 오답 리뷰 ----------------
   * #/admin/review/<세트>/<번호> — 한 문제씩 크게 띄워 놓고, 선택지마다 누가 골랐는지 보면서 같이 리뷰한다.
   * 세트 = 실전 모의고사 id (제출 결과 + 원하면 일시정지 중인 답) 또는 "practice" (연습 풀이 기록). */
  async function loadAdminData() {
    if (S.adm) return;
    try {
      const [rows, users, exams] = await Promise.all([
        Store.adminRows(), Store.adminUsers(),
        Store.adminExams().catch((e) => { console.warn("실전 답안 불러오기 실패:", e.message || e); return []; }),
      ]);
      const admins = new Set((users || []).filter((u) => u.is_admin).map((u) => u.nickname));
      if (Store.user) admins.add(Store.user.nickname);
      const keep = (x) => !admins.has(x.nickname);
      S.adm = { rows: (rows || []).filter(keep), users: (users || []).filter(keep), exams: (exams || []).filter(keep) };
    } catch (e) { S.adm = { rows: [], users: [], exams: [], error: e.message || String(e) }; }
  }
  // 세트별 [{nickname, status, answers}] — 한 사람당 하나 (제출 결과가 있으면 그것, 없으면 일시정지 답)
  function reviewTakers(setId) {
    const by = {};
    (S.adm.exams || []).forEach((x) => {
      if (x.exam_id !== setId) return;
      if (x.status === "paused" && !S.rvPaused) return;
      const cur = by[x.nickname];
      if (!cur || (cur.status === "paused" && x.status === "done")) by[x.nickname] = x;
    });
    return Object.values(by).sort((a, b) => a.nickname.localeCompare(b.nickname));
  }
  // 문제 목록 + 문제마다 사람별 답 [{nickname, sel, ok, paused}]
  function reviewData(setId) {
    if (setId === "practice") {
      const byQ = {};
      (S.adm.rows || []).forEach((r) => {
        if (r.correct === null || !byId(r.qid)) return;
        (byQ[r.qid] = byQ[r.qid] || []).push({ nickname: r.nickname, sel: r.choice || [], ok: r.correct === true, paused: false });
      });
      return ALL.filter((q) => byQ[q.id]).map((q, i) => ({ q, pos: i + 1, label: "원본 #" + q.number, people: byQ[q.id] }));
    }
    const e = examOf(setId); if (!e) return [];
    const takers = reviewTakers(setId);
    return e.questions.map((q, i) => ({
      q, pos: i + 1, label: "Question #" + (i + 1),
      people: takers.map((t) => {
        const sel = (t.answers && t.answers[q.id]) || [];
        if (t.status === "paused" && !sel.length) return null; // 아직 안 푼 문제
        return { nickname: t.nickname, sel, ok: sameAnswer(q, sel), paused: t.status === "paused" };
      }).filter(Boolean),
    }));
  }
  function reviewSets() {
    const sets = EXAMS.map((e) => {
      const xs = (S.adm.exams || []).filter((x) => x.exam_id === e.id);
      return { id: e.id, title: e.title, done: xs.filter((x) => x.status === "done").length, paused: xs.filter((x) => x.status === "paused").length };
    }).filter((s) => s.done || s.paused);
    const practice = new Set((S.adm.rows || []).filter((r) => r.correct !== null).map((r) => r.qid)).size;
    if (practice) sets.push({ id: "practice", title: "연습 풀이 기록", practice });
    return sets;
  }
  function reviewSetsHtml() {
    const sets = reviewSets();
    if (!sets.length) return `<p class="muted">아직 리뷰할 기록이 없어요. 누군가 실전 모의고사를 풀면 여기 나타나요.</p>`;
    return `<div class="rv-sets">` + sets.map((s) => `<a class="rv-set" href="#/admin/review/${s.id}">
        <b>${esc(s.title)}</b>
        <span>${s.practice ? `${s.practice}문제` : `제출 ${s.done}명${s.paused ? ` · 푸는 중 ${s.paused}명` : ""}`}</span>
        <span class="rv-go">같이 리뷰 →</span>
      </a>`).join("") + `</div>`;
  }

  async function renderReview() {
    const u = Store.user;
    if (!u || !u.isAdmin) { location.hash = "#/"; return; }
    const R = S.rv || {};
    $("#stats").innerHTML = "";
    if (!S.adm) {
      $("#rvBody").innerHTML = `<p class="muted">불러오는 중…</p>`;
      await loadAdminData();
      if (S.view !== "review") return;
    }
    const setTitle = R.set === "practice" ? "연습 풀이 기록" : ((examOf(R.set) || {}).title || R.set);
    $("#rvTitle").textContent = setTitle + " · 같이 오답 리뷰";
    $("#rvOnlyWrong").classList.toggle("on", S.rvOnlyWrong);
    $("#rvAll").classList.toggle("on", !S.rvOnlyWrong);
    $("#rvPaused").checked = S.rvPaused;
    $("#rvPausedWrap").hidden = R.set === "practice";
    $("#rvAlways").checked = S.rvAlways;
    syncNamesSeg();

    if (S.adm.error) { $("#rvBody").innerHTML = `<p class="muted">불러오지 못했어요: ${esc(S.adm.error)}</p>`; $("#rvStrip").innerHTML = ""; return; }
    const all = reviewData(R.set);
    const list = S.rvOnlyWrong ? all.filter((x) => x.people.some((p) => !p.ok)) : all.filter((x) => x.people.length || R.set !== "practice");
    S.rvList = list.map((x) => x.pos);
    if (!list.length) {
      $("#rvStrip").innerHTML = "";
      $("#rvBody").innerHTML = `<p class="muted">${S.rvOnlyWrong ? "틀린 사람이 있는 문제가 없어요." : "문제가 없어요."}</p>`;
      return;
    }
    let cur = list.find((x) => x.pos === R.pos);
    if (!cur) { cur = list[0]; history.replaceState(null, "", `#/admin/review/${R.set}/${cur.pos}`); R.pos = cur.pos; }
    const at = list.indexOf(cur);

    $("#rvStrip").innerHTML = list.map((x) => {
      const bad = x.people.filter((p) => !p.ok).length;
      const cls = !x.people.length ? "" : bad ? "bad" : "ok";
      return `<button class="rv-no ${cls}${x === cur ? " on" : ""}" data-rvpos="${x.pos}" title="${esc(x.label)} · ${x.people.length}명 중 오답 ${bad}">${x.pos}${bad ? `<small>${bad}</small>` : ""}</button>`;
    }).join("");

    const { q, people } = cur;
    const key = R.set + ":" + q.id;
    const shown = S.rvAlways || !!(S.rvShown && S.rvShown[key]);
    const ans = q.answer || [];
    const pickers = (k) => people.filter((p) => p.sel.includes(k));
    const names = S.rvNames === "show" || (S.rvNames === "after" && shown);
    const chip = (p) => `<span class="rv-name${shown ? (p.ok ? " ok" : " bad") : ""}">${esc(p.nickname)}${p.paused ? "<i>푸는 중</i>" : ""}</span>`;
    const opts = (q.options || []).map((o) => {
      const who = pickers(o.k), isAns = ans.includes(o.k);
      let c = "opt rv-opt";
      if (shown && isAns) c += " correct"; else if (shown && who.length) c += " chosen-bad";
      return `<li><div class="${c}">
          <span class="k">${o.k}.</span>
          <span class="t">${esc(txt(o))}</span>
          <span class="rv-count">${[who.length ? who.length + "명" : "", shown && isAns ? "정답" : ""].filter(Boolean).join(" · ")}</span>
        </div>${who.length && names ? `<div class="rv-who">${who.map(chip).join("")}</div>` : ""}</li>`;
    }).join("");
    const none = people.filter((p) => !p.sel.length);
    const okN = people.filter((p) => p.ok).length;
    const wrongs = shown && q.why_wrong
      ? Object.keys(q.why_wrong).filter((k) => !ans.includes(k)).map((k) => {
          const who = pickers(k);
          return `<li class="${who.length ? "mine" : ""}"><b>${k}</b><span>${md(txt(q.why_wrong[k]))}${who.length ? ` <em>← ${names ? who.map((p) => esc(p.nickname)).join(", ") : who.length + "명"} 선택</em>` : ""}</span></li>`;
        }).join("")
      : "";
    const assignment = R.set !== "practice" && MOCK_ASSIGNMENT[q.id];
    const dom = assignment && MOCK_DOMAINS.find((d) => d.id === assignment.domain);

    $("#rvBody").innerHTML = `<article class="card rv-card">
      <div class="chead">
        <span class="qno">${esc(cur.label)}</span>
        ${dom ? `<span class="badge" data-domain="${dom.id}">${esc(dom.shortName || dom.name)}</span>` : ""}
        ${(q.tags || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
        <span class="spacer"></span>
        <span class="badge">${people.length}명 응답</span>
        ${shown && people.length ? `<span class="badge ${okN === people.length ? "ok" : "bad"}">정답 ${okN} · 오답 ${people.length - okN}</span>` : ""}
      </div>
      <div class="qtext">${esc(txt(q.question))}</div>
      ${ans.length > 1 ? `<p class="muted rv-multi">정답 ${ans.length}개를 고르는 문제</p>` : ""}
      <ul class="opts">${opts}</ul>
      ${none.length ? `<p class="rv-none">무응답: ${names ? none.map(chip).join("") : none.length + "명"}</p>` : ""}
      ${people.length ? "" : `<p class="muted rv-none">아직 이 문제를 푼 사람이 없어요.</p>`}
      ${shown ? `<div class="expl">
          <h4>정답 ${ans.join(", ")}</h4>
          <p>${md(txt(q.explanation))}</p>
          ${wrongs ? `<ul class="wrongs">${wrongs}</ul>` : ""}
        </div>
        ${studyLinksHtml(q, cur.pos, "같이 오답 리뷰 #" + cur.pos)}` : `<div class="rv-reveal"><button class="primary" data-rvreveal>정답·해설 공개 <kbd>Space</kbd></button></div>`}
    </article>
    <div class="rv-nav">
      <button data-rvmove="-1" ${at ? "" : "disabled"}>← 이전</button>
      <span class="muted">${at + 1} / ${list.length}</span>
      <button data-rvmove="1" ${at < list.length - 1 ? "" : "disabled"}>다음 →</button>
    </div>`;
    const on = $("#rvStrip .rv-no.on"); if (on) on.scrollIntoView({ block: "nearest", inline: "center" });
  }
  function reviewMove(d) {
    const list = S.rvList || [], i = list.indexOf(S.rv && S.rv.pos);
    const next = list[i + d]; if (next == null) return;
    location.hash = `#/admin/review/${S.rv.set}/${next}`;
  }
  function reviewReveal() {
    const x = (reviewData(S.rv.set) || []).find((y) => y.pos === S.rv.pos); if (!x) return;
    S.rvShown = S.rvShown || {};
    const key = S.rv.set + ":" + x.q.id;
    S.rvShown[key] = !S.rvShown[key];
    renderReview();
  }
  $("#review").addEventListener("click", (e) => {
    const n = e.target.closest("button[data-rvpos]");
    if (n) { location.hash = `#/admin/review/${S.rv.set}/${n.dataset.rvpos}`; return; }
    const m = e.target.closest("button[data-rvmove]");
    if (m) { reviewMove(Number(m.dataset.rvmove)); return; }
    if (e.target.closest("button[data-rvreveal]")) { reviewReveal(); return; }
    if (e.target.closest("#rvOnlyWrong")) { S.rvOnlyWrong = true; renderReview(); return; }
    if (e.target.closest("#rvAll")) { S.rvOnlyWrong = false; renderReview(); return; }
    if (e.target.closest("#rvReload")) { S.adm = null; renderReview(); return; }
  });
  function syncNamesSeg() {
    document.querySelectorAll(".rv-names button[data-names]").forEach((b) => b.classList.toggle("on", b.dataset.names === S.rvNames));
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".rv-names button[data-names]"); if (!b) return;
    S.rvNames = b.dataset.names;
    try { localStorage.setItem("saa.rv.names", S.rvNames); } catch (_) {}
    syncNamesSeg();
    if (S.view === "review") renderReview(); else if (S.view === "admin") renderAdmin();
  });
  $("#rvPaused").addEventListener("change", (e) => { S.rvPaused = e.target.checked; renderReview(); });
  $("#rvAlways").addEventListener("change", (e) => { S.rvAlways = e.target.checked; renderReview(); });
  addEventListener("keydown", (e) => {
    if (S.view !== "review") return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea" || $("#authDlg").open) return;
    if (e.key === "ArrowRight") { e.preventDefault(); reviewMove(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); reviewMove(-1); }
    else if (e.key === " " || e.key === "Enter") { if (S.rvAlways) return; e.preventDefault(); reviewReveal(); }
  });

  /* ---------------- 풀이 대상 목록 ---------------- */
  function scopeQuestions() {
    if (!S.scope) return [];
    if (S.scope.type === "tag") return ALL.filter((q) => (q.tags || []).includes(S.scope.tag) && answered(q.id));
    if (S.scope.type === "category") {
      const group = categoryOf(S.scope.id);
      return group ? ALL.filter((q) => inCategory(q, group)) : [];
    }
    const e = examOf(S.scope.id);
    return e ? e.questions : [];
  }
  function matches(q) {
    const r = rec(q.id), s = S.search.trim().toLowerCase();
    if (S.filter === "unanswered" && answered(q.id)) return false;
    if (S.filter === "wrong" && r.correct !== false) return false;
    if (S.filter === "bookmark" && !r.bookmarked) return false;
    if (S.tag && !(q.tags || []).includes(S.tag)) return false;
    if (s) {
      const hay = ["#" + q.number, q.question.en, q.question.ko,
        (q.options || []).map((o) => o.en + " " + o.ko).join(" "), (q.tags || []).join(" ")].join(" ").toLowerCase();
      if (!hay.includes(s)) return false;
    }
    return true;
  }
  // 목록은 필터를 바꿀 때만 다시 계산한다 (문제를 푸는 순간 목록에서 사라지지 않도록)
  function rebuild(keepCurrent) {
    const prev = S.work[S.idx];
    S.work = scopeQuestions().filter(matches).map((q) => q.id);
    if (keepCurrent && prev) {
      const i = S.work.indexOf(prev);
      S.idx = i >= 0 ? i : 0;
    } else S.idx = 0;
    if (S.idx > S.work.length - 1) S.idx = Math.max(0, S.work.length - 1);
  }

  /* ---------------- 실전 시험 세션 ---------------- */
  function formatClock(seconds) {
    const value = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const secs = value % 60;
    return hours
      ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  function stopExamClock() {
    if (S.examTimerId) clearInterval(S.examTimerId);
    S.examTimerId = null;
  }
  function updateExamClock() {
    if (!isTimedExam()) return;
    const elapsed = Math.floor(examElapsed(S.examSession));
    // 15초마다 저장 (백그라운드 탭은 타이머가 느려지므로 시각 기준)
    if (Date.now() - (S.examSession.lastPersist || 0) >= 15000) persistExamSession();
    const remaining = S.examSession.limitSeconds - elapsed;
    const overtime = remaining < 0;
    $("#examTimer").textContent = overtime ? `+${formatClock(-remaining)}` : formatClock(remaining);
    $("#examTimerNote").textContent = overtime ? "시간 초과 · 계속 풀 수 있습니다" : "남은 시간";
    $("#timedExamBar").classList.toggle("overtime", overtime);
  }
  function ensureExamClock() {
    if (!isTimedExam()) { stopExamClock(); return; }
    updateExamClock();
    if (!S.examTimerId) S.examTimerId = setInterval(updateExamClock, 1000);
  }
  function discardExamSession() {
    stopExamClock();
    S.examSession = null;
    S.sel = {};
    S.reveal = {};
  }
  // 진행 상황(답·경과 시간·위치)을 저장. 나간 동안에는 시간이 흐르지 않는다.
  function pauseEntry() {
    const s = S.examSession;
    const prev = pausedMap()[s.examId];
    return {
      sid: s.sid,
      startedAt: s.startedAt,
      elapsedSeconds: Math.floor(examElapsed(s)),
      limitSeconds: s.limitSeconds,
      answers: s.answers,
      idx: isTimedExam() ? S.idx : (prev ? prev.idx : 0),
      pausedAt: Date.now(),
    };
  }
  function persistExamSession() {
    const s = S.examSession;
    if (!s || !Store.user || s.conflict) return;   // 다른 곳에 넘어간 화면은 저장하지 않는다
    s.lastPersist = Date.now();
    Store.savePause(s.examId, pauseEntry(), s.takeover);
    s.takeover = false;
  }
  // 다른 탭·기기에서 같은 시험을 이어 풀었거나(TAKEN) 제출·새로 시작했으면(GONE) 이 화면을 멈춘다.
  function freezeExamSession(code) {
    const s = S.examSession;
    if (!s || s.conflict) return;
    s.elapsedBefore = examElapsed(s);
    s.resumedAt = null;
    s.conflict = code;
    stopExamClock();
    if (isTimedExam()) renderSolve();
  }
  Store.onPauseConflict = (examId, code) => {
    if (S.examSession && S.examSession.examId === examId && (code === "TAKEN" || code === "GONE")) freezeExamSession(code);
  };
  function suspendExamSession() {
    persistExamSession();
    discardExamSession();
  }
  function pauseTimedExam() {
    if (!isTimedExam()) return;
    const id = S.examSession.examId;
    suspendExamSession();
    acceptedHash = "#/" + id;
    location.hash = "#/" + id;
  }
  function examRouteHash() {
    return S.examSession ? `#/${S.examSession.examId}/exam` : "";
  }
  function isLeavingTimedExam(nextHash) {
    return isTimedExam() && nextHash !== examRouteHash();
  }
  function startTimedExam(examId) {
    const e = examOf(examId);
    if (!e) return;
    if (!Store.user) { openAuth("실전 시험 완료 기록을 저장하려면 먼저 로그인해 주세요."); return; }
    const paused = pausedExam(examId);
    if (paused && !confirm(`일시정지한 시험(답변 ${pausedAnsweredCount(e, paused)}/${e.questions.length})이 있어요.\n지우고 처음부터 다시 시작할까요?`)) return;
    clearPausedExam(examId);
    stopExamClock();
    const now = Date.now();
    S.examSession = {
      examId,
      sid: newSid(),
      takeover: true,
      startedAt: now,
      limitSeconds: examDurationSeconds(e.questions.length),
      answers: {},
      elapsedBefore: 0,
      resumedAt: now,
    };
    S.resumeIdx = 0;
    S.sel = {};
    S.reveal = {};
    S.restart = true;
    location.hash = `#/${examId}/exam`;
  }
  function resumeTimedExam(examId) {
    const e = examOf(examId);
    if (!e) return;
    if (!Store.user) { openAuth("이어서 풀려면 먼저 로그인해 주세요."); return; }
    const p = pausedExam(examId);
    if (!p) { startTimedExam(examId); return; }
    stopExamClock();
    S.examSession = {
      examId,
      sid: newSid(),
      takeover: true,             // 이어 푸는 이 화면이 주인이 된다 (다른 화면은 다음 저장 때 멈춤)
      startedAt: p.startedAt,
      limitSeconds: p.limitSeconds || examDurationSeconds(e.questions.length),
      answers: p.answers || {},
      elapsedBefore: p.elapsedSeconds || 0,
      resumedAt: Date.now(),
    };
    S.resumeIdx = p.idx || 0;
    S.sel = {};
    S.reveal = {};
    location.hash = `#/${examId}/exam`;
  }
  async function finishTimedExam() {
    if (!isTimedExam()) return;
    const e = examOf(S.examSession.examId);
    if (!e) return;
    const unanswered = e.questions.filter((q) => !timedAnswered(q.id));
    if (unanswered.length) {
      $("#examFinishHint").textContent = `아직 ${unanswered.length}문제가 남았습니다.`;
      setQuestionDrawer(true);
      return;
    }
    if (S.examSession.conflict) return;
    // 제출 직전에 이 화면이 아직 주인인지 확인 (다른 곳에서 이어 풀었거나 제출했으면 막는다)
    persistExamSession();
    const check = await Store.savePauseNow(S.examSession.examId, pauseEntry());
    if (check === "TAKEN" || check === "GONE") { freezeExamSession(check); return; }
    const sid = S.examSession.sid;
    const finishedAt = Date.now();
    const answers = Object.fromEntries(e.questions.map((q) => [q.id, timedChoice(q.id).slice()]));
    const correct = e.questions.filter((q) => {
      const expected = (q.answer || []).slice().sort().join(",");
      return expected === answers[q.id].slice().sort().join(",");
    }).length;
    await Store.saveExamAttempt(e.id, {
      startedAt: S.examSession.startedAt,
      finishedAt,
      elapsedSeconds: Math.floor(examElapsed(S.examSession)),
      limitSeconds: S.examSession.limitSeconds,
      total: e.questions.length,
      correct,
      answers,
    });
    discardExamSession();
    Store.clearPause(e.id, sid);
    S.reportFilter = correct === e.questions.length ? "all" : "wrong";
    S.reportTag = "";
    S.reportAttempt = 0;
    location.hash = `#/${e.id}/report`;
  }

  /* ---------------- 실전 시험 결과 리포트 ---------------- */
  const sameAnswer = (q, sel) => (q.answer || []).slice().sort().join(",") === (sel || []).slice().sort().join(",");
  const PASS_RATE = 72; // 720 / 1000 — 실제 시험은 환산 점수라 참고용
  function reportItems(e, attempt) {
    const answers = (attempt && attempt.answers) || {};
    return e.entries.map((entry, i) => {
      const q = byId(entry.id);
      const sel = Array.isArray(answers[entry.id]) ? answers[entry.id] : [];
      return { q, pos: i + 1, domain: entry.domain, sel, ok: sameAnswer(q, sel) };
    });
  }
  function renderReport() {
    const e = examOf(S.scope.id);
    const pick = e && reportAttemptOf(e.id, S.reportAttempt);
    if (!e || !pick) { location.hash = e ? "#/" + e.id : "#/exams"; return; }
    const attempt = pick.attempt;
    const items = reportItems(e, attempt);
    const total = items.length;
    const correct = items.filter((x) => x.ok).length;
    const wrong = total - correct;
    const rate = total ? Math.round((correct / total) * 100) : 0;
    const need = Math.max(0, Math.ceil((PASS_RATE / 100) * total) - correct);
    const over = attempt.elapsedSeconds > attempt.limitSeconds;

    $("#rTitle").textContent = pick.count > 1 ? `${e.title} · ${pick.no}회차` : e.title;
    $("#rBack").setAttribute("href", "#/" + e.id);
    $("#rBack").textContent = "← " + e.title;
    const hist = pick.count > 1 ? examHistory(e.id) : [];
    $("#rHero").innerHTML = `${hist.length ? `<nav class="report-attempts" aria-label="응시 회차">${hist.map((a, i) =>
        `<a href="#/${e.id}/report/${i + 1}" class="${i + 1 === pick.no ? "on" : ""}"${i + 1 === pick.no ? ' aria-current="page"' : ""}>${i + 1}회차 <b>${a.correct}</b></a>`).join("")}</nav>` : ""}
      <div class="progress-big">
        <div class="pb-num"><b>${correct}</b><span>/ ${total} 정답</span></div>
        <div class="pb-body">
          <div class="bar big report-bar"><span style="width:${rate}%"></span><i style="left:${PASS_RATE}%" title="합격선 참고 ${PASS_RATE}%"></i></div>
          <p class="ec-meta">
            <span>정답률 <b>${rate}%</b></span><span class="dot">·</span>
            <span class="warn-t">오답 ${wrong}</span><span class="dot">·</span>
            <span>소요 ${formatClock(attempt.elapsedSeconds)} / ${formatClock(attempt.limitSeconds)}${over ? " (시간 초과)" : ""}</span><span class="dot">·</span>
            <span>${new Date(attempt.finishedAt).toLocaleString("ko-KR")}</span>
          </p>
        </div>
      </div>
      <p class="report-verdict ${need ? "bad" : "ok"}">${need
        ? `합격선(참고 ${PASS_RATE}%)까지 <b>${need}문제</b> 더 맞혀야 해요.`
        : `합격선(참고 ${PASS_RATE}%)을 넘었어요.`}
        <small>실제 시험은 100~1000점 환산 점수이고 비채점 15문항이 섞여 있어 정확한 합격 여부와는 다를 수 있어요.</small></p>`;

    // 영역별
    const domains = MOCK_DOMAINS.map((d) => {
      const list = items.filter((x) => x.domain === d.id);
      const ok = list.filter((x) => x.ok).length;
      return { ...d, count: list.length, ok, rate: list.length ? Math.round((ok / list.length) * 100) : 0 };
    }).filter((d) => d.count);
    const weakest = domains.length ? domains.reduce((a, b) => (b.rate < a.rate ? b : a)) : null;
    $("#rDomains").innerHTML = domains.map((d) => `
      <div class="report-domain" data-domain="${d.id}">
        <div class="rd-head">
          <b>${esc(d.name)}</b><small>출제 비중 ${d.weight}%</small>
          ${weakest && d.id === weakest.id && d.rate < 100 ? `<span class="badge bad">보완 필요</span>` : ""}
          <span class="rd-score">${d.ok} / ${d.count} · ${d.rate}%</span>
        </div>
        <div class="bar"><span style="width:${d.rate}%"></span></div>
      </div>`).join("");

    // 주제(태그)별
    const tagStat = {};
    items.forEach((x) => (x.q.tags || []).forEach((t) => {
      const s = tagStat[t] || (tagStat[t] = { tag: t, total: 0, wrong: 0 });
      s.total++; if (!x.ok) s.wrong++;
    }));
    const weakTags = Object.values(tagStat).filter((s) => s.wrong)
      .sort((a, b) => b.wrong - a.wrong || (b.wrong / b.total) - (a.wrong / a.total) || a.tag.localeCompare(b.tag))
      .slice(0, 12);
    $("#rTags").innerHTML = weakTags.length
      ? `<div class="report-tags">${weakTags.map((s) => `<button type="button" class="report-tag ${S.reportTag === s.tag ? "on" : ""}" data-rtag="${esc(s.tag)}">
          <span>${esc(s.tag)}</span><b>${s.wrong}</b><small>/ ${s.total}</small></button>`).join("")}</div>`
      : `<p class="muted">틀린 문제가 없어요.</p>`;

    // 문항 지도
    $("#rMap").innerHTML = items.map((x) =>
      `<button type="button" class="qn ${x.ok ? "ok" : "bad"}" data-rjump="${x.q.id}" aria-label="${x.pos}번 ${x.ok ? "정답" : "오답"}">${x.pos}</button>`).join("");

    // 목록
    if (S.reportTag && !tagStat[S.reportTag]) S.reportTag = "";
    $("#rFilter").innerHTML = `
      <button type="button" data-rfilter="wrong" class="${S.reportFilter === "wrong" ? "on" : ""}">틀린 문제 ${wrong}</button>
      <button type="button" data-rfilter="all" class="${S.reportFilter === "all" ? "on" : ""}">전체 ${total}</button>`;
    $("#rTagFilter").hidden = !S.reportTag;
    $("#rTagFilter").innerHTML = S.reportTag ? `주제: <b>${esc(S.reportTag)}</b> <button type="button" class="iconbtn" data-rtag-clear aria-label="주제 필터 해제">✕</button>` : "";
    const shown = items.filter((x) => (S.reportFilter === "all" || !x.ok) && (!S.reportTag || (x.q.tags || []).includes(S.reportTag)));
    $("#rList").innerHTML = shown.length ? shown.map(reportCard).join("")
      : `<p class="empty">${S.reportFilter === "wrong" ? "이 조건에서 틀린 문제가 없어요." : "문제가 없어요."}</p>`;

    // Claude 오답노트 내보내기
    S.reportCtx = { e, pick, attempt, items, total, correct, rate, need, domains,
      tags: Object.values(tagStat).filter((s) => s.wrong).sort((a, b) => b.wrong - a.wrong || a.tag.localeCompare(b.tag)) };
    renderExport();

    $("#stats").innerHTML = [
      `<span class="chip">${esc(e.title)}</span>`,
      `<span class="chip good">정답 <b>${correct}</b></span>`,
      `<span class="chip bad">오답 <b>${wrong}</b></span>`,
      `<span class="chip">정답률 <b>${rate}%</b></span>`,
    ].join("");
  }
  function reportCard(x) {
    const { q, sel, ok, pos } = x;
    const dom = MOCK_DOMAINS.find((d) => d.id === x.domain);
    const opts = (q.options || []).map((o) => {
      const isSel = sel.includes(o.k), isAns = (q.answer || []).includes(o.k);
      let c = "opt", mark = "";
      if (isAns) { c += " correct"; mark = isSel ? "✓ 내 선택 · 정답" : "정답"; }
      else if (isSel) { c += " chosen-bad"; mark = "✗ 내 선택"; }
      return `<li><div class="${c}"><span class="k">${o.k}.</span><span class="t">${esc(txt(o))}</span>${mark ? `<span class="mark">${mark}</span>` : ""}</div></li>`;
    }).join("");
    const wrongs = q.why_wrong
      ? Object.keys(q.why_wrong).filter((k) => !(q.answer || []).includes(k))
          .map((k) => `<li class="${sel.includes(k) ? "mine" : ""}"><b>${k}</b><span>${md(txt(q.why_wrong[k]))}${sel.includes(k) ? ` <em>← 내가 고른 답</em>` : ""}</span></li>`).join("")
      : "";
    const optOf = (k) => (q.options || []).find((o) => o.k === k);
    const picksWrong = sel.filter((k) => !(q.answer || []).includes(k));
    const missed = (q.answer || []).filter((k) => !sel.includes(k));
    const miss = ok ? "" : `<div class="report-miss">
        <b>내가 틀린 부분</b>
        <ul>
          ${sel.length ? "" : `<li><span class="k">–</span><div>답을 고르지 않았어요.</div></li>`}
          ${picksWrong.map((k) => `<li class="bad"><span class="k">${k}</span><div><small>내가 고른 선택지</small>${q.why_wrong && q.why_wrong[k] ? md(txt(q.why_wrong[k])) : esc(txt(optOf(k)))}</div></li>`).join("")}
          ${missed.map((k) => `<li class="ok"><span class="k">${k}</span><div><small>놓친 정답</small>${esc(txt(optOf(k)))}</div></li>`).join("")}
        </ul>
      </div>`;
    return `<article class="card ${ok ? "done-ok" : "done-bad"}" id="rq-${q.id}">
      <div class="chead">
        <span class="qno">Question #${pos}</span>
        ${dom ? `<span class="badge" data-domain="${dom.id}">${esc(dom.shortName || dom.name)}</span>` : ""}
        ${(q.tags || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
        <span class="spacer"></span>
        <span class="badge ${ok ? "ok" : "bad"}">${ok ? "정답" : "오답"}</span>
      </div>
      <div class="qtext">${esc(txt(q.question))}</div>
      <ul class="opts">${opts}</ul>
      <p class="report-answerline">내 답 <b class="${ok ? "ok-t" : "warn-t"}">${sel.length ? sel.join(", ") : "무응답"}</b> · 정답 <b class="ok-t">${(q.answer || []).join(", ")}</b></p>
      ${miss}
      ${studyLinksHtml(q, pos)}
      <details class="report-expl" ${ok ? "" : "open"}>
        <summary>해설 ${ok ? "보기" : ""}</summary>
        <div class="expl">
          <p>${md(txt(q.explanation))}</p>
          ${wrongs ? `<ul class="wrongs">${wrongs}</ul>` : ""}
        </div>
      </details>
    </article>`;
  }
  /* ---------------- Claude 오답노트용 내보내기 ----------------
   * 리포트 화면의 결과를 Markdown/JSON 으로 정리해 복사하거나 저장한다.
   * Claude 대화창에 그대로 붙여넣으면 오답노트를 만들 수 있게 요청 문구도 같이 넣는다.
   */
  const EXPORT_KEY = "saa.export";
  S.exp = (() => {
    let p = {};
    try { p = JSON.parse(localStorage.getItem(EXPORT_KEY)) || {}; } catch (_) { p = {}; }
    return { scope: p.scope === "all" ? "all" : "wrong", lang: p.lang === "both" ? "both" : "cur", prompt: p.prompt !== false };
  })();
  const saveExportPref = () => { try { localStorage.setItem(EXPORT_KEY, JSON.stringify(S.exp)); } catch (_) {} };
  const srcLabel = (q) => {
    const sid = String(q.id).replace(/-\d+$/, "");
    const ex = (window.SAA_EXAMS || []).find((x) => x.id === sid);
    return `${ex ? ex.title : sid} #${q.number}`;
  };
  const both = (o) => o && typeof o === "object" ? { en: o.en || "", ko: o.ko || "" } : { en: o || "", ko: o || "" };

  function exportData(c) {
    const { e, pick, attempt, items } = c;
    const hist = examHistory(e.id);
    const prev = hist.slice(0, pick.no - 1);
    const qs = items.map((x) => {
      const q = x.q;
      const dom = MOCK_DOMAINS.find((d) => d.id === x.domain);
      const prevWrong = prev.map((a, i) => ({ no: i + 1, a }))
        .filter(({ a }) => a && a.answers && !sameAnswer(q, a.answers[q.id] || []))
        .map(({ no, a }) => ({ attempt: no, picked: (a.answers[q.id] || []).slice() }));
      const whyWrong = {};
      Object.keys(q.why_wrong || {}).forEach((k) => { whyWrong[k] = both(q.why_wrong[k]); });
      return {
        pos: x.pos, id: q.id, source: srcLabel(q),
        domain: dom ? dom.name : x.domain || "", tags: (q.tags || []).slice(),
        correct: x.ok,
        myAnswer: x.sel.slice(), correctAnswer: (q.answer || []).slice(),
        question: both(q.question),
        options: (q.options || []).map((o) => ({ k: o.k, en: o.en || "", ko: o.ko || "" })),
        explanation: both(q.explanation),
        whyWrong,
        wrongInPreviousAttempts: prevWrong,
      };
    });
    return {
      exam: { id: e.id, title: e.title, attempt: pick.no, attempts: pick.count },
      result: {
        finishedAt: new Date(attempt.finishedAt).toISOString(),
        elapsedSeconds: attempt.elapsedSeconds, limitSeconds: attempt.limitSeconds,
        total: c.total, correct: c.correct, wrong: c.total - c.correct, rate: c.rate,
        passLineRate: PASS_RATE, needForPassLine: c.need,
      },
      domains: c.domains.map((d) => ({ name: d.name, weight: d.weight, correct: d.ok, total: d.count, rate: d.rate })),
      weakTags: c.tags.map((s) => ({ tag: s.tag, wrong: s.wrong, total: s.total })),
      history: hist.slice(0, pick.no).map((a, i) => ({ attempt: i + 1, correct: a.correct, total: a.total, finishedAt: new Date(a.finishedAt).toISOString() })),
      questions: qs,
    };
  }

  function exportPrompt(scope) {
    return [
      "아래는 내가 AWS SAA-C03 모의고사를 풀고 나온 결과야. 이 데이터로 **오답노트**를 만들어줘.",
      "",
      "1. **문제별 오답 정리** — 틀린 문제마다",
      "   - 문제의 핵심 요구사항·키워드 (예: \"가장 비용 효율적\", \"운영 오버헤드 최소\", \"고가용성\", \"실시간\")",
      "   - 정답이 맞는 이유",
      "   - 내가 고른 답이 틀린 이유 — 어떤 조건을 놓쳤는지",
      "   - 헷갈리기 쉬운 서비스·개념 비교 (필요하면 표로)",
      "   - 한 줄 암기 포인트",
      "2. **오답 패턴 분석** — 약한 도메인·주제, 반복 오답(⚠ 표시), 문제를 잘못 읽는 습관",
      "3. **복습 우선순위 Top 5** — 다음 회차 전에 공부할 주제와 찾아볼 AWS 공식 문서 주제",
      "4. **확인 문제** — 내 약점을 겨냥한 SAA-C03 스타일 변형 문제 5개 (정답·해설은 맨 끝에 모아서)",
      "",
      scope === "all" ? "맞힌 문제도 포함돼 있어. 맞혔지만 개념이 흔들려 보이는 문제가 있으면 짧게 짚어줘." : "",
      "사이트에 적힌 정답·해설이 의심스러우면 근거와 함께 지적해줘.",
      "",
      "---",
      "",
    ].filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n");
  }

  function exportMarkdown(d, opt) {
    const lang = opt.lang === "both" ? "both" : S.lang === "ko" ? "ko" : "en";
    const pickT = (o) => lang === "ko" ? (o.ko || o.en) : (o.en || o.ko);
    const block = (o) => {
      if (lang !== "both") return pickT(o);
      return o.en && o.ko && o.en !== o.ko ? `${o.en}\n\n> (한글) ${o.ko.replace(/\n/g, "\n> ")}` : (o.en || o.ko);
    };
    const r = d.result;
    const L = [];
    if (opt.prompt) L.push(exportPrompt(opt.scope));
    L.push(`# AWS SAA-C03 모의고사 결과 — ${d.exam.title}${d.exam.attempts > 1 ? ` (${d.exam.attempt}회차)` : ""}`, "");
    L.push("## 요약");
    L.push(`- 점수: **${r.correct} / ${r.total}** (정답률 ${r.rate}%) · 오답 ${r.wrong}`);
    L.push(`- 합격선(참고 ${r.passLineRate}%): ${r.needForPassLine ? `${r.needForPassLine}문제 부족` : "통과"}`);
    L.push(`- 소요 시간: ${formatClock(r.elapsedSeconds)} / ${formatClock(r.limitSeconds)}${r.elapsedSeconds > r.limitSeconds ? " (시간 초과)" : ""}`);
    L.push(`- 응시: ${new Date(r.finishedAt).toLocaleString("ko-KR")}`);
    if (d.history.length > 1) L.push(`- 회차별 점수: ${d.history.map((h) => `${h.attempt}회차 ${h.correct}/${h.total}`).join(" → ")}`);
    L.push("", "### 영역별 (SAA-C03 공식 도메인)", "| 영역 | 출제 비중 | 결과 | 정답률 |", "|---|---|---|---|");
    d.domains.forEach((x) => L.push(`| ${x.name} | ${x.weight}% | ${x.correct} / ${x.total} | ${x.rate}% |`));
    if (d.weakTags.length) {
      L.push("", "### 자주 틀린 주제 (틀린 수 / 출제 수)");
      L.push(d.weakTags.slice(0, 15).map((t) => `${t.tag} ${t.wrong}/${t.total}`).join(" · ") + (d.weakTags.length > 15 ? ` 외 ${d.weakTags.length - 15}개` : ""));
    }
    const repeat = d.questions.filter((q) => !q.correct && q.wrongInPreviousAttempts.length);
    if (repeat.length) {
      L.push("", "### ⚠ 반복 오답 (이전 회차에도 틀림)");
      L.push(repeat.map((q) => `Q${q.pos}`).join(", "));
    }
    const qText = (q) => {
      const head = `### Q${q.pos} · ${q.correct ? "✅ 정답" : "❌ 오답"} · ${q.domain}${q.tags.length ? " · " + q.tags.join(", ") : ""}`;
      const out = [head];
      if (q.wrongInPreviousAttempts.length) out.push(`⚠ 반복 오답 — ${q.wrongInPreviousAttempts.map((p) => `${p.attempt}회차에 ${p.picked.join(",") || "무응답"}`).join(", ")}`);
      out.push(`원본: ${q.source}`, "", "**문제**", "", block(q.question), "", "**선택지**", "");
      q.options.forEach((o) => {
        const mine = q.myAnswer.includes(o.k), ans = q.correctAnswer.includes(o.k);
        const mark = ans && mine ? "  ← ✅ 내 선택 · 정답" : ans ? "  ← ✅ 정답" : mine ? "  ← ❌ 내 선택" : "";
        if (lang === "both" && o.en && o.ko && o.en !== o.ko) out.push(`- **${o.k}.** ${o.en}${mark}`, `  - (한글) ${o.ko}`);
        else out.push(`- **${o.k}.** ${pickT(o)}${mark}`);
      });
      out.push("", `- 내 답: **${q.myAnswer.length ? q.myAnswer.join(", ") : "무응답"}**`, `- 정답: **${q.correctAnswer.join(", ")}**`);
      if (!q.correct) {
        const ex = block(q.explanation);
        if (ex) out.push("", "**사이트 해설**", "", ex);
        const ww = Object.keys(q.whyWrong).filter((k) => !q.correctAnswer.includes(k));
        if (ww.length) {
          out.push("", "**오답 선택지 설명**", "");
          ww.forEach((k) => out.push(`- **${k}**${q.myAnswer.includes(k) ? " (내 선택)" : ""}: ${pickT(q.whyWrong[k]).replace(/\n+/g, " ")}`));
        }
      }
      return out.join("\n");
    };
    const wrongQs = d.questions.filter((q) => !q.correct);
    L.push("", "---", "", `## 틀린 문제 (${wrongQs.length})`, "");
    if (!wrongQs.length) L.push("틀린 문제가 없어요.");
    wrongQs.forEach((q) => L.push(qText(q), ""));
    if (opt.scope === "all") {
      const okQs = d.questions.filter((q) => q.correct);
      L.push("---", "", `## 맞힌 문제 (${okQs.length})`, "");
      okQs.forEach((q) => L.push(qText(q), ""));
    }
    return L.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
  }

  function exportPayload(kind) {
    const c = S.reportCtx;
    const d = exportData(c);
    if (S.exp.scope === "wrong") d.questions = d.questions.filter((q) => !q.correct);
    if (kind === "json") return JSON.stringify(d, null, 2);
    return exportMarkdown(d, S.exp);
  }
  const exportFileName = (ext) => {
    const c = S.reportCtx;
    return `saa-c03_${c.e.id}_try${c.pick.no}_${S.exp.scope === "all" ? "all" : "wrong"}.${ext}`;
  };

  function renderExport() {
    const c = S.reportCtx; const el = $("#rExport");
    if (!c || !el) return;
    const wrong = c.total - c.correct;
    const n = S.exp.scope === "all" ? c.total : wrong;
    const size = new Blob([exportPayload("md")]).size;
    el.innerHTML = `
      <div class="panel-head"><h3>Claude로 오답노트 만들기</h3><span class="muted">복사해서 Claude 대화창에 붙여넣으면 오답노트를 만들어줘요</span></div>
      <div class="rx-opts">
        <div class="seg" role="group" aria-label="포함할 문제">
          <button type="button" data-xscope="wrong" class="${S.exp.scope === "wrong" ? "on" : ""}">틀린 문제 ${wrong}</button>
          <button type="button" data-xscope="all" class="${S.exp.scope === "all" ? "on" : ""}">전체 ${c.total}</button>
        </div>
        <div class="seg" role="group" aria-label="문제 언어">
          <button type="button" data-xlang="cur" class="${S.exp.lang === "cur" ? "on" : ""}">${S.lang === "ko" ? "한글만" : "EN만"}</button>
          <button type="button" data-xlang="both" class="${S.exp.lang === "both" ? "on" : ""}">EN + 한글</button>
        </div>
        <label class="rv-check"><input type="checkbox" data-xprompt ${S.exp.prompt ? "checked" : ""}> 오답노트 요청 문구 포함</label>
      </div>
      <div class="rx-actions">
        <button type="button" class="primary" data-xcopy>📋 복사하기</button>
        <button type="button" data-xdl="md">.md 저장</button>
        <button type="button" data-xdl="json">.json 저장</button>
        <span class="rx-status" id="rxStatus" role="status"></span>
      </div>
      <p class="rx-meta">문제 ${n}개 · 약 ${Math.max(1, Math.round(size / 1024))}KB — 문제·선택지, 내 답/정답, 사이트 해설, 영역·주제별 통계${c.pick.no > 1 ? ", 이전 회차 반복 오답" : ""} 포함</p>`;
  }

  async function copyText(s) {
    try { await navigator.clipboard.writeText(s); return true; } catch (_) {}
    try {
      const ta = document.createElement("textarea");
      ta.value = s; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      const ok = document.execCommand("copy"); ta.remove(); return ok;
    } catch (_) { return false; }
  }
  function downloadText(s, name, type) {
    const url = URL.createObjectURL(new Blob([s], { type }));
    const a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function exportStatus(msg, bad) {
    const s = $("#rxStatus"); if (!s) return;
    s.textContent = msg; s.className = "rx-status" + (bad ? " bad" : " ok");
    clearTimeout(exportStatus.t); exportStatus.t = setTimeout(() => { s.textContent = ""; }, 4000);
  }
  async function handleExportClick(ev) {
    const sc = ev.target.closest("[data-xscope]");
    if (sc) { S.exp.scope = sc.dataset.xscope; saveExportPref(); renderExport(); return true; }
    const lg = ev.target.closest("[data-xlang]");
    if (lg) { S.exp.lang = lg.dataset.xlang; saveExportPref(); renderExport(); return true; }
    if (ev.target.closest("[data-xcopy]")) {
      const ok = await copyText(exportPayload("md"));
      exportStatus(ok ? "복사했어요. Claude 대화창에 붙여넣으세요." : "복사하지 못했어요. .md 저장을 이용해 주세요.", !ok);
      return true;
    }
    const dl = ev.target.closest("[data-xdl]");
    if (dl) {
      const kind = dl.dataset.xdl;
      downloadText(exportPayload(kind), exportFileName(kind), kind === "json" ? "application/json" : "text/markdown;charset=utf-8");
      exportStatus("파일을 저장했어요. Claude 대화창에 첨부하세요.");
      return true;
    }
    return false;
  }
  $("#report").addEventListener("change", (ev) => {
    if (ev.target.matches("[data-xprompt]")) { S.exp.prompt = ev.target.checked; saveExportPref(); renderExport(); }
  });
  $("#report").addEventListener("click", (ev) => {
    if (ev.target.closest("#rExport")) { handleExportClick(ev); return; }
    const sl = ev.target.closest("a[data-study-link]");
    if (sl) { S.studyReturn = { hash: location.hash, qid: sl.dataset.q, pos: sl.dataset.pos }; return; }
    const f = ev.target.closest("[data-rfilter]");
    if (f) { S.reportFilter = f.dataset.rfilter; renderReport(); return; }
    const t = ev.target.closest("[data-rtag]");
    if (t) {
      S.reportTag = S.reportTag === t.dataset.rtag ? "" : t.dataset.rtag;
      renderReport();
      $(".report-listhead").scrollIntoView({ block: "start", behavior: "smooth" });
      return;
    }
    if (ev.target.closest("[data-rtag-clear]")) { S.reportTag = ""; renderReport(); return; }
    const j = ev.target.closest("[data-rjump]");
    if (j) {
      let el = document.getElementById("rq-" + j.dataset.rjump);
      if (!el) { S.reportFilter = "all"; S.reportTag = ""; renderReport(); el = document.getElementById("rq-" + j.dataset.rjump); }
      if (el) {
        const d = el.querySelector("details"); if (d) d.open = true;
        el.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  });

  /* ---------------- 문제 카드 ---------------- */
  function card(q) {
    const timed = isTimedExam();
    const stored = rec(q.id);
    const r = timed ? { choice: timedChoice(q.id), correct: null, bookmarked: stored.bookmarked } : stored;
    const done = timed ? false : answered(q.id);
    const open = !!S.reveal[q.id];
    const chosen = r.choice || [];
    const sel = timed ? timedChoice(q.id) : (S.sel[q.id] || []);
    const need = (q.answer || []).length;
    const ex = sourceExamOf(q.sourceExamId || q.examId);
    const assignment = MOCK_ASSIGNMENT[q.id];
    const shownNumber = S.scope.type === "exam" && assignment && assignment.examId === S.scope.id
      ? assignment.position
      : q.number;

    const opts = (q.options || []).map((o) => {
      let c = "opt", mark = "";
      if (done) {
        const isSel = chosen.includes(o.k);
        const isAns = (q.answer || []).includes(o.k);
        if (open) {
          if (isAns) { c += " correct"; mark = isSel ? "✓ 정답" : "정답"; }
          else if (isSel) { c += " chosen-bad"; mark = "✗ 내 선택"; }
        } else if (isSel) {
          c += r.correct ? " correct" : " chosen-bad";
          mark = "내 선택";
        }
      } else if (sel.includes(o.k)) c += " picked";
      return `<li><button class="${c}" data-act="pick" data-q="${q.id}" data-k="${o.k}" ${done ? "disabled" : ""}>
        <span class="k">${o.k}.</span><span class="t">${esc(txt(o))}</span>
        ${mark ? `<span class="mark">${mark}</span>` : ""}</button></li>`;
    }).join("");

    let bottom = "";
    if (timed) {
      bottom = `<div class="cfoot timed-choice-hint">
        <span class="foot-hint">선택은 이 시험 안에서만 임시 보관되며, 전체 제출 전에는 채점되지 않습니다.</span>
      </div>`;
    } else if (!done) {
      bottom = `<div class="cfoot">
        <button class="primary" data-act="submit" data-q="${q.id}" ${sel.length === need ? "" : "disabled"}>확인</button>
        <span class="foot-hint">${need > 1 ? `정답 ${need}개를 고르고 확인` : "선택한 뒤 확인을 누르세요"}</span>
      </div>`;
    } else {
      const wrongs = q.why_wrong
        ? Object.keys(q.why_wrong).filter((k) => !(q.answer || []).includes(k))
            .map((k) => `<li><b>${k}</b><span>${md(txt(q.why_wrong[k]))}</span></li>`).join("")
        : "";
      bottom = `<div class="verdict ${r.correct ? "ok" : "bad"}">
          <b>${r.correct ? "정답이에요 ✓" : "틀렸어요 ✗"}</b>
          <span>${r.correct ? "" : "정답은 아직 가려져 있어요."}</span>
        </div>
        ${open ? `<div class="expl">
          <h4>정답 ${(q.answer || []).join(", ")} · 해설</h4>
          <p>${md(txt(q.explanation))}</p>
          ${wrongs ? `<ul class="wrongs">${wrongs}</ul>` : ""}
        </div>` : ""}
        <div class="cfoot">
          <button class="${open ? "ghost" : "primary"}" data-act="reveal" data-q="${q.id}">${open ? "해설 접기" : "정답·해설 보기"}</button>
          <button class="ghost" data-act="reset" data-q="${q.id}">다시 풀기</button>
        </div>`;
    }

    return `<article class="card ${done ? (r.correct ? "done-ok" : "done-bad") : ""}" id="q-${q.id}">
      <div class="chead">
        <span class="qno">Question #${shownNumber}</span>
        ${S.scope.type !== "exam" && ex ? `<span class="badge">${esc(ex.title)}</span>` : ""}
        ${timed ? "" : (q.tags || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
        ${done ? `<span class="badge ${r.correct ? "ok" : "bad"}">${r.correct ? "정답" : "오답"}</span>` : ""}
        ${timed && timedAnswered(q.id) ? `<span class="badge answered">답변 완료</span>` : ""}
        <span class="spacer"></span>
        <button class="iconbtn ${r.bookmarked ? "on" : ""}" data-act="mark" data-q="${q.id}" title="북마크">${r.bookmarked ? "★" : "☆"}</button>
      </div>
      <div class="qtext">${esc(txt(q.question))}</div>
      ${need > 1 && !done ? `<p class="multi-hint">정답 ${need}개짜리 문제예요.</p>` : ""}
      <ul class="opts">${opts}</ul>
      ${bottom}
    </article>`;
  }

  function setQuestionDrawer(open) {
    const drawer = $("#questionDrawer");
    const backdrop = $("#qnavBackdrop");
    if (!drawer || !backdrop) return;
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    $("#qnavToggle").setAttribute("aria-expanded", String(open));
    backdrop.hidden = !open;
    document.body.classList.toggle("drawer-open", open);
    if (open) $("#qnavClose").focus();
  }

  function renderSolve() {
    const isTag = S.scope.type === "tag";
    const isCategory = S.scope.type === "category";
    const isExam = S.scope.type === "exam";
    const e = isExam ? examOf(S.scope.id) : null;
    const category = isCategory ? categoryOf(S.scope.id) : null;
    if ((isExam && !e) || (isCategory && !category)) { location.hash = "#/"; return; }
    const scopeTitle = isTag ? S.scope.tag : isCategory ? category.name : e.title;

    $("#examTitle").textContent = scopeTitle;
    const timed = isTimedExam();
    $("#examNote").textContent = timed ? "실전 시험 · 제출 후 채점" : isTag ? "푼 문제 모아보기" : isCategory ? "유형별 전체 문제" : (e.note || "");
    $("#examNote").hidden = !$("#examNote").textContent;
    $("#solveBack").setAttribute("href", isExam ? "#/" + e.id : "#/practice");
    $("#solveBack").textContent = timed ? "← 일시정지하고 나가기" : isExam ? "← " + e.title : "← 문제 유형";

    const scoped = scopeQuestions();
    const t = tally(scoped);
    const timedCount = timed ? scoped.filter((q) => timedAnswered(q.id)).length : 0;
    $("#stats").innerHTML = timed ? [
        `<span class="chip">${esc(scopeTitle)} <b>${scoped.length}</b>문제</span>`,
        `<span class="chip">답변 완료 <b>${timedCount}</b></span>`,
        `<span class="chip">남은 문제 <b>${scoped.length - timedCount}</b></span>`,
      ].join("")
      : [
        `<span class="chip">${esc(scopeTitle)} <b>${t.total}</b>문제</span>`,
        `<span class="chip">푼 문제 <b>${t.solved}</b></span>`,
        `<span class="chip good">정답 <b>${t.ok}</b></span>`,
        `<span class="chip bad">오답 <b>${t.bad}</b></span>`,
        `<span class="chip">정답률 <b>${t.rate}%</b></span>`,
        t.marked ? `<span class="chip">북마크 <b>${t.marked}</b></span>` : "",
      ].join("");

    $("#timedExamBar").hidden = !timed;
    const conflict = timed && S.examSession.conflict;
    $("#examConflict").hidden = !conflict;
    if (conflict) {
      $("#examConflictText").textContent = conflict === "GONE"
        ? "다른 탭이나 기기에서 이 시험을 제출했거나 처음부터 다시 시작했어요. 이 화면은 저장을 멈췄어요."
        : "다른 탭이나 기기에서 이 시험을 이어서 풀고 있어요. 덮어쓰지 않도록 이 화면은 저장을 멈췄어요.";
    }
    if (timed) {
      $("#examAnswered").textContent = `${timedCount} / ${scoped.length} 답변`;
      $("#examFinishHint").textContent = timedCount === scoped.length
        ? "모든 답변이 준비되었습니다."
        : `모든 문제에 답하면 제출할 수 있습니다. ${scoped.length - timedCount}문제 남음`;
      if (conflict) stopExamClock(); else ensureExamClock();
      // 문제를 옮기면 위치도 저장 (이어 풀 때 그 문제부터)
      if (!conflict && S.examSession.lastIdx !== S.idx) { S.examSession.lastIdx = S.idx; persistExamSession(); }
    } else stopExamClock();

    const tags = [...new Set(scoped.flatMap((q) => q.tags || []))].sort();
    $("#tagSel").innerHTML = `<option value="">모든 태그</option>` +
      tags.map((x) => `<option value="${esc(x)}"${S.tag === x ? " selected" : ""}>${esc(x)}</option>`).join("");

    const empty = S.work.length === 0;
    $("#empty").hidden = !empty;
    $("#qnavToggle").hidden = empty;
    $("#pager").hidden = empty;
    $(".keyhint").hidden = empty;
    if (empty) { $("#list").innerHTML = ""; setQuestionDrawer(false); return; }

    if (S.idx > S.work.length - 1) S.idx = S.work.length - 1;
    const q = byId(S.work[S.idx]);
    $("#list").innerHTML = card(q);
    if (isExam && !timed) localStorage.setItem(posKey(e.id), String(S.idx));

    $("#qnavPosition").textContent = `${S.idx + 1}/${S.work.length}`;
    $("#qnavSummary").textContent = timed
      ? `${scopeTitle} · 답변 ${timedCount}/${S.work.length}`
      : `${scopeTitle} · ${S.work.length}문제 중 ${S.idx + 1}번째`;
    $("#qnavLegend").innerHTML = timed
      ? `<span><i class="idle"></i>미답변</span><span><i class="answered"></i>답변 완료</span><span>★ 북마크</span>`
      : `<span><i class="idle"></i>미풀이</span><span><i class="ok"></i>정답</span><span><i class="bad"></i>오답</span><span>★ 북마크</span>`;
    const navGroups = [];
    S.work.forEach((id, i) => {
      const item = byId(id);
      const groupId = isExam ? e.id : (item.sourceExamId || item.examId);
      const last = navGroups[navGroups.length - 1];
      if (!last || last.examId !== groupId) {
        const itemExam = isExam ? e : sourceExamOf(groupId);
        navGroups.push({ examId: groupId, title: itemExam ? itemExam.title : groupId, items: [] });
      }
      navGroups[navGroups.length - 1].items.push({ id, i, q: item });
    });
    $("#qnav").innerHTML = navGroups.map((group) => `<section class="qnav-group">
      <h4 class="qnav-group-title"><b>${esc(group.title)}</b><span>${group.items.length}문제</span></h4>
      <div class="qnav-grid">${group.items.map(({ id, i, q: item }) => {
        const r = rec(id);
        const cls = ["qn", i === S.idx ? "cur" : "", timed ? (timedAnswered(id) ? "answered" : "") : (r.correct === true ? "ok" : r.correct === false ? "bad" : ""), r.bookmarked ? "star" : ""].join(" ");
        const shownNumber = isExam ? i + 1 : item.number;
        return `<button class="${cls}" data-jump="${i}" aria-label="${shownNumber}번 문제">${shownNumber}</button>`;
      }).join("")}</div>
    </section>`).join("");

    $("#pager").innerHTML = `
      <button class="ghost" data-move="-1" ${S.idx === 0 ? "disabled" : ""}>← 이전</button>
      <span class="count">${S.idx + 1} / ${S.work.length}</span>
      <button class="${timed ? (timedAnswered(q.id) ? "primary" : "ghost") : (answered(q.id) ? "primary" : "ghost")}" data-move="1" ${S.idx >= S.work.length - 1 ? "disabled" : ""}>다음 →</button>`;
    $("#keyhint").innerHTML = timed
      ? `키보드: <kbd>A</kbd>~<kbd>D</kbd> 또는 <kbd>1</kbd>~<kbd>4</kbd> 선택 · <kbd>Enter</kbd> 다음 · <kbd>←</kbd><kbd>→</kbd> 이동`
      : `키보드: <kbd>A</kbd>~<kbd>D</kbd> 또는 <kbd>1</kbd>~<kbd>4</kbd> 선택 · <kbd>Enter</kbd> 확인/다음 · <kbd>←</kbd><kbd>→</kbd> 이동`;
  }

  function render() {
    $("#home").hidden = S.view !== "home";
    $("#detail").hidden = S.view !== "detail";
    $("#report").hidden = S.view !== "report";
    $("#exam").hidden = S.view !== "solve";
    $("#admin").hidden = S.view !== "admin";
    $("#review").hidden = S.view !== "review";
    $("#workbook").hidden = S.view !== "workbook";
    $("#workbookDay").hidden = S.view !== "workbookDay";
    $("#controls").hidden = S.view !== "solve" || isTimedExam();
    const isWorkbook = S.view === "workbook" || S.view === "workbookDay";
    $("#quizTab").classList.toggle("on", !isWorkbook);
    $("#workbookTab").classList.toggle("on", isWorkbook);
    if (S.view !== "solve") { setQuestionDrawer(false); stopExamClock(); }
    if (S.view !== "workbookDay" && $("#studyReturnBar")) $("#studyReturnBar").remove();
    if (S.view === "home") renderHome();
    else if (S.view === "detail") renderDetail();
    else if (S.view === "report") renderReport();
    else if (S.view === "admin") renderAdmin();
    else if (S.view === "review") renderReview();
    else if (S.view === "workbook") renderWorkbook();
    else if (S.view === "workbookDay") renderWorkbookDay();
    else renderSolve();
    requestAnimationFrame(syncStickyHeaderHeight);
    if (S.view === "workbookDay") requestAnimationFrame(focusStudyTopic);
    if (S.view === "report" && S.reportFocus) requestAnimationFrame(focusReportQuestion);
  }

  function syncStickyHeaderHeight() {
    const header = $(".top");
    if (!header) return;
    document.documentElement.style.setProperty("--sticky-header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
    scheduleStudyTocSync();
  }

  let studyTocFrame = null;
  const mobileHeaderQuery = matchMedia("(max-width:650px)");
  let headerScrollAnchor = Math.max(0, scrollY);
  let headerScrollFrame = null;
  function syncMobileHeader() {
    if (headerScrollFrame !== null) return;
    headerScrollFrame = requestAnimationFrame(() => {
      const y = Math.max(0, scrollY);
      const header = $(".top");
      const delta = y - headerScrollAnchor;
      const reset = !mobileHeaderQuery.matches || y < 80;
      const changedDirection = Math.abs(delta) >= 12;
      if (reset || changedDirection) {
        header.classList.toggle("mobile-tabs-hidden", !reset && y > 180 && delta > 0);
        syncStickyHeaderHeight();
        // Hiding the tabs changes header height; use the resulting scroll position
        // as the next baseline so layout anchoring cannot reveal them again.
        requestAnimationFrame(() => {
          headerScrollAnchor = Math.max(0, scrollY);
          headerScrollFrame = null;
        });
      } else headerScrollFrame = null;
    });
  }
  addEventListener("scroll", syncMobileHeader, { passive: true });
  addEventListener("resize", syncMobileHeader);
  function scheduleStudyTocSync() {
    if (studyTocFrame !== null) return;
    studyTocFrame = requestAnimationFrame(() => {
      studyTocFrame = null;
      if (S.view !== "workbookDay") return;
      const topics = [...document.querySelectorAll("#workbookLessons .study-topic")];
      const readingLine = $(".top").getBoundingClientRect().bottom + 76;
      let activeId = "";
      for (const topic of topics) {
        if (topic.getBoundingClientRect().top <= readingLine) activeId = topic.id;
      }
      document.querySelectorAll(".study-toc [data-study-target]").forEach((link) => {
        const active = link.dataset.studyTarget === activeId;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }
  addEventListener("scroll", scheduleStudyTocSync, { passive: true });
  addEventListener("resize", scheduleStudyTocSync);
  new MutationObserver(scheduleStudyTocSync).observe($("#workbookLessons"), { childList: true, subtree: true });
  $("#workbookLessons").addEventListener("click", (event) => {
    const link = event.target.closest("a[data-study-target]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const topic = document.getElementById(link.dataset.studyTarget);
    if (!topic) return;
    event.preventDefault();
    if (matchMedia("(max-width:650px)").matches) $(".study-toc-disclosure").open = false;
    unfoldStudySection(topic);
    syncStickyHeaderHeight();
    topic.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });

  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(syncStickyHeaderHeight).observe($(".top"));
  } else {
    addEventListener("resize", syncStickyHeaderHeight);
  }

  function move(delta) {
    const next = S.idx + delta;
    if (next < 0 || next >= S.work.length) return;
    S.idx = next;
    renderSolve();
    scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- routing ---------------- */
  //  #/practice                유형별 연습
  //  #/exams                   실전 시험 세트
  //  #/mock1                   실전 시험 시작 전 화면
  //  #/mock1/exam              메모리에 진행 중인 실전 시험
  //  #/mock1/report            가장 최근 완료한 시험의 결과 리포트
  //  #/mock1/report/<회차>     그 회차(1 = 첫 응시) 결과 리포트
  //  #/category/<유형>         해당 유형 전체 문제
  //  #/tag/<태그>              푼 문제 중 그 분류만
  //  #/workbook[/day/<번호>]   순서별 학습 워크북
  //  #/workbook/day/<번호>/topic/<컨셉>  해당 컨셉 위치로 스크롤
  function readHash() {
    const h = decodeURIComponent((location.hash || "#/").replace(/^#\/?/, ""));
    const parts = h.split("/").filter(Boolean);
    S.filter = "all"; S.tag = ""; S.search = ""; $("#search").value = "";
    const keepsExamSession = !!(S.examSession && parts[0] === S.examSession.examId && parts[1] === "exam");
    if (S.examSession && !keepsExamSession) suspendExamSession();

    if (parts[0] !== "workbook" && !(parts[1] === "report")) S.studyReturn = null;
    if (parts[0] === "workbook") {
      S.scope = null;
      if (parts[1] === "day" && /^\d+$/.test(parts[2] || "")) {
        S.workbookDay = Number(parts[2]);
        S.view = S.workbookDay >= 1 && S.workbookDay <= STUDY_DAYS.length ? "workbookDay" : "workbook";
        S.workbookTopic = parts[3] === "topic" && /^\d+$/.test(parts[4] || "") ? Number(parts[4]) : 0;
      } else S.view = "workbook";
      return;
    }
    if (parts[0] === "admin" && parts[1] === "review" && parts[2]) {
      S.scope = null;
      S.rv = { set: parts[2], pos: /^\d+$/.test(parts[3] || "") ? Number(parts[3]) : 0 };
      S.view = Store.user && Store.user.isAdmin ? "review" : "home";
      return;
    }
    if (parts[0] === "admin") {
      S.scope = null;
      S.view = Store.user && Store.user.isAdmin ? "admin" : "home";
      return;
    }
    if (isAdmin()) {
      if (parts.length) history.replaceState(null, "", "#/admin");
      S.scope = null; S.view = "admin";
      return;
    }
    if (parts[0] === "tag" && parts[1]) {
      S.homeMode = "practice";
      S.scope = { type: "tag", tag: parts.slice(1).join("/") };
      S.view = "solve"; rebuild(false); return;
    }
    if (parts[0] === "category" && parts[1] && categoryOf(parts[1])) {
      S.homeMode = "practice";
      S.scope = { type: "category", id: parts[1] };
      S.view = "solve"; rebuild(false); return;
    }
    if (parts[0] && examOf(parts[0])) {
      S.homeMode = "exams";
      S.scope = { type: "exam", id: parts[0] };
      if (parts[1] === "report") {
        if (latestAttempt(parts[0])) {
          const n = /^\d+$/.test(parts[2] || "") ? Number(parts[2]) : 0;
          S.reportAttempt = n;
          S.view = "report"; return;
        }
        history.replaceState(null, "", "#/" + parts[0]);
        S.view = "detail"; return;
      }
      if (parts[1] === "exam" && keepsExamSession) {
        S.view = "solve";
        rebuild(false);
        if (S.resumeIdx !== null) { S.idx = Math.min(Math.max(0, S.resumeIdx), Math.max(0, S.work.length - 1)); S.resumeIdx = null; }
        S.restart = false;
      } else {
        if (parts[1] === "exam") history.replaceState(null, "", "#/" + parts[0]);
        S.view = "detail";
      }
      return;
    }
    S.homeMode = parts[0] === "exams" ? "exams" : "practice";
    S.scope = null; S.view = "home";
  }
  let acceptedHash = location.hash || "#/";
  addEventListener("hashchange", () => {
    const nextHash = location.hash || "#/";
    if (isLeavingTimedExam(nextHash)) suspendExamSession();
    acceptedHash = nextHash;
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === "all"));
    readHash();
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === S.filter));
    render(); scrollTo({ top: 0 });
  });
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href^="#/"]');
    if (!link || !isLeavingTimedExam(link.hash)) return;
    e.preventDefault();
    suspendExamSession();
    acceptedHash = link.hash;
    location.hash = link.hash;
  }, true);
  // 창을 닫거나 새로고침해도 진행 상황 유지
  addEventListener("pagehide", () => { if (isTimedExam()) persistExamSession(); Store.flushState(); });
  document.addEventListener("visibilitychange", async () => {
    if (document.hidden) { if (isTimedExam()) persistExamSession(); Store.flushState(); return; }
    // 돌아오면 다른 기기에서 바뀐 내용 반영 (시험 중에는 화면을 건드리지 않는다)
    // 시험 화면으로 돌아오면 바로 한 번 저장해 본다 → 다른 곳이 주인이면 즉시 멈춤 표시
    if (isTimedExam()) { if (!S.examSession.conflict) { S.examSession.lastPersist = Date.now(); Store.savePauseNow(S.examSession.examId, pauseEntry()); } return; }
    if (!Store.user) return;
    try { if (await Store.refreshState()) { applyAccountState(); render(); } } catch (_) {}
  });
  $("#dActions").addEventListener("click", (e) => {
    const resume = e.target.closest("button[data-resume-exam]");
    if (resume) { resumeTimedExam(resume.dataset.resumeExam); return; }
    const button = e.target.closest("button[data-start-exam]");
    if (button) startTimedExam(button.dataset.startExam);
  });
  $("#finishExam").addEventListener("click", finishTimedExam);
  $("#pauseExam").addEventListener("click", pauseTimedExam);
  // 충돌: 최신 상태(서버)로 다시 불러오기
  $("#conflictReload").addEventListener("click", async () => {
    if (!S.examSession) return;
    const id = S.examSession.examId;
    discardExamSession();
    try { await Store.refreshState(); } catch (_) {}
    applyAccountState();
    acceptedHash = "#/" + id;
    location.hash = "#/" + id;
  });
  // 충돌: 이 화면 기준으로 계속 (다른 곳의 진행은 이 화면 내용으로 바뀐다)
  $("#conflictTakeover").addEventListener("click", () => {
    const s = S.examSession;
    if (!s || !s.conflict) return;
    if (!confirm("다른 곳에서 진행한 내용은 이 화면 기준으로 덮어써져요. 여기서 계속 풀까요?")) return;
    s.conflict = null;
    s.sid = newSid();
    s.takeover = true;
    s.resumedAt = Date.now();
    persistExamSession();
    renderSolve();
  });

  /* ---------------- interactions ---------------- */
  $("#list").addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const q = byId(btn.dataset.q);
    if (!q) return;
    const act = btn.dataset.act;

    if (act === "pick") {
      const timed = isTimedExam();
      if (!timed && !Store.user) { openAuth("기록을 저장하려면 먼저 닉네임으로 로그인해 주세요."); return; }
      const need = (q.answer || []).length, k = btn.dataset.k;
      const cur = timed ? timedChoice(q.id) : (S.sel[q.id] || []);
      const next = need === 1
        ? (cur[0] === k ? [] : [k])
        : (cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k).slice(-need));
      if (timed && S.examSession.conflict) return;
      if (timed) { S.examSession.answers[q.id] = next; persistExamSession(); }
      else S.sel[q.id] = next;
      renderSolve();
    } else if (act === "submit") {
      if (isTimedExam()) return;
      const choice = (S.sel[q.id] || []).slice();
      if (choice.length !== (q.answer || []).length) return;
      const a = (q.answer || []).slice().sort().join(",");
      await Store.set(q.id, { choice, correct: a === choice.slice().sort().join(",") });
      renderSolve();
    } else if (act === "reveal") {
      S.reveal[q.id] = !S.reveal[q.id];
      renderSolve();
    } else if (act === "reset") {
      S.sel[q.id] = []; S.reveal[q.id] = false;
      await Store.set(q.id, { choice: null, correct: null });
      renderSolve();
    } else if (act === "mark") {
      if (!Store.user) { openAuth("북마크를 저장하려면 먼저 로그인해 주세요."); return; }
      await Store.set(q.id, { bookmarked: !rec(q.id).bookmarked });
      renderSolve();
    }
  });

  $("#qnav").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-jump]"); if (!b) return;
    S.idx = Number(b.dataset.jump); renderSolve(); setQuestionDrawer(false); scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#qnavToggle").addEventListener("click", () => setQuestionDrawer(!$("#questionDrawer").classList.contains("open")));
  $("#qnavClose").addEventListener("click", () => setQuestionDrawer(false));
  $("#qnavBackdrop").addEventListener("click", () => setQuestionDrawer(false));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#questionDrawer").classList.contains("open")) setQuestionDrawer(false);
  });

  $("#workbookLessons").addEventListener("click", (e) => {
    const pick = e.target.closest("button[data-study-pick]");
    const submit = e.target.closest("button[data-study-submit]");
    const button = pick || submit;
    if (!button || isAdmin()) return;
    const day = STUDY_DAYS[S.workbookDay - 1];
    const question = byId(button.dataset.studyQuestion);
    const lessonIndex = Number(button.dataset.studyLesson);
    if (!day || !question || !Number.isInteger(lessonIndex)) return;
    const key = studyAnswerKey(day, lessonIndex, question.id);
    if (studyAnswers[key]) return;

    if (pick) {
      const needed = (question.answer || []).length;
      const choice = pick.dataset.studyChoice;
      const current = studySelections[key] || [];
      studySelections[key] = needed === 1
        ? (current[0] === choice ? [] : [choice])
        : (current.includes(choice) ? current.filter((value) => value !== choice) : current.concat(choice).slice(-needed));
      renderWorkbookDay();
      return;
    }

    const choice = (studySelections[key] || []).slice();
    if (choice.length !== (question.answer || []).length) return;
    studyAnswers[key] = { choice, answeredAt: Date.now() };
    delete studySelections[key];
    saveStudyAnswers();
    renderWorkbookDay();
  });
  $("#workbookLessons").addEventListener("click", (e) => {
    const readBtn = e.target.closest("[data-study-read]");
    const doneBtn = e.target.closest("[data-study-read-done]");
    const head = e.target.closest("[data-study-fold-head]");
    if (readBtn) {
      const key = readBtn.dataset.studyRead;
      if (studyRead[key]) delete studyRead[key];
      else { studyRead[key] = Date.now(); studyFold[key] = true; }
      saveStudyRead();
      keepSectionInView(applyStudyFold(key));
      return;
    }
    if (doneBtn) {
      const key = doneBtn.dataset.studyReadDone;
      if (!studyRead[key]) { studyRead[key] = Date.now(); saveStudyRead(); }
      studyFold[key] = true;
      keepSectionInView(applyStudyFold(key));
      return;
    }
    if (head && !e.target.closest("a, .study-auto-status")) {
      const sec = head.closest(".study-fold");
      const key = sec && sec.dataset.foldKey;
      if (!key) return;
      if (getSelection && String(getSelection()).length) return; // 제목 드래그 선택 시 토글하지 않음
      studyFold[key] = !isStudyFolded(key);
      applyStudyFold(key);
    }
  });
  $("#workbookDaySummary").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-study-fold-all]");
    const day = STUDY_DAYS[S.workbookDay - 1];
    if (!btn || !day) return;
    const mode = btn.dataset.studyFoldAll;
    studyReadKeys(day).forEach((key) => {
      studyFold[key] = mode === "close" ? true : mode === "open" ? false : !!studyRead[key];
      applyStudyFold(key);
    });
  });
  $("#workbookReset").addEventListener("click", () => {
    if (!confirm("워크북 학습 진도를 모두 초기화할까요?")) return;
    studyRead = {}; saveStudyRead();
    Object.keys(studyFold).forEach((key) => delete studyFold[key]);
    studyAnswers = {};
    Object.keys(studySelections).forEach((key) => delete studySelections[key]);
    saveStudyAnswers();
    renderWorkbook();
  });
  $("#pager").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-move]"); if (!b) return;
    move(Number(b.dataset.move));
  });

  addEventListener("keydown", (e) => {
    if (S.view !== "solve" || !S.work.length) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea" || $("#authDlg").open) return;
    const q = byId(S.work[S.idx]); if (!q) return;

    if (e.key === "ArrowRight") { move(1); return; }
    if (e.key === "ArrowLeft") { move(-1); return; }
    if (e.key === "Enter") {
      e.preventDefault();
      if (isTimedExam()) {
        if (timedAnswered(q.id)) move(1);
        return;
      }
      if (!answered(q.id)) { const b = $('#list button[data-act="submit"]'); if (b && !b.disabled) b.click(); }
      else move(1);
      return;
    }
    const keys = (q.options || []).map((o) => o.k);
    let k = null;
    const up = e.key.toUpperCase();
    if (keys.includes(up)) k = up;
    else if (/^[1-9]$/.test(e.key)) k = keys[Number(e.key) - 1];
    if (k && (isTimedExam() || !answered(q.id))) {
      const btn = $(`#list button[data-act="pick"][data-k="${k}"]`);
      if (btn) btn.click();
    }
  });

  $("#langSeg").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]"); if (!b) return;
    S.lang = b.dataset.lang; localStorage.setItem("saa.lang", S.lang);
    [...$("#langSeg").children].forEach((x) => x.classList.toggle("on", x === b));
    render();
  });
  $("#filterSeg").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-filter]"); if (!b) return;
    S.filter = b.dataset.filter;
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x === b));
    rebuild(false); renderSolve();
  });
  $("#tagSel").addEventListener("change", (e) => { S.tag = e.target.value; rebuild(false); renderSolve(); });
  let t0; $("#search").addEventListener("input", (e) => {
    clearTimeout(t0); t0 = setTimeout(() => { S.search = e.target.value; rebuild(false); renderSolve(); }, 150);
  });

  /* ---------------- auth ---------------- */
  const dlg = $("#authDlg");
  function openAuth(msg) {
    $("#authErr").hidden = !msg; $("#authErr").textContent = msg || "";
    if (!dlg.open) dlg.showModal();
    $("#nick").focus();
  }
  $("#authClose").addEventListener("click", () => dlg.close());
  $("#authBtn").addEventListener("click", async () => {
    if (Store.user) {
      const message = Store.user.nickname + " 님, 로그아웃할까요?" + (isTimedExam() ? "\n진행 중인 시험은 일시정지 상태로 저장됩니다." : "");
      if (confirm(message)) {
        const pausedExamId = isTimedExam() ? S.examSession.examId : null;
        if (pausedExamId) suspendExamSession();
        await Store.signOut(); applyAccountState(); S.board = null; S.adm = null; S.admPerson = null; syncAuthUI();
        if (S.view === "admin" || S.view === "review") { location.hash = "#/"; return; }
        if (pausedExamId) { acceptedHash = "#/exams"; location.hash = "#/exams"; return; }
        if (S.view === "solve") rebuild(true);
        render();
      }
    } else openAuth();
  });
  async function submitAuth(kind) {
    const nick = $("#nick").value.trim(), pin = $("#pin").value, err = $("#authErr");
    err.hidden = true;
    if (!/^[A-Za-z0-9._-]{2,20}$/.test(nick)) { err.hidden = false; err.textContent = "닉네임은 영문·숫자·._- 로 2~20자."; return; }
    if (pin.length < 6) { err.hidden = false; err.textContent = "PIN은 6자 이상이어야 해요."; return; }
    try {
      await (kind === "up" ? Store.signUp(nick, pin) : Store.signIn(nick, pin));
      dlg.close(); $("#pin").value = "";
      applyAccountState();
      S.board = null; S.adm = null; syncAuthUI();
      if (S.view === "solve") rebuild(true);
      if (isAdmin() || (location.hash || "").startsWith("#/admin")) readHash();
      render();
    } catch (e2) { err.hidden = false; err.textContent = e2.message || String(e2); }
  }
  $("#doSignIn").addEventListener("click", () => submitAuth("in"));
  $("#doSignUp").addEventListener("click", () => submitAuth("up"));
  $("#authForm").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); submitAuth("in"); } });

  function syncAuthUI() {
    const b = $("#authBtn");
    if (Store.user) { b.textContent = Store.user.nickname; b.className = "ghost"; }
    else { b.textContent = "로그인"; b.className = "primary"; }
    $("#adminBtn").hidden = true; // 관리자는 상단 탭이 "관리자"로 바뀐다
    const qt = $("#quizTab");
    qt.textContent = isAdmin() ? "관리자" : "문제 풀이";
    qt.setAttribute("href", isAdmin() ? "#/admin" : "#/practice");
    const n = $("#notice");
    if (Store.mode === "local") {
      n.hidden = false;
      n.innerHTML = "지금은 <b>이 브라우저에만 저장</b>되는 모드예요. <code>assets/config.js</code> 에 Supabase 값을 넣으면 기기와 상관없이 기록이 이어집니다.";
    } else if (!Store.user) {
      n.hidden = false;
      n.innerHTML = "닉네임 + PIN으로 로그인하면 내 기록이 저장되고, 같이 푸는 사람들의 진행 상황도 볼 수 있어요.";
    } else n.hidden = true;
    $("#modeTag").textContent = Store.mode === "supabase" ? "기록: 서버 저장" : "기록: 이 브라우저";
  }

  /* ---------------- init ---------------- */
  (async function init() {
    [...$("#langSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.lang === S.lang));
    try { await Store.restore(); } catch (e) { console.warn(e); }
    applyAccountState();
    syncAuthUI();
    readHash();
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === S.filter));
    render();
  })();
})();
