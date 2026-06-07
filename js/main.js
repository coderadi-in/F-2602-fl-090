// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fade-in animation on scroll using Intersection Observer
function initFadeInAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    // Observe all sections and cards
    const elements = document.querySelectorAll('section');

    elements.forEach((element) => {
        observer.observe(element);
    });
}

// Handle FAQ expand/collapse with smooth animation
function initFAQHandler() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        item.addEventListener('toggle', (e) => {
            if (e.target.open) {
                // Scroll to make the open FAQ visible
                e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initFadeInAnimation();
    initFAQHandler();
});

// // Stagger fade-in animations for cards
// function addStaggerDelay() {
//     const cardSelectors = [
//         '.testimonial-card',
//         '.methodology-step',
//         '.case-study',
//         '.pricing-card'
//     ];

//     cardSelectors.forEach((selector) => {
//         const cards = document.querySelectorAll(selector);
//         cards.forEach((card, index) => {
//             card.style.animationDelay = `${index * 0.1}s`;
//         });
//     });
// }

// Call after DOM loads
document.addEventListener('DOMContentLoaded', initFadeInAnimation);
