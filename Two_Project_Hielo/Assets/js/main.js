function menuToggle() {
  
  let abrir = document.getElementById('menu')
  let someMenu = document.querySelector('.menu--hamburger')

  if(abrir.classList.contains('menu-toggle') == false) {
    abrir.classList.add('menu-toggle')
    someMenu.style.display = 'none'
  }
}

function fechamenu() {
  let fechar = document.getElementById('menu')
  let someMenu = document.querySelector('.menu--hamburger')

  if (fechar.classList.contains('menu-toggle') == true) {
    fechar.classList.remove('menu-toggle')
    someMenu.style.display = 'flex'
  }
}
/*
let sliderPointers = document.querySelector('.sliders-pointers')
let pointer = document.querySelectorAll('.banner .pointer');

pointer[1].addEventListener('click', () => {
    if(pointer[1].classList.contains('active') === false) {
      pointer[1].classList.add('active');
      pointer[0].classList.remove('active');
    }else {
      pointer[0].classList.add('active');
      pointer[1].classList.remove('active');
    }
  
});
*/

