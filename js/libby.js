const cards = document.querySelectorAll(".card");


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50){
            navbar.classList.add("navbarScrolled");
        } else {
            navbar.classList.remove("navbarScrolled");
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