(function () {
  const EXAMS = (window.SAA_EXAMS || []).map((e) => ({
    id: e.id, title: e.title, note: e.note || "",
    questions: (e.questions || []).map((q) => Object.assign({ examId: e.id }, q)),
  }));
  const ALL = EXAMS.flatMap((e) => e.questions);
  const byId = (id) => ALL.find((q) => q.id === id);
  const examOf = (id) => EXAMS.find((e) => e.id === id);

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
  };

  const txt = (o) => (!o ? "" : S.lang === "ko" ? (o.ko || o.en || "") : (o.en || o.ko || ""));
  const rec = (id) => Store.records[id] || {};
  const answered = (id) => Array.isArray(rec(id).choice) && rec(id).choice.length > 0;
  const posKey = (id) => "saa.pos." + id;

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

  /* ---------------- 분류(태그)별 성적 ---------------- */
  /* ---------------- 분류(태그) 그룹 ---------------- */
  const TAG_EXCLUDE = new Set(["Choose two"]);
  const TAG_GROUPS = [
    { name: "스토리지", tags: ["S3", "S3 Lifecycle", "S3 Storage Class", "S3 Versioning", "MFA Delete", "Glacier", "EBS", "EFS", "Instance Store", "Storage Gateway", "Snowball", "Snapshot", "Durability"] },
    { name: "네트워킹 · 콘텐츠 전송", tags: ["VPC", "VPC Endpoint", "NAT Gateway", "CloudFront", "Route 53", "Global Accelerator", "Gateway Load Balancer", "Direct Connect", "NLB", "Data Transfer", "Latency", "Hybrid"] },
    { name: "컴퓨팅", tags: ["EC2", "Auto Scaling", "Lambda", "Serverless", "Capacity Reservation", "Scaling", "Performance", "Static Website"] },
    { name: "데이터베이스", tags: ["RDS", "Aurora", "DynamoDB"] },
    { name: "보안 · 자격 증명", tags: ["IAM", "Security", "KMS", "Secrets Manager", "Shield Advanced", "DDoS", "Network Firewall", "Macie", "PII", "Least Privilege", "Organizations", "Active Directory", "SSO", "IAM Identity Center"] },
    { name: "애플리케이션 통합", tags: ["SQS", "SQS FIFO", "SNS", "Decoupling", "API Gateway", "AppFlow", "SaaS"] },
    { name: "분석", tags: ["Athena", "Analytics", "QuickSight", "Kinesis Data Streams", "Kinesis Data Firehose", "Ingestion"] },
    { name: "관리 · 비용", tags: ["AWS Config", "CloudTrail", "CloudWatch", "Systems Manager", "Session Manager", "Run Command", "Patching", "Compliance", "Audit", "Tagging", "Cost", "Cost Explorer", "Billing", "Migration", "Multi-Region", "High Availability"] },
  ];
  const GROUP_OF = (() => {
    const m = {};
    TAG_GROUPS.forEach((g) => g.tags.forEach((t) => { m[t] = g.name; }));
    return m;
  })();

  function tagStats(list) {
    const map = {};
    list.forEach((q) => {
      if (!answered(q.id)) return;                 // 푼 문제만 집계
      const r = rec(q.id);
      (q.tags || []).filter((t) => !TAG_EXCLUDE.has(t)).forEach((t) => {
        const m = (map[t] = map[t] || { tag: t, solved: 0, ok: 0, ids: [] });
        m.solved++; if (r.correct) m.ok++; m.ids.push(q.id);
      });
    });
    return Object.values(map).map((m) => Object.assign(m, {
      bad: m.solved - m.ok,
      rate: m.solved ? Math.round((m.ok / m.solved) * 100) : 0,
    })).sort((a, b) => b.bad - a.bad || a.rate - b.rate || b.solved - a.solved);
  }

  function tagCard(m, href) {
    const cls = m.rate >= 80 ? "good" : m.rate >= 50 ? "mid" : "poor";
    return `<a class="exam-card tag-card" href="${href}">
      <div class="ec-head"><h3>${esc(m.tag)}</h3><span class="badge ${m.bad ? "bad" : "ok"}">${m.rate}%</span></div>
      <p class="ec-count">${m.solved}문제 풀이</p>
      <div class="bar"><span class="${cls}" style="width:${m.rate}%"></span></div>
      <p class="ec-meta">
        <span>정답 ${m.ok}</span>
        ${m.bad ? `<span class="dot">·</span><span class="warn-t">오답 ${m.bad}</span>` : ""}
      </p>
    </a>`;
  }

  function tagGroups(stats, scopeHref) {
    if (!stats.length) return "";
    const buckets = new Map();
    stats.forEach((m) => {
      const g = GROUP_OF[m.tag] || "기타";
      if (!buckets.has(g)) buckets.set(g, []);
      buckets.get(g).push(m);
    });
    const order = TAG_GROUPS.map((g) => g.name).concat("기타");
    return order.filter((g) => buckets.has(g)).map((g) => {
      const rows = buckets.get(g);
      const solved = rows.reduce((a, m) => a + m.solved, 0);
      const ok = rows.reduce((a, m) => a + m.ok, 0);
      const bad = solved - ok;
      return `<section class="taggroup">
        <div class="tg-head">
          <h4>${esc(g)}</h4>
          <span class="muted">${rows.length}개 분류 · 정답 ${ok} / ${solved}${bad ? " · 오답 " + bad : ""}</span>
        </div>
        <div class="exams">${rows.map((m) => tagCard(m, scopeHref(m.tag))).join("")}</div>
      </section>`;
    }).join("");
  }

  /* ---------------- 세트 목록 ---------------- */
  function renderHome() {
    $("#exams").innerHTML = EXAMS.map((e) => {
      const t = tally(e.questions);
      const pct = t.total ? Math.round((t.solved / t.total) * 100) : 0;
      return `<a class="exam-card" href="#/${e.id}">
        <div class="ec-head"><h3>${esc(e.title)}</h3>${e.note ? `<span class="badge">${esc(e.note)}</span>` : ""}</div>
        <p class="ec-count">${t.total}문제</p>
        <div class="bar"><span style="width:${pct}%"></span></div>
        <p class="ec-meta">
          <span>${t.solved} / ${t.total} 풀이</span>
          ${t.solved ? `<span class="dot">·</span><span>정답률 ${t.rate}%</span>` : ""}
          ${t.bad ? `<span class="dot">·</span><span class="warn-t">오답 ${t.bad}</span>` : ""}
        </p>
      </a>`;
    }).join("") || `<p class="empty">아직 문제 세트가 없어요. <code>data/exam1.js</code> 에 문제를 추가해 주세요.</p>`;

    const t = tally(ALL);
    $("#stats").innerHTML = [
      `<span class="chip">세트 <b>${EXAMS.length}</b></span>`,
      `<span class="chip">전체 문제 <b>${t.total}</b></span>`,
      `<span class="chip">푼 문제 <b>${t.solved}</b></span>`,
      t.solved ? `<span class="chip good">정답률 <b>${t.rate}%</b></span>` : "",
      t.bad ? `<span class="chip bad">오답 <b>${t.bad}</b></span>` : "",
    ].join("");

    const stats = tagStats(ALL);
    $("#homeTagsWrap").hidden = !stats.length;
    $("#homeTags").innerHTML = tagGroups(stats, (tg) => "#/tag/" + encodeURIComponent(tg));
  }

  /* ---------------- 세트 상세 ---------------- */
  async function renderDetail() {
    const e = examOf(S.scope.id);
    if (!e) { location.hash = "#/"; return; }
    $("#dTitle").textContent = e.title;
    $("#dNote").textContent = e.note || "";
    $("#dNote").hidden = !e.note;

    const t = tally(e.questions);
    const pct = t.total ? Math.round((t.solved / t.total) * 100) : 0;
    $("#dSolved").textContent = t.solved;
    $("#dTotal").textContent = "/ " + t.total;
    $("#dBar").style.width = pct + "%";
    $("#dMeta").innerHTML = [
      t.solved ? `<span>정답 ${t.ok}</span><span class="dot">·</span><span class="warn-t">오답 ${t.bad}</span><span class="dot">·</span><span>정답률 ${t.rate}%</span>`
               : `<span>아직 푼 문제가 없어요</span>`,
      t.marked ? `<span class="dot">·</span><span>북마크 ${t.marked}</span>` : "",
    ].join("");

    const saved = parseInt(localStorage.getItem(posKey(e.id)) || "0", 10) || 0;
    const unanswered = e.questions.filter((q) => !answered(q.id)).length;
    const base = "#/" + e.id + "/solve/";
    $("#dActions").innerHTML = [
      saved > 0 && t.solved ? `<a class="btn primary" href="${base}all">이어서 풀기 (${saved + 1}번부터)</a>` : "",
      `<a class="btn ${saved > 0 && t.solved ? "" : "primary"}" href="${base}all" data-restart="1">처음부터 풀기</a>`,
      unanswered ? `<a class="btn" href="${base}unanswered">안 푼 문제만 (${unanswered})</a>` : "",
      t.bad ? `<a class="btn warn" href="${base}wrong">틀린 문제만 (${t.bad})</a>` : "",
      t.marked ? `<a class="btn" href="${base}bookmark">북마크만 (${t.marked})</a>` : "",
    ].join("");

    $("#stats").innerHTML = [
      `<span class="chip">${esc(e.title)} <b>${t.total}</b>문제</span>`,
      `<span class="chip">푼 문제 <b>${t.solved}</b></span>`,
      t.solved ? `<span class="chip good">정답 <b>${t.ok}</b></span>` : "",
      t.bad ? `<span class="chip bad">오답 <b>${t.bad}</b></span>` : "",
      t.solved ? `<span class="chip">정답률 <b>${t.rate}%</b></span>` : "",
    ].join("");

    const stats = tagStats(e.questions);
    $("#dTagsWrap").hidden = !stats.length;
    $("#dTags").innerHTML = tagGroups(stats, (tg) => "#/tag/" + encodeURIComponent(tg));

    renderBoard(e);
    if (S.board === null) { await loadBoard(); renderBoard(examOf(S.scope.id)); }
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

  /* ---------------- 풀이 대상 목록 ---------------- */
  function scopeQuestions() {
    if (!S.scope) return [];
    if (S.scope.type === "tag") return ALL.filter((q) => (q.tags || []).includes(S.scope.tag) && answered(q.id));
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

  /* ---------------- 문제 카드 ---------------- */
  function card(q) {
    const r = rec(q.id);
    const done = answered(q.id);
    const open = !!S.reveal[q.id];
    const chosen = r.choice || [];
    const sel = S.sel[q.id] || [];
    const need = (q.answer || []).length;
    const ex = examOf(q.examId);

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
    if (!done) {
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
        <span class="qno">Question #${q.number}</span>
        ${S.scope.type === "tag" && ex ? `<span class="badge">${esc(ex.title)}</span>` : ""}
        ${(q.tags || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
        ${done ? `<span class="badge ${r.correct ? "ok" : "bad"}">${r.correct ? "정답" : "오답"}</span>` : ""}
        <span class="spacer"></span>
        <button class="iconbtn ${r.bookmarked ? "on" : ""}" data-act="mark" data-q="${q.id}" title="북마크">${r.bookmarked ? "★" : "☆"}</button>
      </div>
      <div class="qtext">${esc(txt(q.question))}</div>
      ${need > 1 && !done ? `<p class="multi-hint">정답 ${need}개짜리 문제예요.</p>` : ""}
      <ul class="opts">${opts}</ul>
      ${bottom}
    </article>`;
  }

  function renderSolve() {
    const isTag = S.scope.type === "tag";
    const e = isTag ? null : examOf(S.scope.id);
    if (!isTag && !e) { location.hash = "#/"; return; }

    $("#examTitle").textContent = isTag ? S.scope.tag : e.title;
    $("#examNote").textContent = isTag ? "푼 문제 모아보기" : (e.note || "");
    $("#examNote").hidden = !$("#examNote").textContent;
    $("#solveBack").setAttribute("href", isTag ? "#/" : "#/" + e.id);
    $("#solveBack").textContent = isTag ? "← 세트 목록" : "← " + e.title;

    const scoped = scopeQuestions();
    const t = tally(scoped);
    $("#stats").innerHTML = [
      `<span class="chip">${esc(isTag ? S.scope.tag : e.title)} <b>${t.total}</b>문제</span>`,
      `<span class="chip">푼 문제 <b>${t.solved}</b></span>`,
      `<span class="chip good">정답 <b>${t.ok}</b></span>`,
      `<span class="chip bad">오답 <b>${t.bad}</b></span>`,
      `<span class="chip">정답률 <b>${t.rate}%</b></span>`,
      t.marked ? `<span class="chip">북마크 <b>${t.marked}</b></span>` : "",
    ].join("");

    const tags = [...new Set(scoped.flatMap((q) => q.tags || []))].sort();
    $("#tagSel").innerHTML = `<option value="">모든 태그</option>` +
      tags.map((x) => `<option value="${esc(x)}"${S.tag === x ? " selected" : ""}>${esc(x)}</option>`).join("");

    const empty = S.work.length === 0;
    $("#empty").hidden = !empty;
    $("#qnav").hidden = empty;
    $("#pager").hidden = empty;
    $(".keyhint").hidden = empty;
    if (empty) { $("#list").innerHTML = ""; return; }

    if (S.idx > S.work.length - 1) S.idx = S.work.length - 1;
    const q = byId(S.work[S.idx]);
    $("#list").innerHTML = card(q);
    if (!isTag) localStorage.setItem(posKey(e.id), String(S.idx));

    $("#qnav").innerHTML = S.work.map((id, i) => {
      const r = rec(id);
      const cls = ["qn", i === S.idx ? "cur" : "", r.correct === true ? "ok" : r.correct === false ? "bad" : "", r.bookmarked ? "star" : ""].join(" ");
      return `<button class="${cls}" data-jump="${i}">${byId(id).number}</button>`;
    }).join("");

    $("#pager").innerHTML = `
      <button class="ghost" data-move="-1" ${S.idx === 0 ? "disabled" : ""}>← 이전</button>
      <span class="count">${S.idx + 1} / ${S.work.length}</span>
      <button class="${answered(q.id) ? "primary" : "ghost"}" data-move="1" ${S.idx >= S.work.length - 1 ? "disabled" : ""}>다음 →</button>`;
  }

  function render() {
    $("#home").hidden = S.view !== "home";
    $("#detail").hidden = S.view !== "detail";
    $("#exam").hidden = S.view !== "solve";
    $("#controls").hidden = S.view !== "solve";
    if (S.view === "home") renderHome();
    else if (S.view === "detail") renderDetail();
    else renderSolve();
  }

  function move(delta) {
    const next = S.idx + delta;
    if (next < 0 || next >= S.work.length) return;
    S.idx = next;
    renderSolve();
    scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- routing ---------------- */
  //  #/                        세트 목록
  //  #/exam1                   세트 상세
  //  #/exam1/solve[/filter]    문제 풀이
  //  #/tag/<태그>              푼 문제 중 그 분류만
  function readHash() {
    const h = decodeURIComponent((location.hash || "#/").replace(/^#\/?/, ""));
    const parts = h.split("/").filter(Boolean);
    S.filter = "all"; S.tag = ""; S.search = ""; $("#search").value = "";

    if (parts[0] === "tag" && parts[1]) {
      S.scope = { type: "tag", tag: parts.slice(1).join("/") };
      S.view = "solve"; rebuild(false); return;
    }
    if (parts[0] && examOf(parts[0])) {
      S.scope = { type: "exam", id: parts[0] };
      if (parts[1] === "solve") {
        S.view = "solve";
        if (["all", "unanswered", "wrong", "bookmark"].includes(parts[2])) S.filter = parts[2];
        rebuild(false);
        if (S.filter === "all" && !S.restart) {
          const saved = parseInt(localStorage.getItem(posKey(parts[0])) || "0", 10);
          if (!isNaN(saved) && saved > 0 && saved < S.work.length) S.idx = saved;
        }
        S.restart = false;
      } else S.view = "detail";
      return;
    }
    S.scope = null; S.view = "home";
  }
  addEventListener("hashchange", () => {
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === "all"));
    readHash();
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === S.filter));
    render(); scrollTo({ top: 0 });
  });
  // "처음부터 풀기" 는 저장된 위치를 무시한다
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-restart]");
    if (a) { S.restart = true; localStorage.setItem(posKey(S.scope.id), "0"); }
  });

  /* ---------------- interactions ---------------- */
  $("#list").addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const q = byId(btn.dataset.q);
    if (!q) return;
    const act = btn.dataset.act;

    if (act === "pick") {
      if (!Store.user) { openAuth("기록을 저장하려면 먼저 닉네임으로 로그인해 주세요."); return; }
      const need = (q.answer || []).length, k = btn.dataset.k;
      const cur = S.sel[q.id] || [];
      if (need === 1) S.sel[q.id] = cur[0] === k ? [] : [k];
      else S.sel[q.id] = cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k).slice(-need);
      renderSolve();
    } else if (act === "submit") {
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
    S.idx = Number(b.dataset.jump); renderSolve(); scrollTo({ top: 0, behavior: "smooth" });
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
      if (!answered(q.id)) { const b = $('#list button[data-act="submit"]'); if (b && !b.disabled) b.click(); }
      else move(1);
      return;
    }
    const keys = (q.options || []).map((o) => o.k);
    let k = null;
    const up = e.key.toUpperCase();
    if (keys.includes(up)) k = up;
    else if (/^[1-9]$/.test(e.key)) k = keys[Number(e.key) - 1];
    if (k && !answered(q.id)) {
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
      if (confirm(Store.user.nickname + " 님, 로그아웃할까요?")) {
        await Store.signOut(); S.board = null; syncAuthUI();
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
      S.board = null; syncAuthUI();
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
