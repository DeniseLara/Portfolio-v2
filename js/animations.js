export function initAnimations() {
    //ANIMACIONES
    const sr = ScrollReveal({
        origin: "top",
        distance: "1.5rem",
        duration: 1600,
        delay: 400
    });

    sr.reveal('.principal, .projects');
    sr.reveal('.aboutme', { origin: 'right', distance: "1rem" });
    sr.reveal('.contact', { origin: 'left', distance: "1rem" });
    sr.reveal('.footer', { delay: 300 });
}