// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// =========================================
// CLOSE MENU AFTER CLICKING LINK
// =========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// =========================================
// NAVBAR SHADOW WHEN SCROLLING
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});