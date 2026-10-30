/* 기록 저장소
 * - config.js 에 Supabase url/anonKey 가 있으면: 서버 저장 (닉네임+PIN → DB 함수가 직접 검증)
 * - 없으면: 이 브라우저(localStorage)에만 저장하는 폴백 모드
 * app.js 는 어느 쪽이든 같은 API 를 사용합니다.
 */
window.Store = (function () {
  const cfg = window.SAA_CONFIG || {};
  const remote = !!(cfg.url && cfg.anonKey);
  const BASE = remote ? String(cfg.url).replace(/\/+$/, "").replace(/\/rest\/v1$/, "") : "";
  const LS_TOKEN = "saa.token";
  const LS_USERS = "saa.users";
  const LS_SESSION = "saa.session";
  const lsRec = (n) => "saa.rec." + n;
  const lsAttempts = (n) => "saa.exam.attempts." + n;
  const lsState = (id) => "saa.state." + id;
  const lsStatePending = (id) => "saa.state.pending." + id; // 아직 서버에 못 보낸 key
  const lsStateSynced = (id) => "saa.state.synced." + id;   // 서버 상태를 한 번이라도 받아왔는지

  const api = {
    mode: remote ? "supabase" : "local",
    user: null,      // {id, nickname}
    records: {},     // qid -> {choice:[], correct:bool, bookmarked:bool}
    examAttempts: {}, // examId -> 완료한 실전 시험 기록[]
    state: {},        // 계정에 묶인 학습 상태: key -> 값 (exam.paused, study.read, study.answers)
  };
  let stateRemote = false;   // 서버에 saa_state 함수가 있는지
  const pendingState = new Set();
  let stateTimer = null;
  function loadLocalState() {
    if (!api.user) { api.state = {}; return; }
    try { api.state = JSON.parse(localStorage.getItem(lsState(api.user.id)) || "{}") || {}; }
    catch (_) { api.state = {}; }
  }
  function cacheState() {
    if (!api.user) return;
    try { localStorage.setItem(lsState(api.user.id), JSON.stringify(api.state)); } catch (_) {}
  }
  function savePending() {
    if (!api.user) return;
    try {
      if (pendingState.size) localStorage.setItem(lsStatePending(api.user.id), JSON.stringify([...pendingState]));
      else localStorage.removeItem(lsStatePending(api.user.id));
    } catch (_) {}
  }
  function storedPending() {
    if (!api.user) return [];
    try { return JSON.parse(localStorage.getItem(lsStatePending(api.user.id)) || "[]") || []; } catch (_) { return []; }
  }
  const norm = (n) => String(n || "").trim().toLowerCase();
  const MAX_ATTEMPTS = 50; // 시험당 보관하는 응시 기록 수 (이 브라우저 캐시)
  const sameSubmit = (a, b) => Math.abs(Number(a.finishedAt) - Number(b.finishedAt)) <= 1000;
  function loadLocalExamAttempts() {
    if (!api.user) { api.examAttempts = {}; return; }
    try { api.examAttempts = JSON.parse(localStorage.getItem(lsAttempts(api.user.id)) || "{}"); }
    catch (_) { api.examAttempts = {}; }
  }

  /* ---------- 서버 모드 ---------- */
  async function rpc(fn, args, opts) {
    const res = await fetch(BASE + "/rest/v1/rpc/" + fn, {
      method: "POST",
      keepalive: !!(opts && opts.keepalive),
      headers: {
        "Content-Type": "application/json",
        apikey: cfg.anonKey,
        Authorization: "Bearer " + cfg.anonKey,
      },
      body: JSON.stringify(args || {}),
    });
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch (_) { data = text; }
    if (!res.ok) {
      const code = (data && (data.message || data.hint || data.error)) || text || ("HTTP " + res.status);
      throw new Error(msgOf(String(code)));
    }
    return data;
  }

  function msgOf(raw) {
    if (/BAD_NICK/.test(raw)) return "닉네임은 영문·숫자·._- 로 2~20자여야 해요.";
    if (/SHORT_PIN/.test(raw)) return "PIN은 6자 이상이어야 해요.";
    if (/DUP_NICK/.test(raw)) return "이미 있는 닉네임이에요. 로그인해 주세요.";
    if (/NO_USER/.test(raw)) return "없는 닉네임이에요. '처음이에요 (가입)'을 눌러 주세요.";
    if (/BAD_PIN/.test(raw)) return "PIN이 맞지 않아요.";
    if (/LOCKED/.test(raw)) return "PIN을 여러 번 틀려서 잠시 잠겼어요. 10분 뒤에 다시 시도해 주세요.";
    if (/BAD_TOKEN/.test(raw)) return "세션이 만료됐어요. 다시 로그인해 주세요.";
    if (/^EMPTY$/.test(raw)) return "서버 응답이 비어 있어요. 잠시 후 다시 시도해 주세요.";
    if (/saa_signup|saa_login|Could not find the function|PGRST202/.test(raw))
      return "DB 함수가 없어요. supabase/schema.sql 을 SQL Editor에서 실행해 주세요.";
    if (/Failed to fetch|NetworkError/i.test(raw)) return "서버에 연결할 수 없어요. 네트워크를 확인해 주세요.";
    return raw;
  }

  const cloud = {
    async loadRecords() {
      const token = localStorage.getItem(LS_TOKEN);
      const rows = await rpc("saa_records", { p_token: token });
      const map = {};
      (rows || []).forEach((r) => {
        map[r.qid] = { choice: r.choice || null, correct: r.correct, bookmarked: !!r.bookmarked };
      });
      api.records = map;
    },
    async adopt(u) {
      if (!u || u.error) throw new Error(msgOf(u ? String(u.error) : "EMPTY"));
      localStorage.setItem(LS_TOKEN, u.token);
      api.user = { id: u.id, nickname: u.nickname, isAdmin: !!u.is_admin };
      await this.loadRecords();
      // 서버 응시 이력 + 이 브라우저 기록을 합친다 (같은 제출은 finishedAt 으로 판별).
      // 서버에 없는 로컬 결과(예전에 저장이 실패했거나, 이력 저장 전에 덮어써진 것)는 오래된 순으로 올린다.
      loadLocalExamAttempts();
      const local = api.examAttempts;
      try {
        const rows = await rpc("saa_exam_results", { p_token: localStorage.getItem(LS_TOKEN) });
        const list = Array.isArray(rows) ? rows : [];
        // 이력 함수(2026-10-07 마이그레이션)는 id 를 준다. 없으면 시험당 최신 1행만 있는 구버전 DB.
        const history = !list.length || list.some((r) => r && r.id);
        const server = {};
        list.forEach((row) => {
          (server[row.exam_id] = server[row.exam_id] || []).push({
            startedAt: new Date(row.started_at).getTime(),
            finishedAt: new Date(row.finished_at).getTime(),
            elapsedSeconds: Number(row.elapsed_seconds),
            limitSeconds: Number(row.limit_seconds),
            total: Number(row.total),
            correct: Number(row.correct),
            answers: row.answers || {},
          });
        });
        const merged = {};
        const uploads = [];
        new Set(Object.keys(server).concat(Object.keys(local))).forEach((examId) => {
          const srv = server[examId] || [];
          const loc = Array.isArray(local[examId]) ? local[examId] : [];
          const out = srv.slice();
          const missing = loc.filter((a) => a && !srv.some((b) => sameSubmit(a, b)));
          missing.forEach((a) => { if (!out.some((b) => sameSubmit(a, b))) out.push(a); });
          out.sort((a, b) => Number(b.finishedAt) - Number(a.finishedAt));
          merged[examId] = out.slice(0, MAX_ATTEMPTS);
          if (!missing.length) return;
          if (history) missing.slice().sort((a, b) => a.finishedAt - b.finishedAt).forEach((a) => uploads.push([examId, a]));
          else {
            // 구버전 DB 는 덮어쓰므로 서버보다 새로운 최신 결과 하나만 올린다
            const top = missing.reduce((x, y) => (Number(y.finishedAt) > Number(x.finishedAt) ? y : x));
            const latest = srv.reduce((m, b) => Math.max(m, b.finishedAt), 0);
            if (Number(top.finishedAt) > latest + 1000) uploads.push([examId, top]);
          }
        });
        api.examAttempts = merged;
        try { localStorage.setItem(lsAttempts(api.user.id), JSON.stringify(merged)); } catch (_) {}
        // 오래된 것부터 차례로 (구버전 DB 에서도 마지막에 최신이 남도록)
        uploads.reduce((p, [examId, a]) => p.then(() => uploadAttempt(examId, a))
          .catch((e) => console.warn("이전 시험 결과 업로드 실패:", e.message || e)), Promise.resolve());
      } catch (_) { api.examAttempts = local; }
      await this.loadState();
      return api.user;
    },
    // 서버 상태가 기준. 이 기기에서 바꿨는데 아직 못 보낸 key(pending)만 로컬 값을 우선한다.
    // 서버 상태를 처음 받아오는 기기라면(스키마 적용 전 사본) 서버에 없는 key 를 올린다.
    // (예전엔 "서버에 없으면 올림"이라 다른 기기에서 지운 일시정지 시험이 되살아났다)
    async loadState() {
      loadLocalState();
      const cached = api.state;
      storedPending().forEach((k) => pendingState.add(k));
      pendingState.delete("exam.paused"); // 일시정지는 saa_save_pause 로만 쓴다
      try {
        const rows = await rpc("saa_state", { p_token: localStorage.getItem(LS_TOKEN) });
        stateRemote = true;
        const firstSync = localStorage.getItem(lsStateSynced(api.user.id)) !== "1";
        const server = {};
        (rows || []).forEach((r) => { server[r.key] = r.value; });
        if (firstSync) Object.keys(cached).forEach((k) => {
          if (!(k in server) && k !== "exam.paused") pendingState.add(k);
        });
        pendingState.forEach((k) => { if (k in cached) server[k] = cached[k]; else delete server[k]; });
        api.state = server;
        cacheState();
        try { localStorage.setItem(lsStateSynced(api.user.id), "1"); } catch (_) {}
        await retryStoredPauses();
        if (pendingState.size) { savePending(); queueState([...pendingState][0]); }
      } catch (e) {
        stateRemote = false;
        console.warn("학습 상태를 서버에서 못 불러와 이 브라우저 사본을 씁니다:", e.message || e);
      }
    },
    async signUp(nick, pin) { return this.adopt(await rpc("saa_signup", { p_nick: nick, p_pin: pin })); },
    async signIn(nick, pin) { return this.adopt(await rpc("saa_login", { p_nick: nick, p_pin: pin })); },
    async restore() {
      const token = localStorage.getItem(LS_TOKEN);
      if (!token) return null;
      const u = await rpc("saa_me", { p_token: token });
      if (!u || u.error) { localStorage.removeItem(LS_TOKEN); return null; }
      return this.adopt(u);
    },
    async signOut() { localStorage.removeItem(LS_TOKEN); },
    async put(qid) {
      const r = api.records[qid] || {};
      await rpc("saa_save", {
        p_token: localStorage.getItem(LS_TOKEN),
        p_qid: qid,
        p_choice: r.choice || null,
        p_correct: typeof r.correct === "boolean" ? r.correct : null,
        p_bookmarked: !!r.bookmarked,
      });
    },
    board() { return rpc("saa_board", {}); },
    adminRows() { return rpc("saa_admin_rows", { p_token: localStorage.getItem(LS_TOKEN) }); },
    adminUsers() { return rpc("saa_admin_users", { p_token: localStorage.getItem(LS_TOKEN) }); },
    adminExams() { return rpc("saa_admin_exams", { p_token: localStorage.getItem(LS_TOKEN) }); },
  };

  /* ---------- 로컬 폴백 모드 ---------- */
  const local = {
    users: () => JSON.parse(localStorage.getItem(LS_USERS) || "{}"),
    async signUp(nick, pin) {
      const u = this.users();
      if (u[norm(nick)]) throw new Error("이미 있는 닉네임이에요. 로그인해 주세요.");
      u[norm(nick)] = { pin, nickname: nick.trim() };
      localStorage.setItem(LS_USERS, JSON.stringify(u));
      return this.signIn(nick, pin);
    },
    async signIn(nick, pin) {
      const u = this.users()[norm(nick)];
      if (!u) throw new Error("없는 닉네임이에요. '처음이에요 (가입)'을 눌러 주세요.");
      if (u.pin !== pin) throw new Error("PIN이 맞지 않아요.");
      localStorage.setItem(LS_SESSION, norm(nick));
      api.user = { id: norm(nick), nickname: u.nickname, isAdmin: norm(nick) === "admin" };
      api.records = JSON.parse(localStorage.getItem(lsRec(norm(nick))) || "{}");
      loadLocalExamAttempts();
      loadLocalState();
      return api.user;
    },
    async restore() {
      const n = localStorage.getItem(LS_SESSION);
      const u = n && this.users()[n];
      if (!u) return null;
      api.user = { id: n, nickname: u.nickname, isAdmin: n === "admin" };
      api.records = JSON.parse(localStorage.getItem(lsRec(n)) || "{}");
      loadLocalExamAttempts();
      loadLocalState();
      return api.user;
    },
    async signOut() { localStorage.removeItem(LS_SESSION); },
    async put() { localStorage.setItem(lsRec(api.user.id), JSON.stringify(api.records)); },
    async board() { return api.user ? [{ nickname: api.user.nickname, solved: 0, correct: 0 }] : []; },
    async adminRows() {
      if (!api.user || !api.user.isAdmin) return [];
      const out = [];
      const users = this.users();
      Object.keys(users).forEach((h) => {
        const recs = JSON.parse(localStorage.getItem(lsRec(h)) || "{}");
        Object.keys(recs).forEach((qid) => {
          const r = recs[qid];
          out.push({ nickname: users[h].nickname, qid, choice: r.choice || null,
            correct: typeof r.correct === "boolean" ? r.correct : null, bookmarked: !!r.bookmarked, updated_at: null });
        });
      });
      return out;
    },
    async adminUsers() {
      if (!api.user || !api.user.isAdmin) return [];
      const users = this.users();
      return Object.keys(users).map((h) => ({ nickname: users[h].nickname, created_at: null, is_admin: h === "admin" }));
    },
  };

  const impl = () => (remote ? cloud : local);

  function uploadAttempt(examId, attempt) {
    return rpc("saa_save_exam_result", {
      p_token: localStorage.getItem(LS_TOKEN),
      p_exam_id: examId,
      p_started_at: new Date(attempt.startedAt).toISOString(),
      p_finished_at: new Date(attempt.finishedAt).toISOString(),
      p_elapsed_seconds: attempt.elapsedSeconds,
      p_limit_seconds: attempt.limitSeconds,
      p_total: attempt.total,
      p_correct: attempt.correct,
      p_answers: attempt.answers,
    });
  }

  /* ---------- 일시정지 시험: 화면(sid) 단위 조건부 저장 ----------
   * exam.paused 는 saa_save_pause / saa_clear_pause 로만 서버에 쓴다 (시험 하나씩 원자적으로).
   * takeover=false 저장이 'TAKEN'(다른 화면이 이어 풂) / 'GONE'(제출·삭제됨) 이면 onPauseConflict 호출. */
  const pendingPause = {};   // examId -> {entry, takeover}
  let pauseTimer = null, pauseFlushing = Promise.resolve({});
  const lsPausePending = (id) => "saa.pause.pending." + id;
  function savePendingPause() {
    if (!api.user) return;
    try {
      if (Object.keys(pendingPause).length) localStorage.setItem(lsPausePending(api.user.id), JSON.stringify(pendingPause));
      else localStorage.removeItem(lsPausePending(api.user.id));
    } catch (_) {}
  }
  function setLocalPause(examId, entry) {
    const map = Object.assign({}, api.state["exam.paused"] || {});
    if (entry) map[examId] = entry; else delete map[examId];
    if (Object.keys(map).length) api.state["exam.paused"] = map; else delete api.state["exam.paused"];
    cacheState();
  }
  function flushPauses(keepalive) {
    clearTimeout(pauseTimer); pauseTimer = null;
    pauseFlushing = pauseFlushing.then(async () => {
      const results = {};
      if (!remote || !stateRemote || !api.user) return results;
      const token = localStorage.getItem(LS_TOKEN);
      for (const examId of Object.keys(pendingPause)) {
        const p = pendingPause[examId];
        delete pendingPause[examId];
        try {
          const r = await rpc("saa_save_pause", { p_token: token, p_exam: examId, p_entry: p.entry, p_takeover: !!p.takeover }, { keepalive });
          results[examId] = r;
          if (r !== "OK" && api.onPauseConflict) api.onPauseConflict(examId, r);
        } catch (e) {
          if (!pendingPause[examId]) pendingPause[examId] = p;
          else pendingPause[examId].takeover = pendingPause[examId].takeover || p.takeover;
          results[examId] = "ERROR";
          console.warn("일시정지 저장 실패:", examId, e.message || e);
        }
      }
      savePendingPause();
      if (Object.keys(pendingPause).length && !pauseTimer && !keepalive) pauseTimer = setTimeout(() => flushPauses(false), 15000);
      return results;
    });
    return pauseFlushing;
  }
  api.savePause = (examId, entry, takeover) => {
    if (!api.user) return;
    setLocalPause(examId, entry);
    if (!remote) return;
    const prev = pendingPause[examId];
    pendingPause[examId] = { entry, takeover: !!takeover || !!(prev && prev.takeover) };
    savePendingPause();
    if (!pauseTimer) pauseTimer = setTimeout(() => flushPauses(false), 1500);
  };
  // 바로 저장하고 결과("OK" | "TAKEN" | "GONE" | "ERROR")를 돌려준다. 제출 직전 확인용.
  api.savePauseNow = async (examId, entry) => {
    api.savePause(examId, entry, false);
    if (!remote) return "OK";
    const results = await flushPauses(false);
    return results[examId] || "OK";
  };
  api.clearPause = async (examId, sid) => {
    if (!api.user) return "OK";
    delete pendingPause[examId]; savePendingPause();
    setLocalPause(examId, null);
    if (!remote) return "OK";
    await pauseFlushing;
    try { return await rpc("saa_clear_pause", { p_token: localStorage.getItem(LS_TOKEN), p_exam: examId, p_sid: sid || null }); }
    catch (e) { console.warn("일시정지 삭제 실패:", examId, e.message || e); return "ERROR"; }
  };
  // 로그인 직후: 지난번에 못 보낸 일시정지 저장을 다시 시도 (takeover 아님 → 그 사이 다른 곳에서 바뀌었으면 버림)
  async function retryStoredPauses() {
    let stored = {};
    try { stored = JSON.parse(localStorage.getItem(lsPausePending(api.user.id)) || "{}") || {}; } catch (_) {}
    try { localStorage.removeItem(lsPausePending(api.user.id)); } catch (_) {}
    for (const examId of Object.keys(stored)) {
      const p = stored[examId];
      if (!p || !p.entry) continue;
      try {
        const r = await rpc("saa_save_pause", { p_token: localStorage.getItem(LS_TOKEN), p_exam: examId, p_entry: p.entry, p_takeover: false });
        if (r === "OK") setLocalPause(examId, p.entry);
      } catch (_) {}
    }
  }

  function queueState(key) {
    if (!remote) return;
    pendingState.add(key);
    savePending();
    if (!stateTimer) stateTimer = setTimeout(() => flushState(false), 1500);
  }
  async function flushState(keepalive) {
    clearTimeout(stateTimer); stateTimer = null;
    if (!remote || !stateRemote || !api.user || !pendingState.size) return;
    const token = localStorage.getItem(LS_TOKEN);
    const keys = [...pendingState]; pendingState.clear();
    await Promise.all(keys.map(async (key) => {
      const value = key in api.state ? api.state[key] : null;
      try { await rpc("saa_set_state", { p_token: token, p_key: key, p_value: value }, { keepalive }); }
      catch (e) { pendingState.add(key); console.warn("학습 상태 저장 실패:", key, e.message || e); }
    }));
    savePending();
    if (pendingState.size && !stateTimer && !keepalive) stateTimer = setTimeout(() => flushState(false), 15000);
  }
  api.getState = (key) => api.state[key];
  api.setState = (key, value) => {
    if (!api.user) return;
    if (value === null || value === undefined) delete api.state[key];
    else api.state[key] = value;
    cacheState();
    queueState(key);
  };
  api.flushState = () => { flushPauses(true); return flushState(true); };
  // 다른 기기에서 바꾼 내용을 다시 받아온다 (탭으로 돌아왔을 때 등)
  api.refreshState = async () => {
    if (!remote || !api.user) return false;
    await flushState(false);
    const before = JSON.stringify(api.state);
    await cloud.loadState();
    return JSON.stringify(api.state) !== before;
  };

  api.restore = () => impl().restore();
  api.signIn = (n, p) => impl().signIn(n, p);
  api.signUp = (n, p) => impl().signUp(n, p);
  api.board = () => impl().board();
  api.adminRows = () => impl().adminRows();
  api.adminUsers = () => impl().adminUsers();
  api.adminExams = () => (impl().adminExams ? impl().adminExams() : Promise.resolve([]));
  api.signOut = async () => {
    await flushPauses(false);
    await flushState(false);
    await impl().signOut();
    api.user = null; api.records = {}; api.examAttempts = {}; api.state = {};
    pendingState.clear(); stateRemote = false;
    Object.keys(pendingPause).forEach((k) => delete pendingPause[k]);
  };
  api.set = async (qid, rec) => {
    api.records[qid] = Object.assign({}, api.records[qid], rec);
    if (!api.user) return;
    try { await impl().put(qid); } catch (e) { console.error("저장 실패:", e.message || e); }
  };
  api.saveExamAttempt = async (examId, attempt) => {
    if (!api.user) return false;
    const list = Array.isArray(api.examAttempts[examId]) ? api.examAttempts[examId].slice() : [];
    list.unshift(attempt);
    api.examAttempts[examId] = list.slice(0, MAX_ATTEMPTS);
    localStorage.setItem(lsAttempts(api.user.id), JSON.stringify(api.examAttempts));
    if (remote) {
      try { await uploadAttempt(examId, attempt); }
      catch (e) { console.warn("실전 시험 기록은 이 브라우저에 저장했습니다 (다음 접속 때 다시 올립니다):", e.message || e); }
    }
    return true;
  };
  // 응시 이력 (최근 → 오래된 순)
  api.examHistory = (examId) => {
    const list = api.examAttempts[examId];
    return Array.isArray(list) ? list.slice().sort((a, b) => Number(b.finishedAt) - Number(a.finishedAt)) : [];
  };
  api.latestExamAttempt = (examId) => {
    const list = api.examAttempts[examId];
    return Array.isArray(list) && list.length ? list[0] : null;
  };
  return api;
})();
