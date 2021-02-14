const menu = document.querySelector('[alt="menu"]');
const cancelBtn = document.querySelector('.cancel-icon');
const sideNav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const avatar = document.querySelector("#account-container-desktop");

// control mobile view navlink slide-in and slide-out animations
menu.addEventListener("click", () => {
  sideNav.classList.toggle("open-nav-links");
});

cancelBtn.addEventListener("click", () => {
  setTimeout(() => {
    sideNav.classList.toggle("open-nav-links");
  }, 10);
});

const mouseOverEvt = (e) => {
  const liFlag = Boolean(e.target.closest(".nav-link").lastElementChild?.className);
  if (liFlag &&  window.innerWidth < 912) {
    e.target.closest(".nav-link").lastElementChild.style.display = "block";
  }
}

navLinks.forEach((li) => {
  li.addEventListener("mouseover", mouseOverEvt);
  li.addEventListener("click", mouseOverEvt);

  li.addEventListener("mouseout",(e) => {
    const liFlag = Boolean(e.target.closest(".nav-link").lastElementChild?.className);
    if (liFlag && window.innerWidth < 912 ) {
      e.target.closest(".nav-link").lastElementChild.style.display = "none";
    }
  });
});

// control desktop modal pop-in and pop-out

avatar.addEventListener("mouseover", (e) => {
  if ( window.innerWidth > 912 ) {
    e.target.closest("#account-container-desktop").lastElementChild.style.display = "block";
  }
});

avatar.addEventListener("mouseout", (e) => {
  if ( window.innerWidth > 912 ) {
    e.target.closest("#account-container-desktop").lastElementChild.style.display = "none";
  }
});

navLinks.forEach(li => {
  li.addEventListener("mouseover",(e) => {
    if ( window.innerWidth > 912 ) {
      if (e.target.closest(".nav-link") && e.target.closest(".nav-link").lastElementChild.tagName === "DIV") {
        e.target.closest(".nav-link").lastElementChild.style.display = "block";
      }
    }
  });

  li.addEventListener("mouseout",(e) => {
    if ( window.innerWidth > 912 && e.target.closest(".nav-link").lastElementChild.tagName === "DIV") {
      e.target.closest(".nav-link").lastElementChild.style.display = "none";
    }
  });
});
