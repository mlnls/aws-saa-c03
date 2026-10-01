/* Public study assets only. Login, scores and API requests are never cached. */
importScripts('./pwa-assets.js');
const PREFIX = `saa-pwa:${self.registration.scope}:`;
const CACHE = PREFIX + self.SAA_PRECACHE.version;
const SHELL = new URL('./index.html', self.registration.scope).href;
const ASSETS = new Set(self.SAA_PRECACHE.assets.map(url => new URL(url, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll([...ASSETS].map(url => new Request(url, {cache: 'reload'})));
    // No skipWaiting: a running exam keeps its existing app version.
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const root = new URL(self.registration.scope);
  if (url.origin !== root.origin) return;
  const isAppNavigation = request.mode === 'navigate' && (url.pathname === root.pathname || url.pathname === new URL(SHELL).pathname);
  if (!isAppNavigation && !ASSETS.has(url.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(isAppNavigation ? SHELL : request);
    return cached || fetch(request);
  })());
});
