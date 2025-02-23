const scrollRevealOpject = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header__container h1", scrollRevealOpject);
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOpject,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOpject,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .container__a", {
  ...scrollRevealOpject,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const meunButton = document.querySelector(".nav__menu__btn"),
  navLinks = document.querySelector(".nav__links"),
  meunButtonIcon = meunButton.querySelector("i");

meunButton.addEventListener("click", (el) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  meunButtonIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  meunButtonIcon.setAttribute("class", "ri-menu-line");
});
