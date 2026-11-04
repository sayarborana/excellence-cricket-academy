/* =========================================
   EXCELLENCE CRICKET ACADEMY
   COMPLETE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       1. MOBILE NAVBAR
    ===================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (menuToggle && navMenu) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Link par click karne ke baad menu band hoga
        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

        // Screen badi hone par mobile menu band hoga
        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }


    /* =====================================
       2. SMOOTH SCROLLING
    ===================================== */

    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       3. CONTACT FORM VALIDATION
    ===================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name");
            const phone = document.getElementById("phone");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!name || !phone || !email || !message) {
                alert("फॉर्म में कुछ जानकारी उपलब्ध नहीं है।");
                return;
            }

            const nameValue = name.value.trim();
            const phoneValue = phone.value.trim();
            const emailValue = email.value.trim();
            const messageValue = message.value.trim();

            if (
                !nameValue ||
                !phoneValue ||
                !emailValue ||
                !messageValue
            ) {

                alert("कृपया सभी जानकारी भरें।");
                return;

            }

            // भारतीय मोबाइल नंबर की जाँच
            const phonePattern = /^[6-9]\d{9}$/;

            if (!phonePattern.test(phoneValue)) {

                alert("कृपया सही 10 अंकों का मोबाइल नंबर डालें।");
                phone.focus();
                return;

            }

            // Email की जाँच
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {

                alert("कृपया सही Email Address डालें।");
                email.focus();
                return;

            }

            alert(
                "धन्यवाद " + nameValue +
                "! आपका फॉर्म सही तरीके से भर गया है।"
            );

            // फॉर्म खाली करना
            contactForm.reset();

        });

    }


    /* =====================================
       4. CURRENT YEAR IN FOOTER
    ===================================== */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    /* =====================================
       5. ACTIVE NAVBAR LINK
    ===================================== */

    const sections = document.querySelectorAll("main section");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);


});
