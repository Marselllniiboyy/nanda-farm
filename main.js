/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

/* AUTO SCROLL SLIDER */
const slider = document.getElementById('product-slider');

if (slider) {
    let scrollAmount = 0;
    const scrollStep = 1; // Speed of scroll
    const delay = 30; // Time in ms (lower is smoother/faster)
    let autoScrollInterval;

    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            slider.scrollLeft += scrollStep;
            scrollAmount += scrollStep;

            // Check if we've scrolled to the end
            if (Math.ceil(slider.scrollLeft) >= (slider.scrollWidth - slider.clientWidth)) {
                // Determine behavior: Loop back to start smoothly or jump
                // For "Netflix infinite loop feel", we usually need duplicated content. 
                // Simple reset for now:
                slider.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, delay);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    // Start on load
    startAutoScroll();

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);
    // Pause on touch
    slider.addEventListener('touchstart', stopAutoScroll);
    slider.addEventListener('touchend', startAutoScroll);
}
