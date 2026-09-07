/* Supabase 설정
 * 비어 있으면 사이트는 "이 브라우저에만 저장" 모드로 동작합니다.
 *
 * url     : Supabase 대시보드 → Settings → Data API → Project URL
 * anonKey : Settings → API Keys → Publishable key (sb_publishable_...)
 *           ※ Secret key(sb_secret_...)는 절대 넣지 마세요. 서버 전용 키입니다.
 *
 * 로그인은 Supabase Auth 를 쓰지 않고, supabase/schema.sql 이 만든
 * saa_signup / saa_login 함수가 닉네임+PIN(bcrypt)을 직접 검증합니다.
 * → 대시보드의 Auth 설정(이메일 확인 등)은 건드릴 필요가 없습니다.
 */
window.SAA_CONFIG = {
  url: "https://gveubjxyhfktzweclfym.supabase.co",
  anonKey: "sb_publishable_gIFczpPH_c4P7wBB1uwhGw_rlaKhiH6"
};
