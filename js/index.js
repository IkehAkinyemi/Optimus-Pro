const menu = document.querySelector('[alt="menu"]');
const cancelBtn = document.querySelector('.cancel-icon');
const sideNav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

// control mobile view navlink slide-in and slide-out animations
menu.addEventListener("click", () => {
  sideNav.classList.toggle("open-nav-links");
});

cancelBtn.addEventListener("click", () => {
  setTimeout(() => {
    sideNav.classList.toggle("open-nav-links");
  }, 10);
});

navLinks.forEach((li) => {
  li.addEventListener("mouseover", (e) => {
    const liFlag = Boolean(e.target.closest(".nav-link").firstElementChild?.className);
    if (liFlag &&  window.innerWidth < 912) {
      e.target.closest(".nav-link").firstElementChild.style.display = "block";
    }
  });

  li.addEventListener("mouseout",(e) => {
    const liFlag = Boolean(e.target.closest(".nav-link").firstElementChild?.className);
    if (liFlag && window.innerWidth < 912 ) {
      e.target.closest(".nav-link").firstElementChild.style.display = "none";
    }
  });
});

// control desktop modal pop-in and pop-out
navLinks.forEach(li => {
  li.addEventListener("mouseover",(e) => {
    if ( window.innerWidth > 912 ) {
      if (e.target.closest(".nav-link")) {
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
