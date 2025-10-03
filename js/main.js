import { initAnimations } from "./animations.js";
import { initForm } from "./form.js";
import { initNav } from "./nav.js";
import { initScroll } from "./scroll.js";

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScroll();
    initAnimations();
    initForm();
})