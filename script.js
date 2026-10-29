
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();
