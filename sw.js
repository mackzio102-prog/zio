const CACHE_NAME = 'tech-daily-site-deficiency-v18-16-pwa-v2';
const APP_SHELL = [
  './index.html',
  './manifest.webmanifest',
  './icons/app-icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Network-first for app navigation so new releases are picked up.
// Authentication, Power Automate, Excel and photo traffic are never cached.
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || request.mode !== 'navigate') return;
  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put('./index.html', response.clone());
      }
      return response;
    } catch (error) {
      const cached = await caches.match('./index.html');
      if (cached) return cached;
      return new Response('The app is offline and has not been opened on this device yet.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
