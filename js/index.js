const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}
const headerElement = document.querySelector("header");
window.addEventListener("scroll", function (event) {
  if (window.scrollY > 100) {
    headerElement.classList.add("scroll-header");
  } else {
    headerElement.classList.remove("scroll-header");
  }
});
