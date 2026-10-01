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
    workbookDay: 1,
    homeMode: "practice",        // practice | exams
    examSession: null,            // 완료 전에는 메모리에만 유지
    examTimerId: null,
    reportFilter: "wrong",        // wrong | all
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
  const EXAM_EXIT_MESSAGE = "진행 중인 실전 모의고사는 저장되지 않습니다.\n진짜 나가겠습니까?";
  const latestAttempt = (examId) => Store.latestExamAttempt ? Store.latestExamAttempt(examId) : null;
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
  let studyAnswers;
  try { studyAnswers = JSON.parse(localStorage.getItem(STUDY_PRACTICE_KEY) || "{}"); }
  catch (_) { studyAnswers = {}; }
  const studySelections = {};
  /* 컨셉/전체 설명 '봤어요' 체크(로컬 저장) + 접힘 상태(세션 메모리, 기본값은 읽은 섹션만 접힘) */
  const STUDY_READ_KEY = "saa.study.read";
  let studyRead;
  try { studyRead = JSON.parse(localStorage.getItem(STUDY_READ_KEY) || "{}") || {}; }
  catch (_) { studyRead = {}; }
  const studyFold = {};
  function saveStudyRead() {
    try { localStorage.setItem(STUDY_READ_KEY, JSON.stringify(studyRead)); } catch (_) {}
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
    localStorage.setItem(STUDY_PRACTICE_KEY, JSON.stringify(studyAnswers));
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
  function studyLinksHtml(q, pos) {
    const links = studyMatches(q);
    if (!links.length) return "";
    return `<div class="study-links"><b>관련 워크북</b>${links.map((l) =>
      `<a href="#/workbook/day/${l.day}/topic/${l.lesson}" data-study-link data-q="${q.id}" data-pos="${pos}">
        <span class="sl-day">${l.icon || "📘"} Day ${l.day} · ${esc(l.dayTitle)}</span>
        <span class="sl-topic">${String(l.lesson).padStart(2, "0")} ${esc(l.lessonTitle)} →</span></a>`).join("")}</div>`;
  }
  function focusStudyTopic() {
    const bar = $("#studyReturnBar");
    if (bar) bar.remove();
    if (S.studyReturn) {
      const r = S.studyReturn;
      document.body.insertAdjacentHTML("beforeend",
        `<a id="studyReturnBar" class="study-return" href="${esc(r.hash)}" data-study-return>← 리포트 Question #${r.pos}로 돌아가기</a>`);
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
    const back = ev.target.closest("[data-study-return]");
    if (back && S.studyReturn) { S.reportFocus = S.studyReturn.qid; }
  });
  function practiceCard(q, day, lessonIndex) {
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
      const minutes = Math.round(examDurationSeconds(e.questions.length) / 60);
      const pct = attempt ? Math.round((attempt.correct / attempt.total) * 100) : 0;
      return `<a class="exam-card" href="#/${e.id}">
        <div class="ec-head"><h3>${esc(e.title)}</h3>${e.note ? `<span class="badge">${esc(e.note)}</span>` : ""}</div>
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
      : `<span>아직 완료한 시험이 없어요. 중간에 나간 시험은 여기에 기록되지 않습니다.</span>`;

    $("#dActions").innerHTML = `${attempt ? `<a class="btn primary" href="#/${e.id}/report">결과 리포트 · 틀린 문제 보기</a>` : ""}
      <button class="btn ${attempt ? "" : "primary"}" type="button" data-start-exam="${e.id}">${attempt ? "다시 응시" : "실전 시험 시작"}</button>
      <span class="exam-start-copy">${total}문제 · 제한 시간 ${minutes}분 · 시간 초과 후에도 계속 풀이 가능</span>
      ${domainMixHtml(e, attempt)}
      <p class="exam-detail-format">단일 선택 ${total - multiCount(e)}문항 · 복수 선택 ${multiCount(e)}문항 · 50개 채점 문항과 15개 비채점 문항을 실제 시험에서는 구분할 수 없습니다.</p>`;

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
      try {
        const [rows, users] = await Promise.all([Store.adminRows(), Store.adminUsers()]);
        S.adm = { rows: rows || [], users: users || [] };
      } catch (e) { S.adm = { rows: [], users: [], error: e.message || String(e) }; }
      if (S.view !== "admin") return;
    }
    const rows = S.adm.rows, people = {};
    (S.adm.users || []).forEach((p) => { people[p.nickname] = { nickname: p.nickname, isAdmin: p.is_admin, solved: 0, ok: 0, last: null }; });
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
          return `<tr${S.admPerson === p.nickname ? ' class="me"' : ""}>
            <td><a href="#" class="linky" data-person="${esc(p.nickname)}">${esc(p.nickname)}</a>${p.isAdmin ? ' <span class="badge">관리자</span>' : ""}${me ? " (나)" : ""}</td>
            <td>${p.solved}문제</td>
            <td>정답 ${p.ok}</td>
            <td class="${p.solved - p.ok ? "bad-t" : ""}">오답 ${p.solved - p.ok}</td>
            <td>정답률 ${rate}%</td>
            <td class="muted">${p.last ? new Date(p.last).toLocaleString("ko-KR", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }) : ""}</td>
          </tr>`;
        }).join("") : `<tr><td>아직 기록이 없어요.</td></tr>`);

    // 선택한 사람의 오답 목록
    const pw = $("#admPersonWrap");
    if (S.admPerson) {
      const mine = rows.filter((r) => r.nickname === S.admPerson && r.correct === false);
      $("#admPersonTitle").textContent = S.admPerson + " 님이 틀린 문제 " + mine.length + "개";
      $("#admPerson").innerHTML = mine.length ? `<div class="wrongrows">` + mine.map((r) => {
        const q = byId(r.qid);
        const assignment = q && MOCK_ASSIGNMENT[q.id];
        const ex = assignment && examOf(assignment.examId);
        return `<div class="wrongrow">
          <span class="wr-q">${q ? (ex ? esc(ex.title) + " #" + assignment.position : "원본 #" + q.number) : esc(r.qid)}</span>
          <span class="wr-pick"><b class="bad-t">${(r.choice || []).join(", ") || "-"}</b> 선택</span>
          <span class="wr-ans">정답 <b class="ok-t">${q ? q.answer.join(", ") : "?"}</b></span>
          <span class="wr-tags">${q ? (q.tags || []).slice(0, 3).map((t) => `<span class="badge">${esc(t)}</span>`).join("") : ""}</span>
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
        ${m.wrongBy.length ? `<div class="admq-wrong">틀린 사람: ${m.wrongBy.map((n) => esc(n)).join(", ")}</div>` : ""}
        ${q ? `<div class="admq-text">${esc(txt(q.question)).split("\n")[0].slice(0, 150)}…</div>` : ""}
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
    const elapsed = Math.floor((Date.now() - S.examSession.startedAt) / 1000);
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
  function examRouteHash() {
    return S.examSession ? `#/${S.examSession.examId}/exam` : "";
  }
  function isLeavingTimedExam(nextHash) {
    return isTimedExam() && nextHash !== examRouteHash();
  }
  function confirmExamExit() {
    return !isTimedExam() || confirm(EXAM_EXIT_MESSAGE);
  }
  function startTimedExam(examId) {
    const e = examOf(examId);
    if (!e) return;
    if (!Store.user) { openAuth("실전 시험 완료 기록을 저장하려면 먼저 로그인해 주세요."); return; }
    stopExamClock();
    S.examSession = {
      examId,
      startedAt: Date.now(),
      limitSeconds: examDurationSeconds(e.questions.length),
      answers: {},
    };
    S.sel = {};
    S.reveal = {};
    S.restart = true;
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
    const finishedAt = Date.now();
    const answers = Object.fromEntries(e.questions.map((q) => [q.id, timedChoice(q.id).slice()]));
    const correct = e.questions.filter((q) => {
      const expected = (q.answer || []).slice().sort().join(",");
      return expected === answers[q.id].slice().sort().join(",");
    }).length;
    await Store.saveExamAttempt(e.id, {
      startedAt: S.examSession.startedAt,
      finishedAt,
      elapsedSeconds: Math.floor((finishedAt - S.examSession.startedAt) / 1000),
      limitSeconds: S.examSession.limitSeconds,
      total: e.questions.length,
      correct,
      answers,
    });
    discardExamSession();
    S.reportFilter = correct === e.questions.length ? "all" : "wrong";
    S.reportTag = "";
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
    const attempt = e && latestAttempt(e.id);
    if (!e || !attempt) { location.hash = e ? "#/" + e.id : "#/exams"; return; }
    const items = reportItems(e, attempt);
    const total = items.length;
    const correct = items.filter((x) => x.ok).length;
    const wrong = total - correct;
    const rate = total ? Math.round((correct / total) * 100) : 0;
    const need = Math.max(0, Math.ceil((PASS_RATE / 100) * total) - correct);
    const over = attempt.elapsedSeconds > attempt.limitSeconds;

    $("#rTitle").textContent = e.title;
    $("#rBack").setAttribute("href", "#/" + e.id);
    $("#rBack").textContent = "← " + e.title;
    $("#rHero").innerHTML = `
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
  $("#report").addEventListener("click", (ev) => {
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
    $("#solveBack").textContent = timed ? "← 시험 중단" : isExam ? "← " + e.title : "← 문제 유형";

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
    if (timed) {
      $("#examAnswered").textContent = `${timedCount} / ${scoped.length} 답변`;
      $("#examFinishHint").textContent = timedCount === scoped.length
        ? "모든 답변이 준비되었습니다."
        : `모든 문제에 답하면 제출할 수 있습니다. ${scoped.length - timedCount}문제 남음`;
      ensureExamClock();
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
  //  #/category/<유형>         해당 유형 전체 문제
  //  #/tag/<태그>              푼 문제 중 그 분류만
  //  #/workbook[/day/<번호>]   순서별 학습 워크북
  //  #/workbook/day/<번호>/topic/<컨셉>  해당 컨셉 위치로 스크롤
  function readHash() {
    const h = decodeURIComponent((location.hash || "#/").replace(/^#\/?/, ""));
    const parts = h.split("/").filter(Boolean);
    S.filter = "all"; S.tag = ""; S.search = ""; $("#search").value = "";
    const keepsExamSession = !!(S.examSession && parts[0] === S.examSession.examId && parts[1] === "exam");
    if (S.examSession && !keepsExamSession) discardExamSession();

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
    if (parts[0] === "admin") {
      S.scope = null;
      S.view = Store.user && Store.user.isAdmin ? "admin" : "home";
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
        if (latestAttempt(parts[0])) { S.view = "report"; return; }
        history.replaceState(null, "", "#/" + parts[0]);
        S.view = "detail"; return;
      }
      if (parts[1] === "exam" && keepsExamSession) {
        S.view = "solve";
        rebuild(false);
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
    if (isLeavingTimedExam(nextHash)) {
      if (!confirmExamExit()) {
        history.replaceState(null, "", acceptedHash);
        return;
      }
      discardExamSession();
    }
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
    if (!confirmExamExit()) return;
    discardExamSession();
    acceptedHash = link.hash;
    location.hash = link.hash;
  }, true);
  addEventListener("beforeunload", (e) => {
    if (!isTimedExam()) return;
    e.preventDefault();
    e.returnValue = EXAM_EXIT_MESSAGE;
    return EXAM_EXIT_MESSAGE;
  });
  $("#dActions").addEventListener("click", (e) => {
    const button = e.target.closest("button[data-start-exam]");
    if (button) startTimedExam(button.dataset.startExam);
  });
  $("#finishExam").addEventListener("click", finishTimedExam);

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
      if (timed) S.examSession.answers[q.id] = next;
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
    if (!button) return;
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
      const message = isTimedExam() ? EXAM_EXIT_MESSAGE : Store.user.nickname + " 님, 로그아웃할까요?";
      if (confirm(message)) {
        await Store.signOut(); S.board = null; S.adm = null; S.admPerson = null; syncAuthUI();
        if (S.view === "admin") { location.hash = "#/"; return; }
        if (isTimedExam()) { discardExamSession(); location.hash = "#/exams"; return; }
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
      S.board = null; S.adm = null; syncAuthUI();
      if (S.view === "solve") rebuild(true);
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
    $("#adminBtn").hidden = !(Store.user && Store.user.isAdmin);
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
    syncAuthUI();
    readHash();
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === S.filter));
    render();
  })();
})();
