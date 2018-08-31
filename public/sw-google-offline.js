var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/sw-google-offline',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        console.log('responded with cache from serviceworker');
                        return response;
                    }
                    console.log('trying to make request out in the web from serviceworker');
                    return fetch(event.request);
                }
            )
    );
});
