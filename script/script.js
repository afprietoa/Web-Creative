const btnOpen = document.getElementById('btn-menu-active');
const menuMobil = document.getElementById('main-menu-mobil');
const divMenu = document.getElementById('styles-menu');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 300){
        divMenu.classList.add('scrolled');
    }else{
        divMenu.classList.remove('scrolled');
    }
})

btnOpen.addEventListener('click', () =>{
    menuMobil.classList.toggle('active');
})