const menu = document.querySelector('[alt="menu"]');
const cancelBtn = document.querySelector('.cancel-icon');
const sideNav = document.querySelector(".nav-links");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  sideNav.classList.toggle("open-nav-links");
});

sideNav.addEventListener("click", () => {
  sideNav.classList.toggle("open-nav-links");
});