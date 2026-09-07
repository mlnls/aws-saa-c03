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

  const api = {
    mode: remote ? "supabase" : "local",
    user: null,      // {id, nickname}
    records: {},     // qid -> {choice:[], correct:bool, bookmarked:bool}
  };
  const norm = (n) => String(n || "").trim().toLowerCase();

  /* ---------- 서버 모드 ---------- */
  async function rpc(fn, args) {
    const res = await fetch(BASE + "/rest/v1/rpc/" + fn, {
      method: "POST",
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
      api.user = { id: u.id, nickname: u.nickname };
      await this.loadRecords();
      return api.user;
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
      api.user = { id: norm(nick), nickname: u.nickname };
      api.records = JSON.parse(localStorage.getItem(lsRec(norm(nick))) || "{}");
      return api.user;
    },
    async restore() {
      const n = localStorage.getItem(LS_SESSION);
      const u = n && this.users()[n];
      if (!u) return null;
      api.user = { id: n, nickname: u.nickname };
      api.records = JSON.parse(localStorage.getItem(lsRec(n)) || "{}");
      return api.user;
    },
    async signOut() { localStorage.removeItem(LS_SESSION); },
    async put() { localStorage.setItem(lsRec(api.user.id), JSON.stringify(api.records)); },
    async board() { return api.user ? [{ nickname: api.user.nickname, solved: 0, correct: 0 }] : []; },
  };

  const impl = () => (remote ? cloud : local);

  api.restore = () => impl().restore();
  api.signIn = (n, p) => impl().signIn(n, p);
  api.signUp = (n, p) => impl().signUp(n, p);
  api.board = () => impl().board();
  api.signOut = async () => { await impl().signOut(); api.user = null; api.records = {}; };
  api.set = async (qid, rec) => {
    api.records[qid] = Object.assign({}, api.records[qid], rec);
    if (!api.user) return;
    try { await impl().put(qid); } catch (e) { console.error("저장 실패:", e.message || e); }
  };
  return api;
})();
