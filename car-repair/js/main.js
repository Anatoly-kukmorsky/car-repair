const navBurger = document.querySelector(".header__nav-burger");

navBurger.addEventListener("click", function (e) {
    e.preventDefault();
    navBurger.classList.toggle('nav-active')
});
