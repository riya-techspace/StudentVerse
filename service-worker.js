
const CACHE_NAME = "studentverse-v2";

const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "manifest.json",
  "smartstudy.html",
  
  "studyplanner.html",
  "futurefinder.html",
  "opportunityzone.html",
  "challengearena.html",
  "achievementwall.html",
  "lifeskills.html",
  "profile.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
