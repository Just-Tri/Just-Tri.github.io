(function () {
    const scriptTag = document.currentScript;
    const navSrc = (scriptTag && scriptTag.dataset.navSrc) || "Tri Vu/TV_Navigation.html";

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "tv-nav-toggle";
    toggleBtn.textContent = "☰ Menu";
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.appendChild(toggleBtn);

    function setDrawerState(open) {
        const drawer = document.getElementById("tv-nav-drawer");
        const backdrop = document.getElementById("tv-nav-backdrop");
        toggleBtn.setAttribute("aria-expanded", String(open));
        if (drawer) drawer.classList.toggle("is-open", open);
        if (backdrop) backdrop.classList.toggle("is-open", open);
    }

    toggleBtn.addEventListener("click", () => {
        const drawer = document.getElementById("tv-nav-drawer");
        const isOpen = drawer && drawer.classList.contains("is-open");
        setDrawerState(!isOpen);
    });

    fetch(navSrc)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Could not load navigation from: " + navSrc);
            }
            return response.text();
        })
        .then((html) => {
            const container = document.createElement("div");
            container.innerHTML = html;
            document.body.appendChild(container);

            const closeBtn = document.getElementById("tv-nav-close");
            const backdrop = document.getElementById("tv-nav-backdrop");
            if (closeBtn) closeBtn.addEventListener("click", () => setDrawerState(false));
            if (backdrop) backdrop.addEventListener("click", () => setDrawerState(false));
        })
        .catch((err) => console.error(err));
})();