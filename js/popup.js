const headerContactsBtn = document.querySelector(".header-contacts__btn");
const popUp = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

headerContactsBtn.addEventListener("click", () => {
  popUp.classList.add("open");
  popupClose.remove("open");
});
