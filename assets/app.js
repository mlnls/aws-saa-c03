(function () {
  const EXAMS = (window.SAA_EXAMS || []).map((e) => ({
    id: e.id, title: e.title, note: e.note || "",
    questions: (e.questions || []).map((q) => Object.assign({ examId: e.id }, q)),
  }));
  const ALL = EXAMS.flatMap((e) => e.questions);

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = (s) => esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

  const S = {
    lang: localStorage.getItem("saa.lang") || "en",
    filter: "all", tag: "", search: "",
    examId: null,       // null 이면 세트 선택 화면
    pending: {},
  };

  const txt = (o) => (!o ? "" : S.lang === "ko" ? (o.ko || o.en || "") : (o.en || o.ko || ""));
  const rec = (id) => Store.records[id] || {};
  const answered = (id) => Array.isArray(rec(id).choice) && rec(id).choice.length > 0;
  const examOf = (id) => EXAMS.find((e) => e.id === id);

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

  /* ---------------- 세트 선택 화면 ---------------- */
  function renderHome() {
    $("#exams").innerHTML = EXAMS.map((e) => {
      const t = tally(e.questions);
      const pct = t.total ? Math.round((t.solved / t.total) * 100) : 0;
      return `<a class="exam-card" href="#/${e.id}">
        <div class="ec-head">
          <h3>${esc(e.title)}</h3>
          ${e.note ? `<span class="badge">${esc(e.note)}</span>` : ""}
        </div>
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
    loadBoard();
  }

  async function loadBoard() {
    const wrap = $("#boardWrap");
    if (!Store.user || Store.mode !== "supabase") { wrap.hidden = true; return; }
    try {
      const rows = await Store.board();
      const real = (rows || []).filter((r) => !/^__probe_/.test(r.nickname));
      if (!real.length) { wrap.hidden = true; return; }
      $("#boardBody").innerHTML = real.map((r) => {
        const rate = Number(r.solved) ? Math.round((Number(r.correct) / Number(r.solved)) * 100) : 0;
        const me = Store.user && r.nickname === Store.user.nickname;
        return `<tr${me ? ' class="me"' : ""}><td>${esc(r.nickname)}${me ? " (나)" : ""}</td>
          <td>${r.solved}문제</td><td>정답률 ${rate}%</td></tr>`;
      }).join("");
      wrap.hidden = false;
    } catch (e) { wrap.hidden = true; }
  }

  /* ---------------- 문제 화면 ---------------- */
  function visible(list) {
    const s = S.search.trim().toLowerCase();
    return list.filter((q) => {
      const r = rec(q.id);
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
    });
  }

  function card(q) {
    const r = rec(q.id);
    const multi = (q.answer || []).length > 1;
    const done = answered(q.id);
    const chosen = r.choice || [];
    const pend = S.pending[q.id] || [];

    const opts = (q.options || []).map((o) => {
      let c = "opt", mark = "";
      const isAns = (q.answer || []).includes(o.k);
      const isSel = chosen.includes(o.k);
      if (done) {
        if (isAns) { c += " correct"; mark = isSel ? "✓ 정답" : "정답"; }
        else if (isSel) { c += " chosen-bad"; mark = "✗ 내 선택"; }
      } else if (multi && pend.includes(o.k)) c += " correct";
      return `<li><button class="${c}" data-act="pick" data-q="${q.id}" data-k="${o.k}" ${done ? "disabled" : ""}>
        <span class="k">${o.k}.</span><span class="t">${esc(txt(o))}</span>
        ${mark ? `<span class="mark">${mark}</span>` : ""}</button></li>`;
    }).join("");

    const wrongs = q.why_wrong
      ? Object.keys(q.why_wrong).filter((k) => !(q.answer || []).includes(k))
          .map((k) => `<li><b>${k}</b><span>${md(txt(q.why_wrong[k]))}</span></li>`).join("")
      : "";

    const expl = done ? `<div class="expl">
        <h4>정답 ${(q.answer || []).join(", ")} · 해설</h4>
        <p>${md(txt(q.explanation))}</p>
        ${wrongs ? `<ul class="wrongs">${wrongs}</ul>` : ""}
      </div>` : "";

    return `<article class="${done ? (r.correct ? "card done-ok" : "card done-bad") : "card"}" id="q-${q.id}">
      <div class="chead">
        <span class="qno">Question #${q.number}</span>
        ${(q.tags || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
        ${done ? `<span class="badge ${r.correct ? "ok" : "bad"}">${r.correct ? "정답" : "오답"}</span>` : ""}
        <span class="spacer"></span>
        <button class="iconbtn ${r.bookmarked ? "on" : ""}" data-act="mark" data-q="${q.id}" title="북마크">${r.bookmarked ? "★" : "☆"}</button>
      </div>
      <div class="qtext">${esc(txt(q.question))}</div>
      ${multi && !done ? `<p class="multi-hint">정답 ${q.answer.length}개를 고른 뒤 확인을 누르세요.</p>` : ""}
      <ul class="opts">${opts}</ul>
      ${multi && !done ? `<div class="cfoot"><button class="primary" data-act="submit" data-q="${q.id}" ${pend.length === q.answer.length ? "" : "disabled"}>확인</button></div>` : ""}
      ${expl}
      ${done ? `<div class="cfoot"><button class="ghost" data-act="reset" data-q="${q.id}">다시 풀기</button></div>` : ""}
    </article>`;
  }

  function renderExam() {
    const e = examOf(S.examId);
    if (!e) { location.hash = "#/"; return; }
    $("#examTitle").textContent = e.title;
    $("#examNote").textContent = e.note || "";
    $("#examNote").hidden = !e.note;

    const list = visible(e.questions);
    $("#list").innerHTML = list.map(card).join("");
    $("#empty").hidden = list.length > 0;

    const t = tally(e.questions);
    $("#stats").innerHTML = [
      `<span class="chip">${esc(e.title)} <b>${t.total}</b>문제</span>`,
      `<span class="chip">푼 문제 <b>${t.solved}</b></span>`,
      `<span class="chip good">정답 <b>${t.ok}</b></span>`,
      `<span class="chip bad">오답 <b>${t.bad}</b></span>`,
      `<span class="chip">정답률 <b>${t.rate}%</b></span>`,
      t.marked ? `<span class="chip">북마크 <b>${t.marked}</b></span>` : "",
    ].join("");

    const tags = [...new Set(e.questions.flatMap((q) => q.tags || []))].sort();
    const sel = $("#tagSel");
    sel.innerHTML = `<option value="">모든 태그</option>` + tags.map((t2) => `<option value="${esc(t2)}"${S.tag === t2 ? " selected" : ""}>${esc(t2)}</option>`).join("");
  }

  function render() {
    const home = !S.examId;
    $("#home").hidden = !home;
    $("#exam").hidden = home;
    $("#controls").hidden = home;
    if (home) renderHome(); else renderExam();
  }

  /* ---------------- routing ---------------- */
  function readHash() {
    const m = /^#\/([\w.-]+)/.exec(location.hash || "");
    const id = m && m[1];
    S.examId = id && examOf(id) ? id : null;
  }
  addEventListener("hashchange", () => {
    readHash(); S.filter = "all"; S.tag = ""; S.search = "";
    $("#search").value = "";
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === "all"));
    render(); scrollTo({ top: 0 });
  });

  /* ---------------- interactions ---------------- */
  $("#list").addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const q = ALL.find((x) => x.id === btn.dataset.q);
    if (!q) return;

    if (btn.dataset.act === "pick") {
      if (!Store.user) { openAuth("기록을 저장하려면 먼저 닉네임으로 로그인해 주세요."); return; }
      if ((q.answer || []).length > 1) {
        const cur = S.pending[q.id] || [], k = btn.dataset.k;
        S.pending[q.id] = cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k).slice(-q.answer.length);
        render();
      } else await grade(q, [btn.dataset.k]);
    } else if (btn.dataset.act === "submit") {
      await grade(q, (S.pending[q.id] || []).slice());
    } else if (btn.dataset.act === "reset") {
      delete S.pending[q.id];
      await Store.set(q.id, { choice: null, correct: null });
      render();
    } else if (btn.dataset.act === "mark") {
      if (!Store.user) { openAuth("북마크를 저장하려면 먼저 로그인해 주세요."); return; }
      await Store.set(q.id, { bookmarked: !rec(q.id).bookmarked });
      render();
    }
  });

  async function grade(q, choice) {
    const a = (q.answer || []).slice().sort().join(",");
    delete S.pending[q.id];
    await Store.set(q.id, { choice, correct: a === choice.slice().sort().join(",") });
    render();
    const node = document.getElementById("q-" + q.id);
    if (node) node.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

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
    render();
  });
  $("#tagSel").addEventListener("change", (e) => { S.tag = e.target.value; render(); });
  let t0; $("#search").addEventListener("input", (e) => {
    clearTimeout(t0); t0 = setTimeout(() => { S.search = e.target.value; render(); }, 150);
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
      if (confirm(Store.user.nickname + " 님, 로그아웃할까요?")) { await Store.signOut(); syncAuthUI(); render(); }
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
      syncAuthUI(); render();
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
      n.innerHTML = "닉네임 + PIN으로 로그인하면 내가 틀린 문제만 따로 모아 볼 수 있어요.";
    } else n.hidden = true;
    $("#modeTag").textContent = Store.mode === "supabase" ? "기록: 서버 저장" : "기록: 이 브라우저";
  }

  /* ---------------- init ---------------- */
  (async function init() {
    [...$("#langSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.lang === S.lang));
    readHash();
    try { await Store.restore(); } catch (e) { console.warn(e); }
    syncAuthUI();
    render();
  })();
})();
