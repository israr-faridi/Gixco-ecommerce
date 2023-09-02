const header = document.querySelector(".header");
const navIcon = document.querySelector(".mobile_icon");
const toglenav = () => {
    header.classList.toggle("active")
}


navIcon.addEventListener("click", () => toglenav());
