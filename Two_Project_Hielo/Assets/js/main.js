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