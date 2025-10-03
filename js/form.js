export function initForm() {
    // Lógica del envío
    const contactForm = document.getElementById('contact-form');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    let isSending = false;

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Función para validar el dominio del correo electrónico
    function isValidDomain(email) {
        const validDomains = ["gmail.com", "yahoo.com", "outlook.com"]; 
        const domain = email.split('@')[1];
        return validDomains.includes(domain);
    }

    // Función para mostrar el mensaje y ocultarlo después de unos segundos
    function showMessage(message, type) {
        const formMessage = document.getElementById('form-message');
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Ocultar el mensaje automáticamente después de 5 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000); // 5000 ms = 5 segundos
    }

    contactForm.addEventListener('submit',  async (e) => {
        e.preventDefault();
        
        if (isSending) return;

        const email = document.querySelector('input[name="email"]').value;

        // Validar si el correo tiene un formato válido
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return; // Detiene el envío si el correo no es válido
        }

        // Validar si el dominio del correo está permitido
        if (!isValidDomain(email)) {
            showMessage('The email domain is not allowed.', 'error');
            return; // Detiene el envío si el dominio no está permitido
        }

        // Bloquear múltiples envíos
        isSending = true;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

          // Enviar los datos con fetch a FormBold directamente
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                showMessage('Your message has been sent successfully!', 'success');
                contactForm.reset();
            } else {
                showMessage('There was an error sending your message. Please try again later.', 'error');
            }
        } catch {
            showMessage('There was an error sending your message. Please try again later.', 'error');
        } finally {
            isSending = false;
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send message';
        }
    });
}