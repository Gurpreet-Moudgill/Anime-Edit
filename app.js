const menu = document.querySelector('#mobile_view');
const links = document.querySelector('.nav_menu');
const navlogo = document.querySelector('#nav_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu while scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#homepage')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#service-page')
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

}