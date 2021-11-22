/*
$(document).ready(function(){
    $('#menu').click(function(){
        $('.nav').toggleClass('nav -- active');
    });
});*/

const menu = document.querySelector('#menu');
const nav = document.querySelector('.nav');
const arrow = document.querySelector('.arrow')

menu.addEventListener('click', ()=>{
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        nav.classList.add('visible');
        arrow.classList.remove('arrow');
        arrow.classList.add('no-arrow');
    }else{
        nav.classList.add('hidden')
        nav.classList.remove('visible')
        arrow.classList.remove('no-arrow');
        arrow.classList.add('arrow');
    }
})
