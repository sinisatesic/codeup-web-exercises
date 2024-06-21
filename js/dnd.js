console.log('test')

let api = `https://www.dnd5eapi.co/api/`

const getMonsters = async () => {
    const monsterResponse = await fetch(api + `monsters`)
    const monsterResponseJSON = await monsterResponse.json();

    console.log(monsterResponseJSON);
}
getMonsters();

const getSpells = async () => {
    const spellResponse = await fetch(api + `spells`)
    const spellResponseJSON = await spellResponse.json();

    console.log(spellResponseJSON)
}
getSpells();

const getFeatures = async () => {
    const featureResponse = await fetch(api + `features`)
    const featureResponseJSON = await featureResponse.json();

    console.log(featureResponseJSON);
}
getFeatures();