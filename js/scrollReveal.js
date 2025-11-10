// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

export function initScrollReveal() {
    // Configuración base
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false // Las animaciones solo ocurren una vez
    });

    // Hero section - fade desde la izquierda
    sr.reveal('.fade-left', {
        origin: 'left',
        distance: '80px',
        delay: 100
    });

    // Hero image - escala
    sr.reveal('.fade-scale', {
        scale: 0.85,
        duration: 1200,
        delay: 300
    });

    // Secciones que suben
    sr.reveal('.fade-up', {
        origin: 'bottom',
        distance: '50px',
        delay: 150
    });

    // Skills cards con intervalo
    sr.reveal('.skills__container .card-wrapper', {
        interval: 100,
        scale: 0.9
    });

    // Projects cards con intervalo
    sr.reveal('.project-wrapper', {
        interval: 150,
    distance: '0px',   // no se mueve
    opacity: 0,        // empieza invisible
    duration: 800
    });

    // Contact form desde arriba
    sr.reveal('.fade-down', {
        origin: 'top',
        distance: '60px',
        delay: 200
    });
}