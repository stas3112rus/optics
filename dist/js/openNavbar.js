const burger = document.querySelector(".Header__burger");
const navbar = document.querySelector(".Navbar__list");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  navbar.classList.add("Navbar__list_active");
  burger.style.display = "none";
});
