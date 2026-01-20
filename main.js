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

/* LANGUAGE SWITCHER */
const translations = {
    "en": {
        "nav_home": "Home",
        "nav_pigs": "Our Pigs",
        "nav_about": "About Us",
        "nav_contact": "Contact",
        "hero_title": "Premium Healthy <br> Pigs For You",
        "hero_desc": "Expertly raised livestock at Nanda Farm. We ensure high-quality breeds for breeding, farming, or events.",
        "hero_btn": "View Livestock",
        "products_title": "Available Stock",
        "products_subtitle": "Top Quality Breeds - Swipe to see more",
        "product_super_piglet": "Super Piglet",
        "product_duroc": "Duroc Breed",
        "product_large_white": "Large White",
        "product_super_piglet_batch2": "Super Piglet (Batch 2)",
        "product_duroc_batch2": "Duroc Breed (Batch 2)",
        "buy_now": "Buy Now",
        "about_title": "Why Choose <br> Nanda Farm?",
        "about_desc": "We are dedicated to sustainable and ethical farming. Our pigs are fed with high-nutrition food and raised in a clean environment to ensure the best meat quality and health.",
        "feature_healthy": "100% Healthy",
        "feature_organic": "Organic Feed",
        "feature_price": "Best Price",
        "owner_title": "Meet the Owner",
        "owner_subtitle": "Dedication & Passion",
        "owner_profession": "Young Farmer & Entrepreneur",
        "owner_desc": "At just 18 years old, Komang Kris Nanda is driving the vision of Nanda Farm with energy and commitment. His passion for sustainable livestock farming ensures that every animal is raised with the utmost care and quality.",
        "contact_title": "Contact Us",
        "contact_subtitle": "Ready to order?",
        "contact_wa": "Chat on WhatsApp",
        "footer_desc": "Providing high quality livestock since 2023."
    },
    "id": {
        "nav_home": "Beranda",
        "nav_pigs": "Ternak Kami",
        "nav_about": "Tentang Kami",
        "nav_contact": "Kontak",
        "hero_title": "Babi Sehat Premium <br> Untuk Anda",
        "hero_desc": "Diternakkan secara ahli di Nanda Farm. Kami memastikan bibit berkualitas tinggi untuk pembibitan, peternakan, atau acara ada.",
        "hero_btn": "Lihat Ternak",
        "products_title": "Stok Tersedia",
        "products_subtitle": "Bibit Kualitas Terbaik - Geser untuk melihat lebih banyak",
        "product_super_piglet": "Anakan Super",
        "product_duroc": "Jenis Duroc",
        "product_large_white": "Large White",
        "product_super_piglet_batch2": "Anakan Super (Batch 2)",
        "product_duroc_batch2": "Jenis Duroc (Batch 2)",
        "buy_now": "Beli Sekarang",
        "about_title": "Mengapa Memilih <br> Nanda Farm?",
        "about_desc": "Kami berdedikasi pada peternakan yang berkelanjutan dan etis. Babi kami diberi makan nutrisi tinggi dan dibesarkan di lingkungan yang bersih untuk memastikan kualitas daging dan kesehatan terbaik.",
        "feature_healthy": "100% Sehat",
        "feature_organic": "Pakan Organik",
        "feature_price": "Harga Terbaik",
        "owner_title": "Pemilik",
        "owner_subtitle": "Dedikasi & Semangat",
        "owner_profession": "Peternak & Pengusaha Muda",
        "owner_desc": "Di usia yang baru 18 tahun, Komang Kris Nanda mendorong visi Nanda Farm dengan penuh energi dan komitmen. Semangatnya untuk peternakan berkelanjutan memastikan setiap hewan dibesarkan dengan perawatan dan kualitas terbaik.",
        "contact_title": "Hubungi Kami",
        "contact_subtitle": "Siap memesan?",
        "contact_wa": "Chat via WhatsApp",
        "footer_desc": "Menyediakan ternak berkualitas tinggi sejak 2023."
    }
};

const langOptions = document.querySelectorAll('.lang-option');
const langKey = 'nanda-farm-lang';
let currentLang = localStorage.getItem(langKey) || 'en'; // Default English

function setLanguage(lang) {
    // Update translations
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Use innerHTML to preserve <br>
        }
    });

    // Update active class
    langOptions.forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    // Save preference
    localStorage.setItem(langKey, lang);
    currentLang = lang;
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    if (currentLang) {
        setLanguage(currentLang);
    }
});

// Event Listeners
langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        setLanguage(lang);
    });
});
