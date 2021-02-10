const menuBtn = document.querySelector(".menu-btn"),
  mMenu = document.querySelector(".m-menu-box");

menuBtn.addEventListener("click", () => {
  //modal.classList.toggle('active');
  menuBtn.classList.toggle("menu-btn__active");
  mMenu.classList.toggle("m-menu-box__active");
});
