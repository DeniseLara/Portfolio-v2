export function initScroll() {
    // Obtener todos los enlaces y secciones
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section');
    const header = document.getElementById('nav');

    // Función para activar el link correspondiente
    function setActiveLink() {
        let currentSection = null;

        // Detectar cuál es la sección visible
        sections.forEach(section => {
        // Usamos getBoundingClientRect() para obtener la posición y tamaño
        const rect = section.getBoundingClientRect();
        
        // Comprobamos si la sección está visible en la ventana
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section.id;
        }
        });

        // Quitar la clase 'active' de todos los links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Añadir la clase 'active' al link correspondiente
        if (currentSection) {
            const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    // Activar 'Home' por defecto al cargar la página
    document.getElementById('home').classList.add('active');

    // Escuchar el scroll para actualizar el link activo
    window.addEventListener('scroll', setActiveLink);

    /** CHANGE BACKGROUND OF THE HEADER **/
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('bg-header');
        } else {
            header.classList.remove('bg-header');
        }
    }

    window.addEventListener('scroll', updateHeader);

    setActiveLink()
    updateHeader()
}