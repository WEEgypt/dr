self.addEventListener("install", (event) => {
    console.log("[CHECK]: Service_Worker_Installing...");
    self.skipWaiting();
});
self.addEventListener("activate", (event) => {
    console.log("[CHECK]: Service_Worker_Activated");
    event.waitUntil(clients.claim());
});
self.addEventListener("fetch", (event) => {
    event.respondWith(async () => {
        const cacheName = "other-cache";
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            console.log("[CHECK]: Serving_From_Cache", request.url);
            return cachedResponse;
        }
        console.log("[CHECK]: Cache_Miss! Fetching_From_Network", request.url);
        const networkResponse = await fetch(request);
        cache.put(request, networkResponse.clone());
        return networkResponse;
    });
});
