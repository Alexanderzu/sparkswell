document.querySelector(".nav-menu__button").onclick = function () {
    document.querySelector(".nav-menu__container").classList.toggle("active");
    document.querySelector(".nav-menu__button").classList.toggle("active");
}