
const CACHE_NAME = 'lumina-trails-cache-v1';
const FILES_TO_CACHE = ['/', '/index.html', '/main_final.js', '/assets/banner.png'];
self.addEventListener('install', evt => { evt.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES_TO_CACHE))); self.skipWaiting(); });
self.addEventListener('fetch', evt => { evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request))); });
