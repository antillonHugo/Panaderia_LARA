let header__icon = document.querySelector('.header__icon');
let header__list = document.querySelector('.header__list');
//let header__icon_bars = document.querySelector('.header__icon-bars');


header__icon.addEventListener('click',e=>{

    //extraemos las clases de la etiqueta i el cual posee los iconos de menu bars 
    let iconomenubars = header__icon.querySelector('i');

    iconomenubars.classList.toggle('fa-regular');
    iconomenubars.classList.toggle('fa-xmark');

    header__list.classList.toggle('header__list-show');
});

