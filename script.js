function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile-container');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.hamburger').src="./assets/tabler-icon-menu-2.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.hamburger').src="./assets/tabler-icon-x.png"
    }
}