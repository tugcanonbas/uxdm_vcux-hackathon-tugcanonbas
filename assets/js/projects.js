document.addEventListener('DOMContentLoaded', () => {
    initProjectCards();
    initHeroCanvas();
});

function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables for spotlight
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // 3D Tilt calculation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Normalize values between -1 and 1
            const rotateX = ((y - centerY) / centerY) * -1; 
            const rotateY = ((x - centerX) / centerX);

            // Apply rotation (max 1.5deg) and lift
            card.style.transform = `perspective(1000px) rotateX(${rotateX * 1.5}deg) rotateY(${rotateY * 1.5}deg) translateY(-4px) scale(1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        });
    });
}

function initHeroCanvas() {
    const canvas = document.getElementById('projects-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    // Config
    const spacing = 40; // Space between grid points
    const mouseRadius = 150;
    
    let mouse = { x: -1000, y: -1000 };

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        createGrid();
    }

    function createGrid() {
        particles = [];
        for (let x = 0; x < width; x += spacing) {
            for (let y = 0; y < height; y += spacing) {
                particles.push({
                    x: x,
                    y: y,
                    originX: x,
                    originY: y,
                    size: 1.5,
                    color: 'rgba(255, 255, 255, 0.15)'
                });
            }
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        const time = Date.now() * 0.001;

        particles.forEach(p => {
            // Calculate distance to mouse
            const dx = mouse.x - p.originX;
            const dy = mouse.y - p.originY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Wave offset based on time
            const wave = Math.sin(p.originX * 0.01 + time) * Math.cos(p.originY * 0.01 + time) * 2;
            
            let targetSize = 1.5;
            let targetColor = 'rgba(255, 255, 255, 0.15)';
            let offsetX = 0;
            let offsetY = 0;

            if (dist < mouseRadius) {
                const force = (mouseRadius - dist) / mouseRadius; // 0 to 1
                
                // Repel/Attract effect
                // Let's make them attract slightly
                const angle = Math.atan2(dy, dx);
                const moveDist = force * 20; // Max move 20px
                
                offsetX = Math.cos(angle) * -moveDist; // - moves away, + moves towards
                offsetY = Math.sin(angle) * -moveDist;

                targetSize = 1.5 + (force * 3); // Grow up to 4.5px
                
                // Color shift based on position
                if (force > 0.5) {
                    targetColor = 'rgba(79, 70, 229, 0.8)'; // Indigo
                } else {
                    targetColor = 'rgba(6, 182, 212, 0.5)'; // Cyan
                }
            }

            // Draw
            ctx.fillStyle = targetColor;
            ctx.beginPath();
            ctx.arc(p.originX + offsetX, p.originY + offsetY + wave, targetSize, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    // Event Listeners
    window.addEventListener('resize', resize);
    
    const heroSection = document.querySelector('.projects-hero');
    heroSection.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    // Init
    resize();
    animate();
}
