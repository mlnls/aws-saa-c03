/* 기록 저장소
 * - config.js 에 Supabase url/anonKey 가 있으면: 닉네임+PIN 계정으로 서버 저장 (기기 상관없이 이어짐)
 * - 없으면: 이 브라우저(localStorage)에만 저장하는 폴백 모드
 * 어느 쪽이든 app.js 는 동일한 API 를 사용합니다.
 */
window.Store = (function () {
  const cfg = window.SAA_CONFIG || {};
  const remote = !!(cfg.url && cfg.anonKey && window.supabase);
  const EMAIL_DOMAIN = "@saa-c03.local";
  const LS_USERS = "saa.users";
  const LS_SESSION = "saa.session";
  const lsRec = (n) => "saa.rec." + n;

  let sb = null;
  if (remote) sb = window.supabase.createClient(cfg.url, cfg.anonKey);

  const api = {
    mode: remote ? "supabase" : "local",
    user: null,          // {id, nickname}
    records: {},         // qid -> {choice:[], correct:bool, bookmarked:bool}
  };

  const norm = (n) => String(n || "").trim().toLowerCase();

  /* ---------- local mode ---------- */
  const local = {
    users: () => JSON.parse(localStorage.getItem(LS_USERS) || "{}"),
    saveUsers(u) { localStorage.setItem(LS_USERS, JSON.stringify(u)); },
    async signUp(nick, pin) {
      const u = this.users();
      if (u[norm(nick)]) throw new Error("이미 있는 닉네임이에요. 로그인해 주세요.");
      u[norm(nick)] = { pin, nickname: nick.trim() };
      this.saveUsers(u);
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
      if (!n) return null;
      const u = this.users()[n];
      if (!u) return null;
      api.user = { id: n, nickname: u.nickname };
      api.records = JSON.parse(localStorage.getItem(lsRec(n)) || "{}");
      return api.user;
    },
    async signOut() { localStorage.removeItem(LS_SESSION); },
    async put(qid) {
      localStorage.setItem(lsRec(api.user.id), JSON.stringify(api.records));
    },
  };

  /* ---------- supabase mode ---------- */
  const cloud = {
    async loadProfile(uid, fallbackNick) {
      const { data } = await sb.from("profiles").select("nickname").eq("id", uid).maybeSingle();
      if (data && data.nickname) return data.nickname;
      if (fallbackNick) {
        await sb.from("profiles").upsert({ id: uid, nickname: fallbackNick });
        return fallbackNick;
      }
      return "익명";
    },
    async loadRecords() {
      const { data, error } = await sb.from("attempts").select("qid,choice,correct,bookmarked");
      if (error) throw error;
      const map = {};
      (data || []).forEach((r) => {
        map[r.qid] = { choice: r.choice || null, correct: r.correct, bookmarked: !!r.bookmarked };
      });
      api.records = map;
    },
    async signUp(nick, pin) {
      const { data, error } = await sb.auth.signUp({ email: norm(nick) + EMAIL_DOMAIN, password: pin });
      if (error) throw new Error(translate(error.message));
      if (!data.session) return this.signIn(nick, pin);
      api.user = { id: data.user.id, nickname: await this.loadProfile(data.user.id, nick.trim()) };
      await this.loadRecords();
      return api.user;
    },
    async signIn(nick, pin) {
      const { data, error } = await sb.auth.signInWithPassword({ email: norm(nick) + EMAIL_DOMAIN, password: pin });
      if (error) throw new Error(translate(error.message));
      api.user = { id: data.user.id, nickname: await this.loadProfile(data.user.id, nick.trim()) };
      await this.loadRecords();
      return api.user;
    },
    async restore() {
      const { data } = await sb.auth.getSession();
      if (!data || !data.session) return null;
      const uid = data.session.user.id;
      api.user = { id: uid, nickname: await this.loadProfile(uid) };
      await this.loadRecords();
      return api.user;
    },
    async signOut() { await sb.auth.signOut(); },
    async put(qid) {
      const r = api.records[qid] || {};
      const { error } = await sb.from("attempts").upsert({
        user_id: api.user.id, qid,
        choice: r.choice || null,
        correct: typeof r.correct === "boolean" ? r.correct : null,
        bookmarked: !!r.bookmarked,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id,qid" });
      if (error) throw error;
    },
  };

  function translate(msg) {
    const m = String(msg || "");
    if (/already registered/i.test(m)) return "이미 있는 닉네임이에요. 로그인해 주세요.";
    if (/Invalid login credentials/i.test(m)) return "닉네임 또는 PIN이 맞지 않아요.";
    if (/Password should be at least/i.test(m)) return "PIN은 6자 이상이어야 해요.";
    if (/Email not confirmed/i.test(m)) return "Supabase 설정에서 이메일 확인(Confirm email)을 꺼주세요.";
    if (/valid email/i.test(m)) return "닉네임은 영문·숫자·밑줄만 사용해 주세요.";
    return m;
  }

  const impl = () => (remote ? cloud : local);

  api.restore = () => impl().restore();
  api.signIn = (n, p) => impl().signIn(n, p);
  api.signUp = (n, p) => impl().signUp(n, p);
  api.signOut = async () => { await impl().signOut(); api.user = null; api.records = {}; };
  api.set = async (qid, rec) => {
    api.records[qid] = Object.assign({}, api.records[qid], rec);
    if (!api.user) return;
    try { await impl().put(qid); } catch (e) { console.error("저장 실패", e); }
  };
  return api;
})();
