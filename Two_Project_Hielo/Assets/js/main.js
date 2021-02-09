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

let totalSlider = document.querySelector('.sliders')

let slider1 = document.querySelector('.slide1');
let slider2 = document.querySelector('.slide2');
let slider3 = document.querySelector('.slide3');
let slider4 = document.querySelector('.slide4');
let slider5 = document.querySelector('.slide5');

let sliders = [ slider1, slider2, slider3, slider4, slider5];

let sliderPointers = document.querySelector('.sliders-pointers')
let pointer = document.querySelectorAll('.pointer');
let qtPonto = false;

pointer.forEach((ponto, index) => {
  ponto.addEventListener('click', () => {
    if(ponto.classList.contains('active') === true) {
      ponto.classList.remove('active');
      sliders[index].style.zIndex = 4;
    } else {
      sliders[index].previousElementSibling.style.zIndex = 4;
      ponto.previousElementSibling.classList.remove('active');
      ponto.classList.add('active');
      sliders[index].style.zIndex = 5;
    }
  });
});


console.log(totalSlider.children)

