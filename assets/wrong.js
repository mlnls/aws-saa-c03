/* 오답노트: 넘겨보기(한 장씩) + 다시 풀기(틀린 문제만). 데이터: data/exam*.js(문제 원문), data/wrong-notes.js(오답노트) */
(function () {
  const NOTES = window.SAA_WRONG_NOTES || { topics: {}, items: [] };
  const TOPICS = NOTES.topics;
  const BANK = {};
  (window.SAA_EXAMS || []).forEach((e) => (e.questions || []).forEach((q) => { BANK[q.id] = q; }));
  const ITEMS = NOTES.items.filter((n) => BANK[n.id]);
  const key = (n) => n.r + "-" + n.q;

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const letters = (s) => String(s).split(/\s*,\s*/).filter(Boolean);
  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme · 언어 (index.html과 같은 키) ---------- */
  $("themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("saa.theme", next); } catch (e) {}
  });
  let lang = "en";
  try { lang = localStorage.getItem("saa.lang") || "en"; } catch (e) {}
  const txt = (o) => (!o ? "" : lang === "ko" ? (o.ko || o.en || "") : (o.en || o.ko || ""));
  function syncLang() { $("langBtn").textContent = lang === "ko" ? "한국어" : "EN"; }
  $("langBtn").addEventListener("click", () => {
    lang = lang === "ko" ? "en" : "ko";
    try { localStorage.setItem("saa.lang", lang); } catch (e) {}
    syncLang(); render(0);
  });

  /* ---------- 상태 ---------- */
  const st = Object.assign({ mode: "review", round: 0, topic: "", rep: false, hide: false, scope: "todo", pos: 0 }, load("saa.wrong.view", {}));
  let hist = load("saa.wrong.hist", {}); // "회-문항" → {ok, bad, last}
  let list = [];      // 넘겨보기 목록
  let R = null;       // 다시 풀기 세션 {items:[key], pos, picks:{pos:[k]}, done:{pos:bool}}
  let revealed = false;
  let draft = [];     // 복수 정답 문제에서 확인 전 고른 보기

  function filtered(withScope) {
    return ITEMS.filter((n) => (!st.round || n.r === st.round) && (!st.topic || n.tp === st.topic) && (!st.rep || n.mk > 0)
      && (!withScope || scopeOk(n)));
  }
  function scopeOk(n) {
    if (n.dup) return false; // 같은 문제(2회 Q48 = 1회 Q49, 2회 Q64 = 2회 Q14)는 한 번만
    const h = hist[key(n)];
    if (st.scope === "todo") return !(h && h.last);
    if (st.scope === "miss") return !!(h && h.last === false);
    return true;
  }
  const byKey = (k) => ITEMS.find((n) => key(n) === k);

  function newRetry() {
    let items = filtered(true).map(key);
    R = { sig: sig(), items: shuffle(items), pos: 0, picks: {}, done: {} };
    save("saa.wrong.retry", R);
  }
  const sig = () => [st.round, st.topic, st.rep, st.scope].join("|");
  function openRetry() {
    const s = load("saa.wrong.retry", null);
    if (s && s.sig === sig() && Array.isArray(s.items) && s.items.every(byKey)) R = s; else newRetry();
  }

  /* ---------- 공통 조각 ---------- */
  function head(n, extra) {
    const b = [`<span class="badge">${esc(TOPICS[n.tp] || "")}</span>`, `<span class="badge">${esc(n.ex)}</span>`];
    if (n.mk === 2) b.push(`<span class="badge rep">⚠⚠ 두 번 틀림</span>`); else if (n.mk === 1) b.push(`<span class="badge rep">⚠ 반복 함정</span>`);
    if (n.fl === "dispute") b.push(`<span class="badge flag">논쟁 문항</span>`);
    if (n.fl === "error") b.push(`<span class="badge flag">사이트 정답 의심</span>`);
    return `<div class="chead"><span class="qno">${n.r}회 Q${n.q}</span>${b.join("")}<span class="spacer"></span>${extra || ""}</div>`;
  }
  function optsHTML(n, q, state) {
    // state: {show:bool, picked:[k], interactive:bool, my:bool}
    const ans = letters(n.a), mine = letters(n.m);
    return `<ul class="opts">${q.options.map((o, i) => {
      let cls = "opt", mark = "";
      const isAns = ans.includes(o.k), isMine = state.my ? mine.includes(o.k) : (state.picked || []).includes(o.k);
      if (state.show && isAns) { cls += " correct"; mark = state.my && isMine ? "정답" : "정답"; }
      else if (state.show && isMine) { cls += " chosen-bad"; mark = state.my ? "내 답" : "내 선택"; }
      else if (!state.show && (state.picked || []).includes(o.k)) cls += " picked";
      return `<li><button class="${cls}" data-k="${esc(o.k)}"${state.interactive ? "" : " disabled"}><span class="k">${esc(o.k)}</span><span class="t">${esc(txt(o))}</span>${mark ? `<span class="mark">${mark}</span>` : ""}</button></li>`;
    }).join("")}</ul>`;
  }
  function notesHTML(n, q) {
    let h = `<div class="expl">
      <h4 class="ok">${n.fl ? "채택 정답" : "정답"} ${esc(n.a)}</h4><p>${rich(n.aT)}</p>
      <h4 class="bad">내 답 ${esc(n.m)}</h4><p>${rich(n.mT)}</p>`;
    if (n.cmp) h += `<h4>비교</h4><p>${rich(n.cmp)}</p>`;
    if (n.tbl) h += `<div class="wn-tbl"><table><thead><tr>${n.tbl[0].map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${n.tbl.slice(1).map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    if (n.memo) h += `<h4>암기</h4><p><span class="wn-memo">${esc(n.memo)}</span></p>`;
    h += `</div>`;
    if (n.fl === "error") h += `<p class="wn-note">사이트 정답은 ${esc(letters(q.answer.join(",")).join(", "))}입니다. ${esc(n.note || "")}</p>`;
    else if (n.note) h += `<p class="wn-note">${esc(n.note)}</p>`;
    return h;
  }
  function multiLine(n) {
    const k = letters(n.a).length;
    return k > 1 ? `<p class="wn-multi">${k}개를 고르는 문제예요.</p>` : "";
  }

  /* ---------- 넘겨보기 ---------- */
  function renderReview(dir) {
    list = filtered(false);
    if (st.pos >= list.length) st.pos = Math.max(0, list.length - 1);
    save("saa.wrong.view", st);
    revealed = false;
    const total = list.length;
    $("pos").textContent = total ? (st.pos + 1) + " / " + total : "0 / 0";
    $("barFill").style.width = total ? ((st.pos + 1) / total * 100) + "%" : "0";
    const mk = { 1: 0, 2: 0 }; list.forEach((n) => { if (n.mk) mk[n.mk]++; });
    $("stats").innerHTML = `<span class="chip">오답 <b>${total}</b></span><span class="chip bad">⚠ 반복 함정 <b>${mk[1]}</b></span><span class="chip bad">⚠⚠ 두 번 틀림 <b>${mk[2]}</b></span>`;
    $("done").hidden = true; $("qcard").hidden = false;
    if (!total) { $("qcard").className = "card wn-card"; $("qcard").innerHTML = `<div class="wn-empty">이 조건에 맞는 오답이 없어요. 회차나 주제를 바꿔 보세요.</div>`; return; }
    const n = list[st.pos], q = BANK[n.id];
    const hide = st.hide;
    const html = `${head(n)}
      <p class="wn-title">${esc(n.t)}</p>
      <div class="qtext">${rich(txt(q.question))}</div>
      ${multiLine(n)}
      ${optsHTML(n, q, { show: true, my: true, interactive: false })}
      ${hide ? `<div class="wn-reveal"><button class="primary" id="revealBtn">정답·해설 보기</button></div><div class="wn-notes" hidden>${notesHTML(n, q)}</div>`
             : `<div class="wn-notes">${notesHTML(n, q)}</div>`}
      <div class="fc-nav">
        <button id="prevBtn"${st.pos === 0 ? " disabled" : ""}>← 이전</button>
        <input type="range" class="wn-scrub" id="scrub" min="0" max="${total - 1}" value="${st.pos}" aria-label="문제 위치">
        <button class="primary" id="nextBtn"${st.pos >= total - 1 ? " disabled" : ""}>다음 →</button>
      </div>`;
    const card = $("qcard");
    const paint = () => { card.innerHTML = html; card.className = "card wn-card" + (hide ? " wn-hidden" : ""); };
    if (dir && !reduced()) {
      card.classList.add(dir > 0 ? "slide-l" : "slide-r");
      setTimeout(() => {
        paint(); card.classList.add(dir > 0 ? "slide-r" : "slide-l");
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove("slide-l", "slide-r")));
      }, 120);
    } else paint();
  }
  function reveal() {
    if (!st.hide || revealed) return;
    revealed = true;
    const card = $("qcard");
    card.classList.remove("wn-hidden");
    const r = card.querySelector(".wn-reveal"); if (r) r.remove();
    const notes = card.querySelector(".wn-notes"); if (notes) notes.hidden = false;
  }
  function goReview(d) {
    const p = Math.min(Math.max(0, st.pos + d), list.length - 1);
    if (p === st.pos) return;
    st.pos = p; renderReview(d);
  }

  /* ---------- 다시 풀기 ---------- */
  function retryCounts() {
    let ok = 0, bad = 0;
    R.items.forEach((k, i) => { if (R.done[i] == null) return; R.done[i] ? ok++ : bad++; });
    return { ok, bad, done: ok + bad };
  }
  function renderRetry() {
    const total = R.items.length;
    const { ok, bad, done } = retryCounts();
    const mastered = ITEMS.filter((n) => !n.dup && hist[key(n)] && hist[key(n)].last).length;
    const pool = ITEMS.filter((n) => !n.dup).length;
    $("stats").innerHTML = `<span class="chip">푼 문제 <b>${done} / ${total}</b></span><span class="chip good">정답 <b>${ok}</b></span>
      <span class="chip bad">오답 <b>${bad}</b></span><span class="chip">전체 극복 <b>${mastered} / ${pool}</b></span>`;
    $("pos").textContent = total ? Math.min(R.pos + 1, total) + " / " + total : "0 / 0";
    $("barFill").style.width = total ? (done / total * 100) + "%" : "0";
    if (!total) {
      $("done").hidden = true; $("qcard").hidden = false; $("qcard").className = "card wn-card";
      $("qcard").innerHTML = `<div class="wn-empty">${st.scope === "todo" ? "이 범위의 오답은 모두 다시 맞혔어요. 범위를 '전체'로 바꾸면 처음부터 다시 풀 수 있어요." : st.scope === "miss" ? "다시 풀다 또 틀린 문제가 없어요." : "이 조건에 맞는 오답이 없어요."}</div>`;
      return;
    }
    if (R.pos >= total) return renderRetryDone();
    $("done").hidden = true; $("qcard").hidden = false;
    const n = byKey(R.items[R.pos]), q = BANK[n.id];
    const answered = R.done[R.pos] != null;
    const picked = answered ? R.picks[R.pos] : draft;
    const need = letters(n.a).length;
    const okNow = answered && R.done[R.pos];
    $("qcard").className = "card wn-card" + (answered ? (okNow ? " done-ok" : " done-bad") : "");
    const h = hist[key(n)];
    $("qcard").innerHTML = `${head(n, answered ? `<span class="badge ${okNow ? "ok" : "bad"}">${okNow ? "정답" : "오답"}</span>` : "")}
      <div class="qtext">${rich(txt(q.question))}</div>
      ${multiLine(n)}
      ${optsHTML(n, q, { show: answered, picked, interactive: !answered })}
      ${answered ? `<div class="verdict ${okNow ? "ok" : "bad"}"><b>${okNow ? "맞았어요" : "또 틀렸어요"}</b><span>정답은 ${esc(n.a)} · 예전 답은 ${esc(n.m)}${h ? ` · 이 문제 누적 정답 ${h.ok} · 오답 ${h.bad}` : ""}</span></div>
        <div class="wn-notes">${notesHTML(n, q)}</div>` : ""}
      <div class="fc-nav">
        <button id="prevBtn"${R.pos === 0 ? " disabled" : ""}>← 이전</button>
        ${answered ? `<button class="primary" id="nextBtn">${R.pos + 1 >= total ? "결과 보기" : "다음 문제 →"}</button>`
          : need > 1 ? `<button class="primary" id="checkBtn"${draft.length === need ? "" : " disabled"}>확인 (${draft.length}/${need})</button>`
          : `<span class="fc-hintline">보기를 고르면 바로 채점돼요</span>`}
      </div>`;
  }
  function pick(k) {
    if (st.mode !== "retry" || !R || R.pos >= R.items.length || R.done[R.pos] != null) return;
    const n = byKey(R.items[R.pos]), q = BANK[n.id];
    if (!q.options.some((o) => o.k === k)) return;
    const need = letters(n.a).length;
    if (need > 1) {
      draft = draft.includes(k) ? draft.filter((x) => x !== k) : draft.length < need ? draft.concat(k) : draft;
      return renderRetry();
    }
    grade([k]);
  }
  function grade(sel) {
    const n = byKey(R.items[R.pos]);
    const ans = letters(n.a).slice().sort().join(","), got = sel.slice().sort().join(",");
    const ok = ans === got;
    R.picks[R.pos] = sel; R.done[R.pos] = ok; draft = [];
    const h = hist[key(n)] || { ok: 0, bad: 0 };
    ok ? h.ok++ : h.bad++; h.last = ok; hist[key(n)] = h;
    save("saa.wrong.hist", hist); save("saa.wrong.retry", R);
    renderRetry();
    const v = document.querySelector(".wn-card .verdict");
    if (v && v.getBoundingClientRect().bottom > innerHeight) v.scrollIntoView({ block: "nearest", behavior: reduced() ? "auto" : "smooth" });
  }
  function goRetry(d) {
    const p = R.pos + d;
    if (p < 0 || p > R.items.length) return;
    if (d > 0 && R.done[R.pos] == null) return;
    R.pos = p; draft = []; save("saa.wrong.retry", R); renderRetry();
    const card = $(R.pos >= R.items.length ? "done" : "qcard");
    if (card.getBoundingClientRect().top < 0) card.scrollIntoView({ block: "start" });
  }
  function renderRetryDone() {
    $("qcard").hidden = true; $("done").hidden = false;
    const { ok, done } = retryCounts();
    const wrong = R.items.filter((k, i) => R.done[i] === false).map(byKey);
    const rate = done ? Math.round(ok / done * 100) : 0;
    $("done").innerHTML = `<div class="fc-done-body">
      <span class="eyebrow">다시 풀기 완료</span>
      <h2>${ok} / ${R.items.length} 정답 · ${rate}%</h2>
      <p>${wrong.length ? `또 틀린 ${wrong.length}문제는 넘겨보기에서 암기 줄을 다시 읽고 한 번 더 풀어 보세요.` : "이번 세트는 모두 맞혔어요."}</p>
      ${wrong.length ? `<ul class="fc-wrong">${wrong.slice(0, 14).map((n) => `<li>${n.r}회 Q${n.q} · ${esc(n.t.replace(/\s*\(\d개\)$/, ""))}</li>`).join("")}${wrong.length > 14 ? `<li>외 ${wrong.length - 14}개</li>` : ""}</ul>` : ""}
      <div class="fc-done-actions">
        ${wrong.length ? `<button class="primary" id="againBtn">또 틀린 ${wrong.length}문제 다시 풀기</button>` : ""}
        <button id="newBtn">새로 섞어서 다시</button>
      </div></div>`;
  }

  /* ---------- 화면 전환 ---------- */
  function syncControls() {
    $("modeSeg").querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.mode === st.mode));
    $("roundSeg").querySelectorAll("button").forEach((b) => b.classList.toggle("on", Number(b.dataset.r) === st.round));
    $("scopeSeg").querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.s === st.scope));
    $("topicSel").value = st.topic;
    $("repBtn").setAttribute("aria-pressed", st.rep);
    $("hideBtn").setAttribute("aria-pressed", st.hide);
    $("hideBtn").hidden = st.mode !== "review";
    $("scopeSeg").hidden = st.mode !== "retry";
    $("keysReview").hidden = st.mode !== "review";
    $("keysRetry").hidden = st.mode !== "retry";
  }
  function render(dir) {
    syncControls();
    if (st.mode === "review") renderReview(dir);
    else { if (!R) openRetry(); renderRetry(); }
  }
  function refilter() { st.pos = 0; save("saa.wrong.view", st); if (st.mode === "retry") { draft = []; newRetry(); } else R = null; render(0); }

  $("topicSel").innerHTML = `<option value="">모든 주제</option>` + Object.entries(TOPICS)
    .map(([k, v]) => `<option value="${k}">${esc(v)} (${ITEMS.filter((n) => n.tp === k).length})</option>`).join("");

  $("modeSeg").addEventListener("click", (e) => {
    const b = e.target.closest("[data-mode]"); if (!b || b.dataset.mode === st.mode) return;
    st.mode = b.dataset.mode; save("saa.wrong.view", st); draft = [];
    if (st.mode === "retry") openRetry();
    render(0);
  });
  $("roundSeg").addEventListener("click", (e) => { const b = e.target.closest("[data-r]"); if (!b) return; st.round = Number(b.dataset.r); refilter(); });
  $("scopeSeg").addEventListener("click", (e) => { const b = e.target.closest("[data-s]"); if (!b) return; st.scope = b.dataset.s; refilter(); });
  $("topicSel").addEventListener("change", (e) => { st.topic = e.target.value; refilter(); });
  $("repBtn").addEventListener("click", () => { st.rep = !st.rep; refilter(); });
  $("hideBtn").addEventListener("click", () => { st.hide = !st.hide; save("saa.wrong.view", st); render(0); });

  $("qcard").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.k != null) return pick(b.dataset.k);
    if (b.id === "revealBtn") return reveal();
    if (b.id === "checkBtn") return grade(draft.slice());
    const d = b.id === "nextBtn" ? 1 : b.id === "prevBtn" ? -1 : 0;
    if (d) st.mode === "review" ? goReview(d) : goRetry(d);
  });
  $("qcard").addEventListener("input", (e) => {
    if (e.target.id !== "scrub") return;
    st.pos = Number(e.target.value); renderReview(0);
    const s = $("scrub"); if (s) s.focus();
  });
  $("done").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.id === "againBtn") { st.scope = "miss"; refilter(); }
    else if (b.id === "newBtn") refilter();
  });

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "select" || (tag === "input" && e.target.type !== "range")) return;
    if (st.mode === "review") {
      if (e.key === "ArrowRight") { e.preventDefault(); goReview(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goReview(-1); }
      else if (e.key === " " && st.hide && !revealed && !(e.target.closest && e.target.closest("button"))) { e.preventDefault(); reveal(); }
      return;
    }
    if (!R || R.pos >= R.items.length) return;
    const idx = "12345".indexOf(e.key);
    if (idx >= 0 && R.done[R.pos] == null) {
      const q = BANK[byKey(R.items[R.pos]).id];
      if (q.options[idx]) pick(q.options[idx].k);
      return;
    }
    if (e.key === "Enter") {
      if (e.target.closest && e.target.closest("button, a")) return;
      if (R.done[R.pos] != null) goRetry(1);
      else if ($("checkBtn") && !$("checkBtn").disabled) grade(draft.slice());
    } else if (e.key === "ArrowRight") goRetry(1);
    else if (e.key === "ArrowLeft") goRetry(-1);
  });

  // 휴대폰: 넘겨보기 카드를 옆으로 밀어서 이동
  let sx = null, sy = null;
  $("qcard").addEventListener("touchstart", (e) => { if (e.target.closest("input")) { sx = null; return; } sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $("qcard").addEventListener("touchend", (e) => {
    if (sx == null || st.mode !== "review") return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.6) goReview(dx < 0 ? 1 : -1);
    sx = null;
  }, { passive: true });

  $("resetAsk").onclick = () => { $("resetAsk").hidden = true; $("resetConfirm").hidden = false; };
  $("resetNo").onclick = () => { $("resetAsk").hidden = false; $("resetConfirm").hidden = true; };
  $("resetYes").onclick = () => {
    $("resetAsk").hidden = false; $("resetConfirm").hidden = true;
    hist = {}; save("saa.wrong.hist", hist); R = null;
    if (st.mode === "retry") { newRetry(); }
    render(0);
  };

  syncLang();
  if (st.mode === "retry") openRetry();
  render(0);
})();
