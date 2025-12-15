document.addEventListener('DOMContentLoaded', () => {
    initPubsHero();
    initPubCards();
});

function initPubsHero() {
    const canvas = document.getElementById('pubs-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    // Config
    const particleCount = 200; // More dense
    const flowFieldRes = 20; // Resolution of grid
    
    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        initParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.speed = Math.random() * 1 + 0.2;
            this.angle = 0;
            this.size = Math.random() * 1.5;
            this.trail = [];
            this.trailLength = Math.floor(Math.random() * 10 + 5);
            // Color variation: mainly white/grey but some faint brand colors
            const rand = Math.random();
            if (rand > 0.95) this.color = 'rgba(79, 70, 229, 0.4)'; // Indigo
            else if (rand > 0.9) this.color = 'rgba(6, 182, 212, 0.4)'; // Cyan
            else this.color = 'rgba(255, 255, 255, 0.15)'; // White smoke
        }

        update() {
            // Flow field logic
            // Simple sine wave flow based on y and time
            const time = Date.now() * 0.0005;
            // Angle determined by Perlin-ish noise or simple math functions
            // Making it flow horizontally in waves
            this.angle = Math.cos(this.x * 0.005 + time) * Math.PI / 4; // Gentle wave
            // Add vertical drop
            this.angle += Math.PI / 2; // Point down mostly

            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;

            // Wrap around
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;

            // Trail history
            this.trail.push({x: this.x, y: this.y});
            if (this.trail.length > this.trailLength) {
                this.trail.shift();
            }
        }

        draw() {
            ctx.beginPath();
            if (this.trail.length > 1) {
                ctx.moveTo(this.trail[0].x, this.trail[0].y);
                for (let i = 1; i < this.trail.length; i++) {
                    ctx.lineTo(this.trail[i].x, this.trail[i].y);
                }
            } else {
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + 1, this.y + 1);
            }
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.size;
            ctx.stroke();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        // Clear with fade for trailing effect? No, we draw trails manually.
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

function initPubCards() {
    const cards = document.querySelectorAll('.pub-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Subtle tilt
            const rotateX = ((y - centerY) / centerY) * -1; // Invert for natural feel
            const rotateY = ((x - centerX) / centerX);
            
            // Max rotation degrees
            const maxRot = 3;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX * maxRot}deg)
                rotateY(${rotateY * maxRot}deg)
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;
        });
    });
}
