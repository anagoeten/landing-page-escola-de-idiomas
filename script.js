function menuShow() {
    const menuMobile = document.querySelector('.menu-mobile-container');
    const hamburger = document.querySelector('.hamburger');
    const isOpen = menuMobile.classList.contains('open');

    if (isOpen) {
        menuMobile.classList.remove('open');
        menuMobile.setAttribute('aria-hidden', 'true');
        hamburger.src = './assets/tabler-icon-menu-2.png';
        hamburger.setAttribute('alt', 'Abrir menu');
        hamburger.setAttribute('aria-expanded', 'false');
    } else {
        menuMobile.classList.add('open');
        menuMobile.setAttribute('aria-hidden', 'false');
        hamburger.src = './assets/tabler-icon-x.png';
        hamburger.setAttribute('alt', 'Fechar menu');
        hamburger.setAttribute('aria-expanded', 'true');
    }
}


const hiden = document.querySelectorAll('.hiden');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove ('show')
        }
    })
})

hiden.forEach((element) => {
    myObserver.observe(element);
});

// A11y enhancements for hamburger control
window.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.querySelector('.menu-mobile-container');
    const hamburger = document.querySelector('.hamburger');
    if (!menuMobile || !hamburger) return;

    // Ensure menu has an id to be referenced by aria-controls
    if (!menuMobile.id) {
        menuMobile.id = 'menu-mobile';
    }
    menuMobile.setAttribute('aria-hidden', 'true');

    // Enhance the image as a button-like control
    hamburger.setAttribute('role', 'button');
    hamburger.setAttribute('tabindex', '0');
    hamburger.setAttribute('aria-controls', menuMobile.id);
    hamburger.setAttribute('aria-expanded', 'false');

    // Keyboard support
    hamburger.addEventListener('keydown', (e) => {
        const key = e.key;
        if (key === 'Enter' || key === ' ') {
            e.preventDefault();
            menuShow();
        }
    });

    // Keyboard navigation for depoimentos slider
    initSliderKeyboardNav('radio-btn', '.depoimentos-manual-navigation .manual-btn', 6);

    // Keyboard navigation for planos slider
    initSliderKeyboardNav('radio-btn', '.planos-manual-navigation .manual-btn', 3);
});

// Generic slider keyboard navigation
function initSliderKeyboardNav(radioNameAttr, labelSelector, totalSlides) {
    const labels = document.querySelectorAll(labelSelector);
    if (!labels.length) return;

    labels.forEach((label, index) => {
        label.setAttribute('tabindex', index === 0 ? '0' : '-1');

        label.addEventListener('keydown', (e) => {
            let targetIndex = index;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                targetIndex = (index + 1) % totalSlides;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                targetIndex = (index - 1 + totalSlides) % totalSlides;
            } else if (e.key === 'Home') {
                e.preventDefault();
                targetIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                targetIndex = totalSlides - 1;
            } else {
                return;
            }

            // Update tabindex and focus
            labels.forEach((l, i) => {
                l.setAttribute('tabindex', i === targetIndex ? '0' : '-1');
                l.setAttribute('aria-selected', i === targetIndex ? 'true' : 'false');
            });

            labels[targetIndex].focus();
            labels[targetIndex].click();
        });
    });
}