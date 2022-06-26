//greensock


window.onload= () => {
    let container = document.getElementById('mainContainer');
    container.classList.add('fadey');
}


let fnLetters = new TimelineMax();
let lnLetters = new TimelineMax();

fnLetters.timeScale(70);

fnLetters.from("#first-name-Z", 25, {
    delay: 2,
    opacity: 0,
    y: 5,
    ease: Expo.easeInOut
}).from("#first-name-O", 25, {
    delay: 2,
    opacity: 0,
    y: 5,
    ease: Expo.easeInOut
}).from("#first-name-E", 25, {
    delay: 2,
    opacity: 0,
    z: 5,
    ease: Expo.easeInOut
}, "-=2");

lnLetters.timeScale(70);

fnLetters.from("#last-name-W", 25, {
    delay: 0.1,
    opacity: 0,
    y: 5,
    ease: Expo.easeIn
}).from("#last-name-O", 25, {
    delay: 0.1,
    opacity: 0,
    y: 5,
    ease: Expo.easeIn
}).from("#last-name-second-O", 25, {
    delay: 0.1,
    opacity: 0,
    y: 5,
    ease: Expo.easeIn
}).from("#last-name-D", 25, {
    delay: 0.1,
    opacity: 0,
    z: 5,
    ease: Expo.easeIn
}, "-=2");


// let lastNameFirstO = document.getElementById('last-name-O');
// let lastNameSecondO = document.getElementById('last-name-second-O');

// document.addEventListener('mousemove', () => {
//     lastNameFirstO.classList.add('moving-letters');
//     lastNameSecondO.classList.add('moving-letters');
// });


// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }