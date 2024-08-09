// Scroll Animation Function
function scrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const offset = 150; // Offset to trigger the animation before the element is fully visible

        if (elementPosition < windowHeight - offset) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
}

// Event Listener for Scroll
window.addEventListener('scroll', scrollAnimation);

// Initial Check
scrollAnimation();

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});
