const btnMobile = document.getElementById('btn-menu');


function openMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('open')
}



btnMobile.addEventListener('click',openMenu);