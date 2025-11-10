// ============================================
// CUSTOM SCROLL BEHAVIOR (Header + Active Link)
// ============================================

export function initScroll() {
    new ScrollAnimator();
}

class ScrollAnimator { 
    constructor() { 
        this.header = document.querySelector('.header'); 
        this.sections = document.querySelectorAll('section[id]');
        this.init(); 
    } 
    
    init() { 
        this.setupScrollListener();
        this.setupSmoothScroll(); 
    } 

    setupScrollListener() {
        if (!this.header) return;
        window.addEventListener('scroll', () => {
            this.header.classList.toggle('header--scrolled', window.pageYOffset > 50);
        });
    }
    
    setupSmoothScroll() {
        const updateActiveLink = () => {
            const scrollY = window.pageYOffset;

            this.sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - (window.innerWidth <= 768 ? 100 : 58);
                const sectionId = current.getAttribute('id');
                const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

                if (sectionsClass) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        sectionsClass.classList.add('active-link');
                    } else {
                        sectionsClass.classList.remove('active-link');
                    }
                }
            });
        };

        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
    }
}