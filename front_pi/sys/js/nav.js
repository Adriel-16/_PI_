const navM = document.querySelector(".navM");
const menu = document.querySelector(".menu");

navM.addEventListener("click", () => {
    navM.classList.toggle("active");
    menu.classList.toggle("active");
});
