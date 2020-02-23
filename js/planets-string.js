"use strict";

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var stringWithBreaks = planetsArray.join("<br>");
    console.log(stringWithBreaks);


    //it would be useful when utilizing the string on html file; it would create new line for each of the string components

 // using a loop for the bonus:

var listLoopString = '<ul>'; //beginning of our unordered list
planetsArray.forEach(function(planet){
listLoopString += '<li>';
    listLoopString += planet; //actual list item inside the unordered list
    listLoopString += '</li>';
});
listLoopString += '</ul>'; // end of our unordered list

    // in one line
    var listString = '<ul><li>' + planetsArray.join("</li><li>") + '</li></ul>';
    //console.log(listString);


});
