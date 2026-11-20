/* Tri Vu - Self-Contained Logo & Navigation Script */
(() => {
    // 1. Load required stylesheets automatically if not already linked
    const requiredStyles = [
        "../header_footer.css",
        "../default_setting.css",
        "../Tri Vu/TV_HomeButton.css"
    ];

    requiredStyles.forEach(cssHref => {
        const alreadyLinked = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .some(link => link.getAttribute("href") === cssHref);

        if (!alreadyLinked) {
            const styleLink = document.createElement("link");
            styleLink.rel = "stylesheet";
            styleLink.href = cssHref;
            document.head.appendChild(styleLink);
        }
    });

    // 2. Build and insert the header at the top of the page
    const mountHeader = () => {
        if (document.getElementById("tv-auto-header")) return;

        const wrapper = document.createElement("div");
        wrapper.id = "tv-auto-header";
        wrapper.innerHTML = `
            <header id="tv-header">
                <!-- Home Page button start -->
                <div class="homepage-button-container">
                    <center>
                        <a href="../index.html" class="logo-link">
                            <img src="../Tri Vu/Images/book_logo.png" alt="Book Logo" class="logo-img default-logo">
                            <img src="../Tri Vu/Images/book_open_golden_home_page.png" alt="Home Page Book" class="logo-img hover-logo">
                        </a>
                    </center>
                </div>
                <!-- Home Page button end -->

                <!--Navigation Start-->
                <nav class="tv-nav">
                    <ul class="nav-menu">
                        <li class="nav-item">
                            Breakfast
                            <ul class="nav-dropdown">
                                <li class="nav-dropdown-item"><a href="../Daphnie Jones/DJ_Page1.html" class="nav-link">Quesadilla</a></li>
                                <li class="nav-dropdown-item"><a href="../Daphnie Jones/DJ_Page2.html" class="nav-link">French Toast</a></li>
                                <li class="nav-dropdown-item"><a href="../Daphnie Jones/DJ_Page3.html" class="nav-link">Crepes</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            Soup
                            <ul class="nav-dropdown">
                                <li class="nav-dropdown-item"><a href="../Joshua Cruse/JC_Page1.html" class="nav-link">Chicken & Dumplings Soup</a></li>
                                <li class="nav-dropdown-item"><a href="../Joshua Cruse/JC_Page2.html" class="nav-link">Beef & Vegetable Soup</a></li>
                                <li class="nav-dropdown-item"><a href="../Joshua Cruse/JC_Page3.html" class="nav-link">Loaded Baked Potato Soup</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            Sandwich
                            <ul class="nav-dropdown">
                                <li class="nav-dropdown-item"><a href="../Jaylin Jordan/JJ_Page1.html" class="nav-link">Garlic-Herb Grilled Pork Chop Sandwich</a></li>
                                <li class="nav-dropdown-item"><a href="../Jaylin Jordan/JJ_Page2.html" class="nav-link">Cajun-Spiced Crispy Tilapia Sandwich</a></li>
                                <li class="nav-dropdown-item"><a href="../Jaylin Jordan/JJ_Page3.html" class="nav-link">Air Fryer Sirloin Steak Sandwiches & Bacon Jam</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            Dessert
                            <ul class="nav-dropdown">
                                <li class="nav-dropdown-item"><a href="../Michelle Wilborn/MW_Page1.html" class="nav-link">Peach Cobbler</a></li>
                                <li class="nav-dropdown-item"><a href="../Michelle Wilborn/MW_Page2.html" class="nav-link">S'mores Cookies</a></li>
                                <li class="nav-dropdown-item"><a href="../Michelle Wilborn/MW_Page3.html" class="nav-link">Biscoff Cheesecake</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            Chicken Alfredo
                            <ul class="nav-dropdown">
                                <li class="nav-dropdown-item"><a href="../Delaney Dokins/DD_Page1.html" class="nav-link">Classic Chicken Alfredo</a></li>
                                <li class="nav-dropdown-item"><a href="../Delaney Dokins/DD_Page2.html" class="nav-link">Blackened Chicken Alfredo</a></li>
                                <li class="nav-dropdown-item"><a href="../Delaney Dokins/DD_Page3.html" class="nav-link">Cajun Chicken Alfredo</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            Barbeque
                            <ul class="nav-dropdown">
                                <li class="nav-dropdown-item"><a href="../Deja Ware/DW_Page1.html" class="nav-link">BBQ Portal</a></li>
                                <li class="nav-dropdown-item"><a href="../Deja Ware/DW_Page2.html#brisket" class="nav-link">Smoked Brisket</a></li>
                                <li class="nav-dropdown-item"><a href="../Deja Ware/DW_Page2.html#chicken" class="nav-link">Honey BBQ Chicken</a></li>
                                <li class="nav-dropdown-item"><a href="../Deja Ware/DW_Page2.html#ribs" class="nav-link">BBQ Ribs</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!--Navigation End-->
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