function abremenu() {
  
  if(document.querySelector("nav").style.display == 'flex') {
    document.querySelector("nav").style.display = 'none'

  } else {
    document.querySelector("nav").style.display = 'flex'
    document.querySelector(".menu--hamburger").style.display = 'none'
  }

}

function fechamenu() {
  if(document.querySelector("nav").style.display == 'flex') {
    document.querySelector(".menu--fecha").style.display = 'flex'
    document.querySelector("nav").style.display = 'none'
    document.querySelector(".menu--hamburger").style.display = 'flex'
  }
}