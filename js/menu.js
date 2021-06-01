const btnHeader = document.querySelector('.btn-header-mobile');
const mobileMenu = document.querySelector('.menu');
const menuOpen = document.querySelector('.img-open');
const menuClosed = document.querySelector('.img-closed')

menuOpen.addEventListener('click', function() {
    mobileMenu.classList.add('menu-open');
    menuOpen.classList.add('menu-selected');
    menuClosed.classList.remove('menu-selected');
    openMenu();
});

menuClosed.addEventListener('click', function() {
    menuOpen.classList.remove('menu-selected')
    mobileMenu.classList.remove('menu-open');
    menuClosed.classList.add('menu-selected');
    closedMenu();
});