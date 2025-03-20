const cards = document.querySelectorAll(".card");


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navItems = document.querySelectorAll(".navItems")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50){
            navbar.classList.add("navbarScrolled");
            navItems.forEach((item) => {
                item.classList.add("navItemScrolled")
            })
        } else {
            navbar.classList.remove("navbarScrolled");
            navItems.forEach((item) => {
                item.classList.remove("navItemScrolled")
            })
        }
    })
});


cards.forEach(card => {
    const cardImage = card.querySelector(".cardImage");

    card.addEventListener("mouseenter", () => {
        cardImage.classList.remove("rounded-start");
        cardImage.classList.add("cardImageCircleAnimation");
    });

    card.addEventListener("mouseleave", () => {
        cardImage.classList.add("rounded-start");
        cardImage.classList.remove("cardImageCircleAnimation");
    });
});