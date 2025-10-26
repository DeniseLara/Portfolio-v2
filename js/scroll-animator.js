export function initScroll() {
    new ScrollAnimator();
}

// ===== Scroll Animation and Navbar Behavior ===== //
class ScrollAnimator { 
    constructor() { 
        this.header = document.querySelector('.header'); 
        this.sections = document.querySelectorAll('section[id]')
        this.init(); 
    } 
    
    init() { 
        this.observeElements();
        this.setupScrollListener();
        this.setupSmoothScroll(); 
    } 
    

    observeElements() {
        const elements = document.querySelectorAll("[data-scroll-animate]");
        const sequentialMap = {
            '.project-wrapper': 200,
            '.card-wrapper': 100,
        };

        elements.forEach(el => {
            let delay = 0;
            for (const selector in sequentialMap) {
                if (el.matches(selector)) {
                    const index = Array.from(document.querySelectorAll(selector)).indexOf(el);
                    delay = index * sequentialMap[selector];
                }
            }

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('animate'), delay);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(el);
        });
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