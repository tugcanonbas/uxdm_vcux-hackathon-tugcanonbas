
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initParallax();
    initScrollSpy();
});

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
}

function initParallax() {
    const heroBg = document.querySelector('.hero-bg-layer');
    if (!heroBg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Limit parallax to the hero section area to save performance
        if (scrolled > 1000) return;

        const val = scrolled * 0.4;
        heroBg.style.transform = `translateY(${val}px)`;
    });
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section.content-section');
    const navLinks = document.querySelectorAll('.toc-nav a');
    
    // Add default active to first link if exists
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Update nav
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -60% 0px' // Trigger slightly before center
    });

    sections.forEach(section => observer.observe(section));
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Offset for sticky header if needed
                    behavior: 'smooth'
                });
            }
        });
    });
}
