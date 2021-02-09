/*Tabs*/

document.querySelectorAll(".tabs-triggers__item").forEach((i) =>
  i.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".tabs-triggers__item")
      .forEach((child) =>
        child.classList.remove("tabs-triggers__item--active")
      );
    document
      .querySelectorAll(".tabs-content__item")
      .forEach((child) => child.classList.remove("tabs-content__item--active"));
    i.classList.add("tabs-triggers__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  })
);

document.querySelector(".tabs-triggers__item").click();
