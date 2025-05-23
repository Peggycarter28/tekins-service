document.getElementById("year").textContent = new Date().getFullYear();
const hamburger = document.querySelector(".hamburger-menu");

window.addEventListener("scroll", function () {
  const mobileNav = this.document.querySelector(".mobile-nav");
  const navBar = document.querySelector("nav");
  if (window.scrollY > 0) {
    mobileNav.classList.add("nav-scrolled");
    navBar.classList.add("nav-scrolled");
  } else {
    mobileNav.classList.remove("nav-scrolled");
    navBar.classList.remove("nav-scrolled");
  }
});

hamburger.addEventListener("click", function () {
  const mobileNav = this.document.querySelector(".mobile-nav");
  if (mobileNav.classList.contains("nav-open")) {
    mobileNav.classList.remove("nav-open");
    hamburger.setAttribute("aria-expanded", "false");
  } else {
    mobileNav.classList.add("nav-open");
    hamburger.setAttribute("aria-expanded", "true");
  }
});
