const menuBtn = document.querySelector(".header__meuhb");
const navList = document.querySelector(".header__nav")
menuBtn.addEventListener("click", () => {
  navList.classList.toggle("ativo")
})