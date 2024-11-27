// JavaScript for the responsive menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("nav ul");

    // Toggle the menu visibility
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Close the menu when a link is clicked (optional)
    const menuLinks = document.querySelectorAll("nav ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });
});
