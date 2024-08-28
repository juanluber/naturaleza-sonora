const CACHE_NAME = 'nature-sounds-cache-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'rain.mp3',
  'waves.mp3',
  'forest.mp3',
  'fire.mp3',
  'thunderstorm.mp3',
  'waterfall.mp3',
  'wind.mp3',
  'crickets.mp3',
  'ambiance.mp3',
  'river.mp3',
  'snow.mp3',
  'birds.mp3',
  'morning.mp3',
  'crashing.mp3',
  'background1.jpg',
  'background2.jpg',
  'background3.jpg',
  'background4.jpg',
  'background5.jpg',
  'background6.jpg',
  'background7.jpg',
  'background8.jpg',
  'background9.jpg',
  'background10.jpg',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
