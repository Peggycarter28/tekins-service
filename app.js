document.getElementById("year").textContent = new Date().getFullYear();
const mobileNav = document.querySelector(".mobile-nav");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const hamburgerActive = document.querySelector(".hamburger-active");
const hamburgerSpan = document.querySelector(".hamburger-span");

window.addEventListener("scroll", function () {
  const navBar = document.querySelector("nav");
  if (window.scrollY > 0) {
    mobileNav.classList.add("nav-scrolled");
    navBar.classList.add("nav-scrolled");
  } else {
    mobileNav.classList.remove("nav-scrolled");
    navBar.classList.remove("nav-scrolled");
  }
});

hamburgerSpan.addEventListener("click", function () {
  hamburgerActive.classList.toggle("active");
  hamburgerSpan.classList.toggle("hamburger-span-active");
  nav.classList.toggle("active");
  // nav.appendChild("mobile-nav.active");
  mobileNav.classList.toggle("active");
  logo.style.display = "none";
});
