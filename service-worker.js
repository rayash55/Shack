// service-worker.js
// Instant-update service worker with no caching.
// Ensures new versions of the site load immediately.

self.addEventListener('install', (event) => {
  // Activate this service worker immediately after installing
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of all open tabs immediately
  event.waitUntil(self.clients.claim());
});

console.log('Ash Shack Use service worker active (instant update mode).');
