document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    initCVTilt();
    // Initialize click interactions
    initCardClick();
});

function initTimeline() {
    const timelines = document.querySelectorAll('.cv-timeline');
    
    // Create scroll progress lines for each timeline
    timelines.forEach(timeline => {
        const line = document.createElement('div');
        line.className = 'cv-scroll-line';
        timeline.prepend(line);
    });

    const items = document.querySelectorAll('.cv-timeline-item');
    const scrollLines = document.querySelectorAll('.cv-scroll-line');

    // Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));

    // Scroll handler for Line Draw & Focus effect
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const centerPoint = windowHeight / 2;

        // Update Line Height
        timelines.forEach((timeline, index) => {
            const rect = timeline.getBoundingClientRect();
            const top = rect.top;
            const height = rect.height;
            
            // Calculate how much of the timeline is past the "read point" (let's say 1/3 down screen)
            // Or just track the viewport center relative to timeline
            let progress = (windowHeight * 0.6 - top);
            
            // Clamp
            if (progress < 0) progress = 0;
            if (progress > height) progress = height;
            
            if (scrollLines[index]) {
                scrollLines[index].style.height = `${progress}px`;
            }
        });

        // Focus Effect
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + (rect.height / 2);
            
            // Distance from center of viewport
            const dist = Math.abs(centerPoint - itemCenter);
            
            // If within 300px of center, it's "active-ish"
            const maxDist = 400;
            let scale = 1;
            let opacity = 0.5; // Dimmed by default
            let blur = 2;

            if (dist < maxDist) {
                const ratio = 1 - (dist / maxDist); // 1 at center, 0 at edges
                opacity = 0.5 + (ratio * 0.5); // 0.5 to 1.0
                scale = 1 + (ratio * 0.05); // Slight scale up
                blur = 2 - (ratio * 2); // 2px to 0px blur
                
                if (ratio > 0.8) {
                    item.classList.add('focused');
                } else {
                    item.classList.remove('focused');
                }
            } else {
                item.classList.remove('focused');
            }

            // Apply interactive reading styles
            // We use CSS variables to performant updates
            // BUT: If the card is active (clicked), ignore these updates to prevent jank
            if (!item.classList.contains('active-card')) {
                item.style.setProperty('--focus-opacity', opacity);
                item.style.setProperty('--focus-scale', scale);
                item.style.setProperty('--focus-blur', `${blur}px`);
            } else {
                // Ensure variables are reset for active state (though CSS !important handles most)
                item.style.setProperty('--focus-opacity', 1);
                item.style.setProperty('--focus-scale', 1.05);
                item.style.setProperty('--focus-blur', '0px');
            }
        });
    });
}

function initCVTilt() {
    const cards = document.querySelectorAll('.cv-timeline-content');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const item = card.closest('.cv-timeline-item');
            // Allow tilt on any item unless it is "locked" (active-card)
            if (item.classList.contains('active-card')) return; 

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -1;
            const rotateY = ((x - centerX) / centerX);

            card.style.transform = `perspective(1000px) rotateX(${rotateX * 2}deg) rotateY(${rotateY * 2}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            const item = card.closest('.cv-timeline-item');
            if (item.classList.contains('active-card')) return; // Don't reset if active

            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

function initCardClick() {
    const items = document.querySelectorAll('.cv-timeline-item');
    const body = document.body;

    // Handle Card Clicks
    items.forEach(item => {
        const content = item.querySelector('.cv-timeline-content');
        
        content.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from firing immediately
            
            const isActive = item.classList.contains('active-card');
            
            // Deactivate all first
            items.forEach(i => i.classList.remove('active-card'));
            body.classList.remove('has-active-card');
            
            // If it wasn't active before, make it active now
            if (!isActive) {
                item.classList.add('active-card');
                body.classList.add('has-active-card');
                
                // Optional: Scroll to center
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Handle Outside Clicks
    document.addEventListener('click', (e) => {
        if (body.classList.contains('has-active-card')) {
            items.forEach(i => i.classList.remove('active-card'));
            body.classList.remove('has-active-card');
        }
    });
}
