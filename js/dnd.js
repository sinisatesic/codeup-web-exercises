

let api = `https://www.dndeapi.co/api/`;
// let thumbnails = document.querySelector('.thumbnail')
// let thumbnailImg = document.querySelector('.thumbnailImg');

// const getMonsters = async () => {
//     const monsterResponse = await fetch(api + `monsters`);
//     const monsterResponseJSON = await monsterResponse.json();

//     console.log(monsterResponseJSON);
// }
const getMonsters = async () => {
    try {
        const monsterResponse = await fetch(api + `monsters`);
        const monsterResponseJSON = await monsterResponse.json();
        console.log("TESTY TEST TESTTSSTST")
        console.log(monsterResponseJSON)
    } catch(err) {
        console.error(err)
        console.error("ERROR MATE")
    }
}
getMonsters();
// const getMonsters = () => {
//     fetch(api + `monsters`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log("TEST TEST");
//     })
//     .catch(error => console.error(error));
// }
// getMonsters();

const getSpells = async () => {
    const spellResponse = await fetch(api + `spells`);
    const spellResponseJSON = await spellResponse.json();

    console.log(spellResponseJSON);
}
getSpells();

const getFeatures = async () => {
    const featureResponse = await fetch(api + `features`);
    const featureResponseJSON = await featureResponse.json();

    console.log(featureResponseJSON);
}
getFeatures();

//event listeners
// thumbnails.addEventListener('mouseover', () => {
//     thumbnailImg.classList.add('animate-bounce');
//     console.log('bounce');
// })