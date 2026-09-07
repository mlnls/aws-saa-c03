(function () {
  const EXAMS = (window.SAA_EXAMS || []).map((e) => ({
    id: e.id, title: e.title, note: e.note || "",
    questions: (e.questions || []).map((q) => Object.assign({ examId: e.id }, q)),
  }));
  const ALL = EXAMS.flatMap((e) => e.questions);
  const byId = (id) => ALL.find((q) => q.id === id);

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = (s) => esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

  const S = {
    lang: localStorage.getItem("saa.lang") || "en",
    filter: "all", tag: "", search: "",
    examId: null,
    work: [],        // 현재 풀이 대상 문제 id 목록
    idx: 0,          // work 안에서의 위치
    sel: {},         // qid -> 확인 전 선택한 키들
    reveal: {},      // qid -> 정답·해설을 펼쳤는지 (저장 안 함)
  };

  const txt = (o) => (!o ? "" : S.lang === "ko" ? (o.ko || o.en || "") : (o.en || o.ko || ""));
  const rec = (id) => Store.records[id] || {};
  const answered = (id) => Array.isArray(rec(id).choice) && rec(id).choice.length > 0;
  const examOf = (id) => EXAMS.find((e) => e.id === id);
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

  /* ---------------- 세트 선택 화면 ---------------- */
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
        return `<tr${me ? ' class="me"' : ""}><td>${esc(r.nickname)}${me ? " (나)" : ""}</td><td>${r.solved}문제</td><td>정답률 ${rate}%</td></tr>`;
      }).join("");
      wrap.hidden = false;
    } catch (e) { wrap.hidden = true; }
  }

  /* ---------------- 풀이 대상 목록 ---------------- */
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
  function rebuild(keepIdx) {
    const e = examOf(S.examId);
    const prev = S.work[S.idx];
    S.work = e ? e.questions.filter(matches).map((q) => q.id) : [];
    if (keepIdx && prev) {
      const i = S.work.indexOf(prev);
      S.idx = i >= 0 ? i : 0;
    } else S.idx = 0;
    if (S.idx >= S.work.length) S.idx = Math.max(0, S.work.length - 1);
  }

  /* ---------------- 문제 카드 ---------------- */
  function card(q) {
    const r = rec(q.id);
    const done = answered(q.id);
    const open = !!S.reveal[q.id];          // 정답·해설을 펼쳤는지
    const chosen = r.choice || [];
    const sel = S.sel[q.id] || [];
    const need = (q.answer || []).length;

    const opts = (q.options || []).map((o) => {
      let c = "opt", mark = "";
      if (done) {
        const isSel = chosen.includes(o.k);
        const isAns = (q.answer || []).includes(o.k);
        if (open) {                          // 펼친 뒤에만 정답 위치를 보여준다
          if (isAns) { c += " correct"; mark = isSel ? "✓ 정답" : "정답"; }
          else if (isSel) { c += " chosen-bad"; mark = "✗ 내 선택"; }
        } else if (isSel) {                  // 펼치기 전에는 내 선택만 표시
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

  function renderExam() {
    const e = examOf(S.examId);
    if (!e) { location.hash = "#/"; return; }
    $("#examTitle").textContent = e.title;
    $("#examNote").textContent = e.note || "";
    $("#examNote").hidden = !e.note;

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
    localStorage.setItem(posKey(e.id), String(S.idx));

    $("#qnav").innerHTML = S.work.map((id, i) => {
      const r = rec(id);
      const cls = ["qn", i === S.idx ? "cur" : "", r.correct === true ? "ok" : r.correct === false ? "bad" : "", r.bookmarked ? "star" : ""].join(" ");
      return `<button class="${cls}" data-jump="${i}" title="Question #${byId(id).number}">${byId(id).number}</button>`;
    }).join("");

    $("#pager").innerHTML = `
      <button class="ghost" data-move="-1" ${S.idx === 0 ? "disabled" : ""}>← 이전</button>
      <span class="count">${S.idx + 1} / ${S.work.length}</span>
      <button class="${answered(q.id) ? "primary" : "ghost"}" data-move="1" ${S.idx >= S.work.length - 1 ? "disabled" : ""}>다음 →</button>`;
  }

  function render() {
    const home = !S.examId;
    $("#home").hidden = !home;
    $("#exam").hidden = home;
    $("#controls").hidden = home;
    if (home) renderHome(); else renderExam();
  }

  function move(delta) {
    const next = S.idx + delta;
    if (next < 0 || next >= S.work.length) return;
    S.idx = next;
    renderExam();
    scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- routing ---------------- */
  function readHash() {
    const m = /^#\/([\w.-]+)/.exec(location.hash || "");
    const id = m && m[1];
    S.examId = id && examOf(id) ? id : null;
    if (S.examId) {
      rebuild(false);
      const saved = parseInt(localStorage.getItem(posKey(S.examId)) || "0", 10);
      if (!isNaN(saved) && saved > 0 && saved < S.work.length) S.idx = saved;
    }
  }
  addEventListener("hashchange", () => {
    S.filter = "all"; S.tag = ""; S.search = ""; $("#search").value = "";
    [...$("#filterSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.filter === "all"));
    readHash(); render(); scrollTo({ top: 0 });
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
      renderExam();
    } else if (act === "submit") {
      await grade(q);
    } else if (act === "reveal") {
      S.reveal[q.id] = !S.reveal[q.id];
      renderExam();
    } else if (act === "reset") {
      S.sel[q.id] = []; S.reveal[q.id] = false;
      await Store.set(q.id, { choice: null, correct: null });
      renderExam();
    } else if (act === "mark") {
      if (!Store.user) { openAuth("북마크를 저장하려면 먼저 로그인해 주세요."); return; }
      await Store.set(q.id, { bookmarked: !rec(q.id).bookmarked });
      renderExam();
    }
  });

  async function grade(q) {
    const choice = (S.sel[q.id] || []).slice();
    if (choice.length !== (q.answer || []).length) return;
    const a = (q.answer || []).slice().sort().join(",");
    await Store.set(q.id, { choice, correct: a === choice.slice().sort().join(",") });
    renderExam();
  }

  $("#qnav").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-jump]"); if (!b) return;
    S.idx = Number(b.dataset.jump); renderExam(); scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#pager").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-move]"); if (!b) return;
    move(Number(b.dataset.move));
  });

  addEventListener("keydown", (e) => {
    if (S.examId === null || !S.work.length) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea" || $("#authDlg").open) return;
    const q = byId(S.work[S.idx]); if (!q) return;

    if (e.key === "ArrowRight") { move(1); return; }
    if (e.key === "ArrowLeft") { move(-1); return; }
    if (e.key === "Enter") {
      e.preventDefault();
      if (!answered(q.id)) grade(q); else move(1);
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
    rebuild(false); renderExam();
  });
  $("#tagSel").addEventListener("change", (e) => { S.tag = e.target.value; rebuild(false); renderExam(); });
  let t0; $("#search").addEventListener("input", (e) => {
    clearTimeout(t0); t0 = setTimeout(() => { S.search = e.target.value; rebuild(false); renderExam(); }, 150);
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
      syncAuthUI(); if (S.examId) rebuild(true);
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
      n.innerHTML = "닉네임 + PIN으로 로그인하면 내가 틀린 문제만 따로 모아 볼 수 있어요.";
    } else n.hidden = true;
    $("#modeTag").textContent = Store.mode === "supabase" ? "기록: 서버 저장" : "기록: 이 브라우저";
  }

  /* ---------------- init ---------------- */
  (async function init() {
    [...$("#langSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.lang === S.lang));
    try { await Store.restore(); } catch (e) { console.warn(e); }
    syncAuthUI();
    readHash();
    render();
  })();
})();
