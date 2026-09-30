/* =========================
   DESTINI AURA
   WEBSITE INTERACTIONS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav a");

    /* =========================
       MOBILE MENU
       ========================= */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       HEADER SCROLL EFFECT
       ========================= */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 40) {

            header.style.background =
                "rgba(6, 8, 20, 0.94)";

        } else {

            header.style.background =
                "rgba(8, 11, 26, 0.72)";

        }

    });


    /* =========================
       CURRENT YEAR
       ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       CLOSE MENU ON ESCAPE
       ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape" && navMenu) {

            navMenu.classList.remove("active");

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });

});
