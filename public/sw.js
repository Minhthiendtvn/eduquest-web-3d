const CACHE_PREFIX = "eduquest-app-";
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const APP_ROOT = new URL("./", self.registration.scope).pathname;

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const response = await fetch(APP_ROOT, { cache: "reload" });
    if (!response.ok) throw new Error(`Không thể tải EduQuest để lưu ngoại tuyến: ${response.status}`);

    const html = await response.clone().text();
    const assets = [...html.matchAll(/(?:src|href)="([^"]*\/assets\/[^"]+)"/g)]
      .map((match) => new URL(match[1], self.location.origin).pathname);
    const cache = await caches.open(CACHE_NAME);
    await cache.put(APP_ROOT, response);
    await cache.addAll([
      `${APP_ROOT}manifest.webmanifest`,
      `${APP_ROOT}icons/eduquest.svg`,
      `${APP_ROOT}icons/eduquest-192.png`,
      `${APP_ROOT}icons/eduquest-512.png`,
      ...assets,
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(APP_ROOT, response.clone());
        }
        return response;
      } catch {
        return (await caches.match(APP_ROOT)) ?? Response.error();
      }
    })());
    return;
  }

  if (url.pathname.startsWith(`${APP_ROOT}assets/`)) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;

      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    })());
  }
});
