/* Supabase 설정
 * 아직 비어 있으면 사이트는 "이 브라우저에만 저장" 모드로 동작합니다.
 *
 * url     : Supabase 대시보드 → Settings → Data API → Project URL
 * anonKey : Settings → API Keys → Publishable key (sb_publishable_... )
 *           ※ Secret key(sb_secret_...)는 절대 넣지 마세요. 서버 전용 키입니다.
 *           ※ 예전 프로젝트라면 "Legacy anon, service_role API keys" 탭의 anon key도 동작합니다.
 */
window.SAA_CONFIG = {
  url: "",      // 예: https://abcdefghijkl.supabase.co
  anonKey: ""   // 예: sb_publishable_xxxxxxxx  (공개해도 되는 키)
};
