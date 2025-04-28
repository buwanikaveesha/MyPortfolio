document.addEventListener("DOMContentLoaded", () => {
    /*------------------ Tab Switching Function ------------------*/
    function opentab(tabname, event) {
        let tabContents = document.querySelectorAll(".tab-contents");
        let tabLinks = document.querySelectorAll(".tab-links");

        tabContents.forEach(content => content.classList.remove("active-tab"));
        tabLinks.forEach(link => link.classList.remove("active-link"));

        document.getElementById(tabname).classList.add("active-tab");
        event.currentTarget.classList.add("active-link");
    }

    /*------------------ Toggle Icon Navbar ------------------*/
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    });

    /* Close navbar when a link is clicked */
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            menuIcon.classList.remove("fa-xmark");
            navbar.classList.remove("active");
        });
    });

    /*------------------ Scroll Section Active Link ------------------*/
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove("active"));
                let activeLink = document.querySelector(`header nav a[href*=${id}]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });

        /*------------------ Sticky Navbar ------------------*/
        let header = document.querySelector("header");
        header.classList.toggle("sticky", top > 100);

        /*------------------ Remove Toggle Icon & Navbar on Scroll ------------------*/
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    });

    /*------------------ Scroll Reveal ------------------*/
    ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });
});
