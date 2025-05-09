


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


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cardCenter");
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
})

// card-img-top
// vert-image-services

document.addEventListener("DOMContentLoaded", () => {
    const vertCards = document.querySelectorAll(".vert-cards");
    
    vertCards.forEach(vertCard => {
        const vertCardImage = vertCard.querySelector(".card-img-top");

    
        vertCard.addEventListener("mouseenter", () => {
            vertCardImage.classList.add("cardImgTopAnimation");
            vertCardImage.classList.add("cardImgTopInvis");
        });
    
        vertCard.addEventListener("mouseleave", () => {
            vertCardImage.classList.remove("cardImgTopAnimation");
            vertCardImage.classList.remove("cardImgTopInvis");
        });
    });
})