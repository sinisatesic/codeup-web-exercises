"use strict";

(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun"); //unshift permanently changes the original array
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift("The Sun");
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto");
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var earthIndex = planets.indexOf("Earth");
    console.log(earthIndex);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();
