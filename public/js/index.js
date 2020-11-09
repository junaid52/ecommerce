const html = document.querySelector('html');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('#close-btn')
const megaMenu = document.querySelector('#mega-menu');
const menuContent = document.querySelector('.mega-menu-content')
let num = 0;
let str = '';
function showMegaMenu() {
    html.style.overflowY = 'hidden';
    megaMenu.style.display = 'block';
    num = num + 5;
    str = `${num}%`;
    megaMenu.style.width = str;
    let animate = requestAnimationFrame(showMegaMenu);
    if(str === '100%') {
        menuContent.style.display = 'block';
    cancelAnimationFrame(animate);
    }
}
function closeMegaMenu() {
html.style.overflowY = 'scroll';
menuContent.style.display = 'none';
num = num - 5;
str = `${num}%`;
megaMenu.style.width = str;
let animate = requestAnimationFrame(closeMegaMenu);
if(str === '0%') {
    menuContent.style.display = 'none';
    cancelAnimationFrame(animate);
}
}
hamburger.addEventListener('click', showMegaMenu);
closeBtn.addEventListener('click', closeMegaMenu)