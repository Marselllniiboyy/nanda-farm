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
    // Clone cards for infinite loop effect
    const sliderChildren = [...slider.children];
    // Clone enough items to fill the screen + some buffer
    sliderChildren.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });

    let isHovered = false;
    let scrollPos = 0;
    const speed = 0.5; // Lower is slower/smoother

    // Initial scroll position (to allow scrolling back initially if needed, logic simplified below)

    function animateScroll() {
        if (!isHovered) {
            scrollPos += speed;
            // logic to loop
            // If we have scrolled past the original set width (approx)
            // We need to calculate the width of the original set.
            // Simplified: loop when scrollLeft hits a simplified max

            // Actually, best way for infinite loop with clones:
            // Scroll normally. If scrollLeft + clientWidth >= scrollWidth, reset to 0?
            // No, reset to "start of clones".

            // Let's use simple logic: scroll. If >= half width (since we doubled content), reset to 0.
            // This assumes we cloned EVERYTHING.

            if (slider.scrollLeft >= (slider.scrollWidth / 2)) {
                slider.scrollLeft = 0;
                scrollPos = 0;
            } else {
                slider.scrollLeft = scrollPos;
            }
        } else {
            // Update scrollPos to match current scrollLeft in case user manually scrolled
            scrollPos = slider.scrollLeft;
        }
        requestAnimationFrame(animateScroll);
    }

    // Start
    requestAnimationFrame(animateScroll);

    // Pause on interactions
    slider.addEventListener('mouseenter', () => { isHovered = true; });
    slider.addEventListener('mouseleave', () => { isHovered = false; });
    slider.addEventListener('touchstart', () => { isHovered = true; });
    slider.addEventListener('touchend', () => { isHovered = false; });
}
