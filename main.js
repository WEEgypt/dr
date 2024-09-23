if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("sw.js", { scope: "./" })
            .then((registration) => {
                console.log("[CHECK]: Service_Worker_Registered_With_Scope", registration.scope);
            })
            .catch((error) => {
                console.error("[ERR]: Service_Worker_Registration_Failed:", error);
            });
    });
}
