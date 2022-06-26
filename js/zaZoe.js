
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

