/* 플래시카드(보기 선택형). 데이터: data/flashcards.js, 워크북 제목: data/study.js */
(function () {
  const DATA = window.SAA_FLASHCARDS || { cats: [], cards: [] };
  const STUDY = window.SAA_STUDY || [];
  const catName = (id) => (DATA.cats.find((c) => c.id === id) || {}).name || "";
  const CARDS = DATA.cards.map((c, i) => ({
    i, cat: c[0], cue: c[1], answer: c[2], why: c[3], not: c[4] || "", wb: c[5] || "",
    rules: c[0] === "pair" ? c[3].split("\n").map((r) => { const [cond, ans] = r.split(" → "); return { cond, ans }; }) : null
  }));
  const SOLO = CARDS.filter((c) => !c.rules);

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const KEYS = ["A", "B", "C", "D"];

  /* ---------- theme (index.html과 같은 키) ---------- */
  $("themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("saa.theme", next); } catch (e) {}
  });

  /* ---------- 오답 보기 고르기: "이럴 땐 다른 답"에 언급된 서비스 → 같은 분류 → 나머지 ---------- */
  const core = (a) => a.replace(/^(Amazon|AWS|S3)\s+/, "").split(/\s+[(/]/)[0].trim();
  function confusers(c) {
    const text = c.not + " " + c.why;
    const seen = new Set([c.answer]);
    const pick = (list) => list.filter((x) => { if (seen.has(x.answer)) return false; seen.add(x.answer); return true; });
    const named = pick(SOLO.filter((x) => core(x.answer).length >= 3 && text.includes(core(x.answer))));
    const sameCat = pick(shuffle(SOLO.filter((x) => x.cat === c.cat)));
    const rest = pick(shuffle(SOLO.slice()));
    return shuffle(named).concat(sameCat, rest);
  }

  function makeItem(c, mode) {
    let prompt, options;
    if (c.rules) {
      const r = Math.floor(Math.random() * c.rules.length), rule = c.rules[r];
      const others = c.rules.filter((_, k) => k !== r);
      prompt = mode === "why" ? rule.ans : rule.cond;
      options = [{ text: mode === "why" ? rule.cond : rule.ans, card: -1, ok: true }]
        .concat(others.map((o) => ({ text: mode === "why" ? o.cond : o.ans, card: -1 })));
      options = options.filter((o, k, a) => a.findIndex((x) => x.text === o.text) === k).slice(0, 4);
      return { card: c.i, rule: r, prompt, options: shuffle(options) };
    }
    const wrong = confusers(c).slice(0, 3);
    if (mode === "why") {
      prompt = c.answer;
      options = [{ text: c.cue, card: c.i, ok: true }].concat(wrong.map((x) => ({ text: x.cue, card: x.i })));
    } else {
      prompt = c.cue;
      options = [{ text: c.answer, card: c.i, ok: true }].concat(wrong.map((x) => ({ text: x.answer, card: x.i })));
    }
    return { card: c.i, rule: -1, prompt, options: shuffle(options) };
  }

  /* ---------- session (문제 방향마다 따로 이어 풀기) ---------- */
  let mode = load("saa.cards.mode", "situation");
  if (mode !== "why") mode = "situation";
  let S;
  const skey = () => "saa.cards.session." + mode;
  function newSession(cardIdx) {
    const list = cardIdx ? cardIdx.map((i) => CARDS[i]) : CARDS;
    S = { items: shuffle(list.map((c) => makeItem(c, mode))), pos: 0, picks: {}, retry: !!cardIdx };
    save(skey(), S);
  }
  function openSession() {
    const s = load(skey(), null);
    const valid = s && Array.isArray(s.items) && s.items.length && s.items.every((it) => CARDS[it.card]);
    if (valid) S = s; else newSession();
  }

  /* ---------- render ---------- */
  function counts() {
    let ok = 0, bad = 0;
    S.items.forEach((it, k) => { if (S.picks[k] == null) return; it.options[S.picks[k]].ok ? ok++ : bad++; });
    return { ok, bad, done: ok + bad };
  }
  function renderStats() {
    const { ok, bad, done } = counts(), total = S.items.length;
    const rate = done ? Math.round(ok / done * 100) + "%" : "–";
    $("stats").innerHTML = `<span class="chip">푼 문제 <b>${done} / ${total}</b></span>
      <span class="chip good">정답 <b>${ok}</b></span><span class="chip bad">오답 <b>${bad}</b></span>
      <span class="chip">정답률 <b>${rate}</b></span>${S.retry ? `<span class="chip">틀린 문제 다시 풀기</span>` : ""}`;
    $("pos").textContent = Math.min(S.pos + 1, total) + " / " + total;
    $("barFill").style.width = (done / total * 100) + "%";
  }

  function wbLink(wb) {
    if (!wb) return "";
    const [d, l] = wb.split(".").map(Number);
    const day = STUDY[d - 1];
    if (!day) return "";
    const lesson = l && day.lessons && day.lessons[l - 1];
    const href = "index.html#/workbook/day/" + d + (lesson ? "/topic/" + l : "");
    return `<a class="fc-wb" href="${href}"><span>${esc(day.icon || "📘")} 워크북 Day ${d} · ${esc(day.title)}</span>
      <b>${lesson ? String(l).padStart(2, "0") + " " + esc(lesson.title) : "이 Day"} 자세히 보기 →</b></a>`;
  }

  function explain(it, picked) {
    const c = CARDS[it.card];
    if (c.rules) {
      return `<div class="expl"><h4>${esc(c.cue)} 구분 기준</h4><ul class="fc-rules">${c.rules.map((r, k) =>
        `<li${k === it.rule ? ' class="on"' : ""}>${esc(r.cond)} → <b>${esc(r.ans)}</b></li>`).join("")}</ul></div>${wbLink(c.wb)}`;
    }
    let other = "";
    const p = it.options[picked];
    if (!p.ok && p.card >= 0) {
      const o = CARDS[p.card];
      other = `<h4>고른 보기는 언제 쓰나</h4><p><strong>${esc(o.answer)}</strong> · ${esc(o.cue)}</p>`;
    }
    return `<div class="expl">
        ${mode === "why" ? `<p class="fc-answer-line"><strong>${esc(c.answer)}</strong></p>` : ""}
        <h4>왜 이걸 쓰나</h4><p>${esc(c.why)}</p>
        ${c.not ? `<h4>이럴 땐 다른 답</h4><p>${esc(c.not)}</p>` : ""}
        ${other}
      </div>${wbLink(c.wb)}`;
  }

  function render() {
    renderStats();
    const total = S.items.length;
    if (S.pos >= total) return renderDone();
    $("done").hidden = true; $("qcard").hidden = false;
    const it = S.items[S.pos], c = CARDS[it.card], picked = S.picks[S.pos];
    const answered = picked != null;
    const ask = c.rules
      ? (mode === "why" ? `${c.cue} 중 이걸 고르는 조건은?` : `${c.cue} 중 이 조건이면?`)
      : (mode === "why" ? "이 서비스를 고르는 상황은?" : "이런 요구사항이면 무엇을 고를까?");
    const correctK = it.options.findIndex((o) => o.ok);
    const opts = it.options.map((o, k) => {
      let cls = "opt", mark = "";
      if (answered && o.ok) { cls += " correct"; mark = "정답"; }
      else if (answered && k === picked) { cls += " chosen-bad"; mark = "내 선택"; }
      return `<li><button class="${cls}" data-k="${k}"${answered ? " disabled" : ""}><span class="k">${KEYS[k]}</span><span class="t">${esc(o.text)}</span>${mark ? `<span class="mark">${mark}</span>` : ""}</button></li>`;
    }).join("");
    const ok = answered && it.options[picked].ok;
    $("qcard").className = "card fc-q" + (answered ? (ok ? " done-ok" : " done-bad") : "");
    $("qcard").innerHTML = `
      <div class="chead"><span class="qno">Q ${S.pos + 1}</span><span class="badge">${esc(catName(c.cat))}</span>
        <span class="spacer"></span>${answered ? `<span class="badge ${ok ? "ok" : "bad"}">${ok ? "정답" : "오답"}</span>` : ""}</div>
      <p class="fc-ask">${esc(ask)}</p>
      <div class="qtext${mode === "why" && !c.rules ? " fc-service" : ""}">${esc(it.prompt)}</div>
      <ul class="opts${mode === "why" && !c.rules ? " fc-long" : ""}">${opts}</ul>
      ${answered ? `<div class="verdict ${ok ? "ok" : "bad"}"><b>${ok ? "맞았어요" : "틀렸어요"}</b><span>${ok ? "이유까지 맞게 떠올렸는지 확인해 보세요" : "정답은 " + KEYS[correctK] + "예요"}</span></div>
        <div class="fc-explain">${explain(it, picked)}</div>` : ""}
      <div class="fc-nav">
        <button id="prevBtn"${S.pos === 0 ? " disabled" : ""}>← 이전</button>
        ${answered ? `<button class="primary" id="nextBtn">${S.pos + 1 >= total ? "결과 보기" : "다음 문제 →"}</button>` : `<span class="fc-hintline">보기를 고르면 바로 채점돼요</span>`}
      </div>`;
  }

  function renderDone() {
    $("qcard").hidden = true; $("done").hidden = false;
    const { ok, done } = counts();
    const wrong = S.items.map((it, k) => ({ it, k })).filter(({ it, k }) => S.picks[k] != null && !it.options[S.picks[k]].ok);
    const rate = done ? Math.round(ok / done * 100) : 0;
    $("done").innerHTML = `<div class="fc-done-body">
        <span class="eyebrow">${S.retry ? "틀린 문제 다시 풀기" : "한 바퀴 완료"}</span>
        <h2>${ok} / ${S.items.length} 정답 · ${rate}%</h2>
        <p>${wrong.length ? `틀린 ${wrong.length}문제는 이유를 다시 읽고 한 번 더 풀어 보세요.` : "모두 맞혔어요. 방향을 바꿔서 서비스 보고 상황 고르기도 해 보세요."}</p>
        ${wrong.length ? `<ul class="fc-wrong">${wrong.slice(0, 12).map(({ it }) => {
          const c = CARDS[it.card];
          return `<li><span>${esc(c.rules ? c.cue : c.answer)}</span></li>`;
        }).join("")}${wrong.length > 12 ? `<li><span>외 ${wrong.length - 12}개</span></li>` : ""}</ul>` : ""}
        <div class="fc-done-actions">
          ${wrong.length ? `<button class="primary" id="retryWrong">틀린 ${wrong.length}문제 다시 풀기</button>` : ""}
          <button id="restartAll">전체 다시 섞기</button>
        </div></div>`;
    const r = $("retryWrong");
    if (r) r.onclick = () => { newSession([...new Set(wrong.map(({ it }) => it.card))]); render(); };
    $("restartAll").onclick = () => { newSession(); render(); };
  }

  /* ---------- actions ---------- */
  function choose(k) {
    if (S.pos >= S.items.length || S.picks[S.pos] != null) return;
    if (k < 0 || k >= S.items[S.pos].options.length) return;
    S.picks[S.pos] = k; save(skey(), S); render();
    const v = document.querySelector(".fc-q .verdict");
    if (v && v.getBoundingClientRect().bottom > innerHeight) v.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  function go(d) {
    const n = S.pos + d;
    if (n < 0 || n > S.items.length) return;
    if (d > 0 && S.picks[S.pos] == null) return;
    S.pos = n; save(skey(), S); render();
    const card = $(S.pos >= S.items.length ? "done" : "qcard");
    if (card.getBoundingClientRect().top < 0) card.scrollIntoView({ block: "start" });
  }

  $("qcard").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.k != null) choose(Number(b.dataset.k));
    else if (b.id === "nextBtn") go(1);
    else if (b.id === "prevBtn") go(-1);
  });
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const key = e.key.toLowerCase();
    const idx = "1234".indexOf(key) >= 0 ? "1234".indexOf(key) : "abcd".indexOf(key);
    if (idx >= 0 && key.length === 1) { choose(idx); return; }
    if (e.key === "Enter" || e.key === "ArrowRight") {
      if (e.key === "Enter" && e.target.closest && e.target.closest("button, a")) return;
      go(1);
    } else if (e.key === "ArrowLeft") go(-1);
  });

  $("modeSeg").addEventListener("click", (e) => {
    const b = e.target.closest("[data-mode]");
    if (!b || b.dataset.mode === mode) return;
    mode = b.dataset.mode; save("saa.cards.mode", mode); syncMode(); openSession(); render();
  });
  function syncMode() { $("modeSeg").querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.mode === mode)); }

  $("restartAsk").onclick = () => { $("restartAsk").hidden = true; $("restartConfirm").hidden = false; };
  $("restartNo").onclick = () => { $("restartAsk").hidden = false; $("restartConfirm").hidden = true; };
  $("restartYes").onclick = () => { $("restartAsk").hidden = false; $("restartConfirm").hidden = true; newSession(); render(); };

  syncMode(); openSession(); render();
})();
