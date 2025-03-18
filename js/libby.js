console.log("test")

const navbar = document.querySelector(".navbar")

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50){
            navbar.classList.add("navbarScrolled");
        } else {
            navbar.classList.remove("navbarScrolled");
        }
    })
})