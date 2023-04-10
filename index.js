const menu = document.querySelector('.menu-icon')
const slideIn = document.querySelector('.slide-in-drawer')
const close = document.querySelector('.tags')
menu.addEventListener('click' , ()=> {
  slideIn.style.display = "block";
})

close.addEventListener('click' , ()=> {
  slideIn.style.display = "none";
})