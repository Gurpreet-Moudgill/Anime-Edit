const menu = document.querySelector('#mobile_view');
const links = document.querySelector('.nav_menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);