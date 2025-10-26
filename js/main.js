import { initForm } from "./form.js";
import { initNav } from "./nav.js";
import { initScroll } from "./scroll-animator.js";

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initForm();
    initScroll();
})