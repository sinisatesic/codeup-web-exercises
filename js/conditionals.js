"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var wouldYouLikeToEnterNumber = (confirm("would you like to enter a number?"));
// if(wouldYouLikeToEnterNumber){
//     var userInputNumber = Number(prompt("What number do you select?"));
//     var isNumber = !isNaN(userInputNumber);
//
//     if(isNumber){
//         if(userInputNumber % 2 === 0){
//             alert("Your number is even");
//         } else if(userInputNumber % 3 === 0){
//             alert("Your number is odd");
//         } else {
//             alert("This is not a number; please enter number");
//         }
//
//         var numberPlusHundred = userInputNumber + 100;
//         alert("Your number plus 100 is " + numberPlusHundred);
//
//         if(userInputNumber < 0){
//             alert("Number is negative");
//         } else {
//             alert("Number is positive");
//         }
//     }else {
//         alert("This is not a number; please enter a number");
//     }
//
//
//
//
// }


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(stringInput) {
    var returnContainer;

    if (stringInput === 'blue') {
        returnContainer = "blue is the color of the sky";
    } else if (stringInput === 'red') {
        returnContainer = "Strawberries are red";
    } else if (stringInput === 'cyan') {
        returnContainer = "I don't know anything about cyan";
    } else {
        returnContainer = "i don't know man";
    }

    return returnContainer;
}




    //

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("blah"));
//
//



// function Fruit(name,color,shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
//
// let melon = new Fruit('melon','green','shape');
// console.log(melon.describe());

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(stringInput) {
    case "blue":
        alert("blue is the color of the sky");
        break;
    case "red":
        alert("strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about cyan");
        break;
    default:
        alert("You're not even talking colors");
        break;
}

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    var userColor = (prompt("Please select a color")).toLowerCase();
    console.log(analyzeColor(userColor));

    alert(analyzeColor(userColor));
/* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber, totalAmount) {
        var bucket;
        if(luckyNumber === 0){
            bucket = totalAmount;
        } else if(luckyNumber === 1){
            bucket = totalAmount - (totalAmount * .10);
        } else if(luckyNumber === 2){
            bucket = totalAmount - (totalAmount * .25)
        } else if(luckyNumber === 3){
            bucket = totalAmount - (totalAmount * .35)
        } else if(luckyNumber === 4){
            bucket = totalAmount - (totalAmount * .50)
        } else {
            bucket = totalAmount - totalAmount;
        }

        return bucket;
    }

    // console.log(calculateTotal(5, 100));
    // function calculateTotal(luckyNumber, totalAmount) {
    //
    //     if(luckyNumber * 1 = totalAmount){
    //         return totalAmount;
    //     } else if(luckyNumber = .10){
    //         return luckyNumber * totalAmount;
    //     } else if(luckyNumber = .25){
    //         return luckyNumber * totalAmount;
    //     } else if(luckyNumber = .5){
    //         return luckyNumber * totalAmount;
    //     } else(luckyNumber = 1){
    //         return luckyNumber * totalAmount;
    //     }
    // }

    // console.log(calculateTotal(1, 100));
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);


//
//user < 15 = not eligible
//user > 15 = eligible
// var userAge = 17;
// var hasPermit = true;
//
// if (userAge < 15) {
//     alert("You're not eligible for a permit");
// } else {
//     //all other possibilities in description
//     //check for user age
//     if (user === 15) {
//         alert("You're eligible for a learner's permit");
//     } else if ((userAge >= 16) && hasPermit) {
//         //older than or equal to 16, AND thy have permit
//         alert("You can obtain driver's license");
//     } else if ((userage >= 16) && !hasPermit) {
//         //16 and older, but has no permit
//         alert("You are not eligible for license");
//     } else {
//         alert("I D K - NEED MORE INFO!");
//     }
// }