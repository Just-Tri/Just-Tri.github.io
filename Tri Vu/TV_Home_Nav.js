/* Tri Vu - Self-Contained Logo & Navigation Script */
(() => {
    // 1. Load TV_HomeButton.css automatically if not already linked
    const cssHref = "TV_HomeButton.css";
    const alreadyLinked = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .some(link => link.getAttribute("href") === cssHref);

    if (!alreadyLinked) {
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = cssHref;
        document.head.appendChild(styleLink);
    }

    // 2. Build and insert the header at the top of the page
    const mountHeader = () => {
        if (document.getElementById("tv-auto-header")) return;

        const wrapper = document.createElement("div");
        wrapper.id = "tv-auto-header";
        wrapper.innerHTML = `
            <header>
                <div class="homepage-button-container">
                    <a href="index.html" class="logo-link">
                        <img src="closed-book.png" alt="Book Logo" class="logo-img default-logo">
                        <img src="open-book.png" alt="Open Book Logo" class="logo-img hover-logo">
                    </a>
                </div>

                <nav>
                    <a href="index.html">Home</a>
                    <a href="recipes.html">Recipes</a>
                    <a href="about.html">About</a>
                </nav>
            </header>
        `;

        document.body.prepend(wrapper);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountHeader);
    } else {
        mountHeader();
    }
})();