self.addEventListener("install", (event) => {
    console.log("[CHECK]: Service_Worker_Installing...");
    event.waitUntil(
        caches.open("dailyReport-cache-v1").then((cache) => {
            return cache.addAll(["icon.png", "icon512_maskable.png", "icon512_rounded.png", "index.html", "main.js", "manifest.json", "style.css", "sw.js"]);
        })
    );
});
self.addEventListener("activate", (event) => {
    console.log("[CHECK]: Service_Worker_Activated");
    event.waitUntil(clients.claim());
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
