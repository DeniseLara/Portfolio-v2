// ============================================
// INICIALIZACIÓN
// ============================================

import { initNav } from './nav.js';
import { initForm } from './form.js';
import { initScrollReveal } from './scrollReveal.js';
import { initScroll } from './scrollBehavior.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initForm();
    initScrollReveal();
    initScroll();
});
