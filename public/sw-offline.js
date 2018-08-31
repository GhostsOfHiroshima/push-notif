self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('jsmoothly').then(function (cache) {
            console.log('in caches block');
            cache.addAll([
                '/sw-offline',
                '/js/scrolling-nav.js',
                '/css/scrolling-nav.css',
                '/vendor/jquery-easing/jquery.easing.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('got a fetch');
    event.respondWith(caches.open('jsmoothly').then(function (cache) {
        console.log('cache is open');
        return cache.match(event.request);
    }));
});