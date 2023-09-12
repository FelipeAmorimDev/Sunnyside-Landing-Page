const menuBtn = document.querySelector(".header__meuhb");
const navList = document.querySelector(".header__nav")


function toogleMenu(){
  navList.classList.toggle("ativo")
  menuBtn.classList.toggle("menu-opacity")
}

menuBtn.addEventListener("click",toogleMenu)