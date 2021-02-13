// control mobile view navlink slide-in and slide-out animations
const menu = document.querySelector('[alt="menu"]');
const cancelBtn = document.querySelector('.cancel-icon');
const sideNav = document.querySelector(".nav-links");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  sideNav.classList.toggle("open-nav-links");
});

sideNav.addEventListener("click", () => {
  setTimeout(() => {
    sideNav.classList.toggle("open-nav-links");
  }, 500);
});

// control desktop modal pop-in and pop-out
const 
