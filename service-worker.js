// service-worker.js
// Instant-update service worker with no manual caching.
// Browser handles normal HTTP caching, and any new SW
// version activates and takes control immediately.

self.addEventListener('install', (event) => {
  // Activate this service worker as soon as it's finished installing
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of all open tabs right away
  event.waitUntil(self.clients.claim());
});

// Optional: you can log to see it's working (visible in DevTools > Console)
console.log('Ash Shack Usage service worker active (instant update mode).');
