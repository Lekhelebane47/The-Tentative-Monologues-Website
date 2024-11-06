// home.js

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.highlight-card, .hero-content');

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150); // Staggered fade-in effect
    });
}); 
