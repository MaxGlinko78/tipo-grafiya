const menuEmpBtn = document.querySelector(".empty-menu__icon"),
  EmpMenu = document.querySelector(".empty-menu-content");

menuEmpBtn.addEventListener("click", () => {
  menuEmpBtn.classList.toggle("empty-btn__active");
  EmpMenu.classList.toggle("empty-menu-content__active");
});
