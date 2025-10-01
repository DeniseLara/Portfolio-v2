export function initNav() {
    // SHOW MENU 
    const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close"),
        overlay = document.getElementById('overlay')

    // MENU SHOW
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
            overlay.classList.add('active');
        })
    }

    // MENU HIDDEN 
    if (navClose) {
        navClose.addEventListener("click", () =>{
            navMenu.classList.remove("show-menu");
            overlay.classList.remove('active');
        });
    }

    // REMOVE MENU MOBILE
    const navLink = document.querySelectorAll(".nav__link")
    navLink.forEach(n => n.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        overlay.classList.remove('active');
    }));
}