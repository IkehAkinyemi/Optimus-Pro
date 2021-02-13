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
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(li => {
  li.addEventListener("mouseover",(e) => {
    if ( window.innerWidth > 912 ) {
      if (e.target.closest(".nav-link")) {
        console.log(e.target.closest(".nav-link").firstElementChild)
        e.target.closest(".nav-link").firstElementChild.style.display = "block";
      }
    }
  });

  li.addEventListener("mouseout",(e) => {
    if ( window.innerWidth > 912 ) {
      e.target.closest(".nav-link").firstElementChild.style.display = "none";
    }
  });
});
