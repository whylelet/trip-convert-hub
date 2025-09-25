// DW Viagens JavaScript

// Form data state
let formData = {
    name: "",
    email: "",
    phone: "",
    originCity: "",
    destinations: [],
    interests: []
};

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize page
function initializePage() {
    // Populate destinations
    const destinationOptions = [
        "Europa (Paris, Londres, Roma)",
        "Estados Unidos (Orlando, Nova York, Miami)",
        "Caribe (Cancún, Punta Cana, Aruba)",
        "América do Sul (Buenos Aires, Chile, Peru)",
        "Ásia (Dubai, Japão, Tailândia)",
        "África (Egito, Marrocos, África do Sul)",
        "Brasil (Nordeste, Rio, Amazônia)",
        "Oceania (Austrália, Nova Zelândia)"
    ];

    const interestOptions = [
        "Viagens Nacionais",
        "Viagens Internacionais", 
        "Lua de Mel",
        "Viagens em Família",
        "Turismo de Aventura",
        "Cruzeiros",
        "Pacotes Promocionais"
    ];

    // Create destination checkboxes
    const destinationsGrid = document.getElementById('destinationsGrid');
    destinationOptions.forEach((destination, index) => {
        const checkboxItem = document.createElement('div');
        checkboxItem.className = 'checkbox-item';
        
        checkboxItem.innerHTML = `
            <input type="checkbox" id="destination_${index}" value="${destination}">
            <label for="destination_${index}">${destination}</label>
        `;
        
        destinationsGrid.appendChild(checkboxItem);
    });

    // Create interest checkboxes
    const interestsGrid = document.getElementById('interestsGrid');
    interestOptions.forEach((interest, index) => {
        const checkboxItem = document.createElement('div');
        checkboxItem.className = 'checkbox-item checkbox-item-interest';
        
        checkboxItem.innerHTML = `
            <input type="checkbox" id="interest_${index}" value="${interest}">
            <label for="interest_${index}">${interest}</label>
        `;
        
        interestsGrid.appendChild(checkboxItem);
    });

    // Add event listeners for form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const originCityInput = document.getElementById('originCity');

    nameInput.addEventListener('input', (e) => {
        formData.name = e.target.value;
    });

    emailInput.addEventListener('input', (e) => {
        formData.email = e.target.value;
    });

    phoneInput.addEventListener('input', (e) => {
        formData.phone = e.target.value;
    });

    originCityInput.addEventListener('input', (e) => {
        formData.originCity = e.target.value;
    });

    // Add event listeners for destination checkboxes
    destinationsGrid.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const destination = e.target.value;
            if (e.target.checked) {
                if (!formData.destinations.includes(destination)) {
                    formData.destinations.push(destination);
                }
            } else {
                formData.destinations = formData.destinations.filter(d => d !== destination);
            }
        }
    });

    // Add event listeners for interest checkboxes
    interestsGrid.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const interest = e.target.value;
            if (e.target.checked) {
                if (!formData.interests.includes(interest)) {
                    formData.interests.push(interest);
                }
            } else {
                formData.interests = formData.interests.filter(i => i !== interest);
            }
        }
    });

    // Add form submit handler
    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', handleFormSubmit);

    // Add fade-in animation to elements as they appear
    addScrollAnimations();
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
        showToast('Por favor, preencha seu nome e e-mail.', 'error');
        return;
    }

    // Here you would integrate with your API or CRM service
    console.log("Lead capturado:", formData);
    
    showToast('Seus dados foram enviados. Em breve entraremos em contato com as melhores ofertas!');

    // Reset form
    resetForm();
}

// Reset form function
function resetForm() {
    formData = {
        name: "",
        email: "",
        phone: "",
        originCity: "",
        destinations: [],
        interests: []
    };

    // Reset form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('originCity').value = '';

    // Reset checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

// Add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * 1000);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-card, .option-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone formatting function
function formatPhone(phone) {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');
    
    // Format based on length
    if (digits.length === 11) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length === 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    
    return phone;
}

// Add phone formatting on input
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            const formatted = formatPhone(e.target.value);
            if (formatted !== e.target.value) {
                e.target.value = formatted;
            }
        });
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Add click handlers for external links
document.addEventListener('click', (e) => {
    // Handle WhatsApp links
    if (e.target.textContent && e.target.textContent.includes('+55 61 3081-8220')) {
        e.preventDefault();
        window.open('https://wa.me/556130818220', '_blank');
    }
    
    // Handle email links
    if (e.target.textContent && e.target.textContent.includes('contato@dwviagens.com.br')) {
        e.preventDefault();
        window.open('mailto:contato@dwviagens.com.br', '_blank');
    }
});

// Add smooth scrolling for hash links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Add loading state to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Carregando...';
    button.disabled = true;
    
    return () => {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Add error handling for external links
function handleExternalLink(url) {
    try {
        window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('Error opening external link:', error);
        showToast('Erro ao abrir link. Tente novamente.', 'error');
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close toast
    if (e.key === 'Escape') {
        const toast = document.getElementById('toast');
        if (toast.classList.contains('show')) {
            toast.classList.remove('show');
        }
    }
    
    // Enter key on buttons
    if (e.key === 'Enter' && e.target.classList.contains('btn')) {
        e.target.click();
    }
});

// Add accessibility improvements
function improveAccessibility() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, input, a, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid hsl(var(--primary))';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
}

// Initialize accessibility improvements
document.addEventListener('DOMContentLoaded', improveAccessibility);

// Add performance optimizations
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle scroll events here if needed
        }, 100);
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);