const navbarNav = document.querySelector(".navbar .navbar-nav");
const hamburgeMenu = document.querySelector(".menu");

hamburgeMenu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
  console.log(navbarNav);
});

document.addEventListener("click", function (e) {
  if (!hamburgeMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
