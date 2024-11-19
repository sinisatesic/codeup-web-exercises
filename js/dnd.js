

let api = `https://www.dnd5eapi.co/api/`;

let test = document.getElementById("test");
// let thumbnails = document.querySelector('.thumbnail')
// let thumbnailImg = document.querySelector('.thumbnailImg');

// const getMonsters = async () => {
//     const monsterResponse = await fetch(api + `monsters`);
//     const monsterResponseJSON = await monsterResponse.json();

//     console.log(monsterResponseJSON);
// }

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

// const getSpells = async () => {
//     const spellResponse = await fetch(api + `spells`);
//     const spellResponseJSON = await spellResponse.json();

//     console.log(spellResponseJSON);
// }
// getSpells();

// const getFeatures = async () => {
//     const featureResponse = await fetch(api + `features`);
//     const featureResponseJSON = await featureResponse.json();

//     console.log(featureResponseJSON);
// }
// getFeatures();

//event listeners
// thumbnails.addEventListener('mouseover', () => {
//     thumbnailImg.classList.add('animate-bounce');
//     console.log('bounce');
// })
const getMonsters = async () => {
    let monsterResponse;
    let monsterResponseJSON;
    try {
        monsterResponse = await fetch(api + `monsters`);
        monsterResponseJSON = await monsterResponse.json();
        console.log("TESTY TEST TESTTSSTST")
        console.log(monsterResponse)
        console.log(monsterResponseJSON.count);
        console.log(monsterResponseJSON.name)

    } catch(err) {
        console.error(err)
        console.error("ERROR MATE")
    }

    let dynamicP = document.createElement("p");
        // dynamicP.classList.add("mt-5", "line-clamp-3", "text-sm", "leading-6", "text-gray-600");

        monsterResponseJSON.results.forEach((e) => {
            if (e == monsterResponseJSON.results[0]){
                dynamicP.innerHTML = `${e.name}`
                test.appendChild(dynamicP)
            }
        })
}
getMonsters();

// const getSpells = async () => {
//     try {
//         const spellResponse = await fetch(api + `monsters`);
//         const spellResponseJSON = await spellResponse.json();
//         console.log(spellResponseJSON)
//         console.log(spellResponseJSON.count);
//     } catch(err){
//         console.error(err);
//     }
// }
// getSpells();

// const getFeatures = async () => {
//     try {
//         const featureResponse = await fetch(api + `features`);
//         const featureResponseJSON = await featureResponse.json();
//         console.log(featureResponseJSON);
//     } catch(err){
//         console.error(err);
//     }
// }
// getFeatures();


