(function () {
  const QS = (window.QUESTIONS || []).slice();
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const bold = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const S = {
    lang: localStorage.getItem("saa.lang") || "en",
    filter: "all",
    tag: "",
    search: "",
    pending: {},   // qid -> [keys] (복수 정답 문제 임시 선택)
  };

  const txt = (o) => (!o ? "" : S.lang === "ko" ? (o.ko || o.en || "") : (o.en || o.ko || ""));
  const rec = (id) => Store.records[id] || {};
  const answered = (id) => Array.isArray(rec(id).choice) && rec(id).choice.length > 0;

  /* ---------------- theme ---------------- */
  const savedTheme = localStorage.getItem("saa.theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme
      || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("saa.theme", next);
  });

  /* ---------------- render ---------------- */
  function visible() {
    const s = S.search.trim().toLowerCase();
    return QS.filter((q) => {
      const r = rec(q.id);
      if (S.filter === "unanswered" && answered(q.id)) return false;
      if (S.filter === "wrong" && r.correct !== false) return false;
      if (S.filter === "bookmark" && !r.bookmarked) return false;
      if (S.tag && !(q.tags || []).includes(S.tag)) return false;
      if (s) {
        const hay = [
          "#" + q.number, q.question.en, q.question.ko,
          (q.options || []).map((o) => o.en + " " + o.ko).join(" "),
          (q.tags || []).join(" "),
        ].join(" ").toLowerCase();
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
    const cls = done ? (r.correct ? "card done-ok" : "card done-bad") : "card";
    const pend = S.pending[q.id] || [];

    const opts = (q.options || []).map((o) => {
      let c = "opt", mark = "";
      const isAns = (q.answer || []).includes(o.k);
      const isSel = chosen.includes(o.k);
      if (done) {
        if (isAns) { c += " correct"; mark = isSel ? "✓ 정답" : "정답"; }
        else if (isSel) { c += " chosen-bad"; mark = "✗ 내 선택"; }
      } else if (multi && pend.includes(o.k)) {
        c += " correct";
      }
      return `<li><button class="${c}" data-act="pick" data-q="${q.id}" data-k="${o.k}" ${done ? "disabled" : ""}>
        <span class="k">${o.k}.</span><span class="t">${esc(txt(o))}</span>
        ${mark ? `<span class="mark">${mark}</span>` : ""}</button></li>`;
    }).join("");

    const wrongs = q.why_wrong
      ? Object.keys(q.why_wrong).filter((k) => !(q.answer || []).includes(k))
          .map((k) => `<li><b>${k}</b><span>${bold(txt(q.why_wrong[k]))}</span></li>`).join("")
      : "";

    const expl = done ? `<div class="expl">
        <h4>정답 ${(q.answer || []).join(", ")} · 해설</h4>
        <p>${bold(txt(q.explanation))}</p>
        ${wrongs ? `<ul class="wrongs">${wrongs}</ul>` : ""}
      </div>` : "";

    const tags = (q.tags || []).map((t) => `<span class="badge">${esc(t)}</span>`).join("");

    return `<article class="${cls}" id="q-${q.id}">
      <div class="chead">
        <span class="qno">Question #${q.number}</span>
        <span class="badge">Topic ${q.topic}${q.exam ? " · Exam " + q.exam : ""}</span>
        ${tags}
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

  function renderStats() {
    const total = QS.length;
    let ok = 0, bad = 0, marked = 0;
    QS.forEach((q) => { const r = rec(q.id); if (r.correct === true) ok++; else if (r.correct === false) bad++; if (r.bookmarked) marked++; });
    const solved = ok + bad;
    const rate = solved ? Math.round((ok / solved) * 100) : 0;
    $("#stats").innerHTML = [
      `<span class="chip">문제 <b>${total}</b></span>`,
      `<span class="chip">푼 문제 <b>${solved}</b></span>`,
      `<span class="chip good">정답 <b>${ok}</b></span>`,
      `<span class="chip bad">오답 <b>${bad}</b></span>`,
      `<span class="chip">정답률 <b>${rate}%</b></span>`,
      marked ? `<span class="chip">북마크 <b>${marked}</b></span>` : "",
    ].join("");
  }

  function render() {
    const list = visible();
    $("#list").innerHTML = list.map(card).join("");
    $("#empty").hidden = list.length > 0;
    renderStats();
  }

  /* ---------------- interactions ---------------- */
  $("#list").addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const q = QS.find((x) => x.id === btn.dataset.q);
    if (!q) return;
    const act = btn.dataset.act;

    if (act === "pick") {
      if (!Store.user) { openAuth("기록을 저장하려면 먼저 닉네임으로 로그인해 주세요."); return; }
      const multi = (q.answer || []).length > 1;
      if (multi) {
        const cur = S.pending[q.id] || [];
        const k = btn.dataset.k;
        S.pending[q.id] = cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k).slice(-q.answer.length);
        render();
      } else {
        await grade(q, [btn.dataset.k]);
      }
    } else if (act === "submit") {
      await grade(q, (S.pending[q.id] || []).slice());
    } else if (act === "reset") {
      delete S.pending[q.id];
      await Store.set(q.id, { choice: null, correct: null });
      render();
    } else if (act === "mark") {
      if (!Store.user) { openAuth("북마크를 저장하려면 먼저 로그인해 주세요."); return; }
      await Store.set(q.id, { bookmarked: !rec(q.id).bookmarked });
      render();
    }
  });

  async function grade(q, choice) {
    const a = (q.answer || []).slice().sort().join(",");
    const c = choice.slice().sort().join(",");
    delete S.pending[q.id];
    await Store.set(q.id, { choice, correct: a === c });
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
    const nick = $("#nick").value.trim(), pin = $("#pin").value;
    const err = $("#authErr");
    err.hidden = true;
    if (!/^[A-Za-z0-9._-]{2,20}$/.test(nick)) { err.hidden = false; err.textContent = "닉네임은 영문·숫자·._- 로 2~20자."; return; }
    if (pin.length < 6) { err.hidden = false; err.textContent = "PIN은 6자 이상이어야 해요."; return; }
    try {
      await (kind === "up" ? Store.signUp(nick, pin) : Store.signIn(nick, pin));
      dlg.close(); $("#pin").value = "";
      syncAuthUI(); render();
    } catch (e) { err.hidden = false; err.textContent = e.message || String(e); }
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
      n.innerHTML = "지금은 <b>이 브라우저에만 저장</b>되는 모드예요. Supabase 키를 <code>assets/config.js</code>에 넣으면 기기와 상관없이 기록이 이어집니다.";
    } else if (!Store.user) {
      n.hidden = false;
      n.innerHTML = "닉네임 + PIN으로 로그인하면 내가 틀린 문제만 따로 모아 볼 수 있어요.";
    } else n.hidden = true;
    $("#modeTag").textContent = Store.mode === "supabase" ? "기록: 서버 저장" : "기록: 이 브라우저";
  }

  /* ---------------- init ---------------- */
  (async function init() {
    const tags = [...new Set(QS.flatMap((q) => q.tags || []))].sort();
    $("#tagSel").insertAdjacentHTML("beforeend", tags.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join(""));
    [...$("#langSeg").children].forEach((x) => x.classList.toggle("on", x.dataset.lang === S.lang));
    try { await Store.restore(); } catch (e) { console.warn(e); }
    syncAuthUI();
    render();
  })();
})();
