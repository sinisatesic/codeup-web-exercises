// console.log("test")

const navbar = document.querySelector(".navbar");
const cards = document.querySelectorAll(".card");
const cardCenter = document.querySelector(".cardCenter");
const cardBody = document.querySelector(".card-body");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");

document.addEventListener("DOMContentLoaded", () => {

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