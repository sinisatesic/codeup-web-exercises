"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = true;
if(isAdmin) {
    console.log("Displaying Admin Navbar");
}
//


//TODO Together: Send a 20% off coupon if its users birthday

var isBirthday = true;
if(isBirthday) {
    console.log("Sending Coupon");
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

var isRainy = true;

if(isRainy) {
    alert("It's raining")
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

var currentBalance = 100;
var itemCost = 50;

if(currentBalance > itemCost) {
    alert("You can do it!");
} else {
    alert("Nah son, need mo cream");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//
var numberOfLives = 0;
var isGameOver = true;

if(numberOfLives = isGameOver) {
    alert("Sorry, game over");
}


/////// SIMPLER VERSION: ///////
//
var numberOfLives = 0;

if(numberOfLives === 0) {
    alert("Sorry, game over!");
}





//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

var snowing = true;

if(snowing) {
    alert("It's snowing!");
}

//OR, to include weather variable:


var weather = "snowing"
if (weather === "snowing"){
    alert("It's snowing");
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

var numberInput = 11;
if(numberInput > 10) {
    alert(true);
}


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

function canIHas(input){
    var currentBalance = 100;
    if (currentBalance > input){
        alert("Buy that ish");
    } else {
        alert("Nah son, need mo moolah");
    }
}
//
//
function gameOver(input){
    var numberOfLives = parseFloat(0);
    if (input == numberOfLives){ //note that you tested with trip equal, and "0" came back undefined. It's cause of parsefloat on above var, it will force numerical value
        alert("game over");
    }
}
gameOver(0);
//
//
function isSnowing(input){
    var weather = "snowing"
    if (input === weather){
        alert("it's snowing");
    }
}
isSnowing(weather);
// OR
function isSnowing(input){
    var snowing = true;
    if (input == snowing){
        alert("it's snowing");
    }
}
isSnowing(snowing);
//
//
function isGreaterThanTen(number) {
    if(number > 10) {
        alert(true);
    }
}
isGreaterThanTen(11);



// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

var isAdmin = true;
if(isAdmin) {
    //display specific navbar.
    console.log("displaying admin navbar");
} else {
    console.log("displaying regular navbar");
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"


// var isRaining = false;
//
// if(isRaining) {
//     alert("It's raining");
// } else {
//     alert("have nice day! Ver nice!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 1;
//
// if(numberOfLives === 0) {
//     alert("Sorry, game over");
// } else {
//     alert("Next level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var snowing = false;
//
// if(snowing) {
//     alert("It's snowing");
// } else {
//     alert("Check back later for more details!");
// }


// another way:

// var weather = "snowing";
//
// if(weather === "snowing") {
//     alert("it's snowing");
// } else {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 9;
//
// if(numberInput > 10) {
//     alert("true");
// } else {
//     alert("the number is less than 10");
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.


// function checkIfGameIsOver(numberOfLives) {
//
//     if(numberOfLives === 0) {
//         return "Sorry, game over";
//     } else {
//         return "Next level!";
//     }
// }
//
// console.log(checkIfGameIsOver(0));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// function isItRaining(isRaining) {
//
//     if(isRaining) {
//         alert("It's raining");
//     } else {
//         alert("have nice day! Ver nice!");
//     }
// }
//
// console.log(isItRaining(isRaining));

// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases


// var weather = "raining";
//
// if(weather === "snowing") {
//     alert("It's snowing");
// } else if(weather === "raining") {
//     alert("it's raining");
// } else {
//     alert("have a nice day");
// }


// //TODO Together: refactor the above statement as a function
// function checkWeather(weather) {
//     if(weather === "snowing") {
//         alert("it's snowing");
//     } else if(weather === "raining") {
//         alert("it's raining");
//     } else {
//         alert("Have nice day!");
//     }
// }
//
// console.log(checkWeather("raining"));
// alert(checkWeather("raining"));
//
// Together: PIZZA PREFERENCE EXAMPLE

var pizzaPreference = (prompt("What kind of pizza do you like?")).toLowerCase();
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
}  else if (pizzaPreference === "ham"){
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function trafficLight(color){
    if(color === "green"){
        return "Keep goin bruv!";
    } else if(color === "yellow"){
        return "slow down bruv!";
    } else if(color === "red"){
        return "wait for green light bruv!";
    } else {
        return "careful";
    }
}

console.log(trafficLight("yellow"));





// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way


var success = true;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}
console.log(message);


var success = true;
var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
console.log(message)


//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:



var pizzaPreference = (prompt("What kind of pizza do you like?")).toLowerCase();
console.log("User pizza input: " + pizzaPreference);

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

// AS A FUNCTION :

var pizzaChoice = (prompt("What kind of pizza do you like?")).toLowerCase();
console.log("User pizza input: " + pizzaPreference);

function pizzaExercise(pizzaPreference) {
    var pizzaConfirmation;

    switch(pizzaPreference) {
        case "pineapple and hot sauce":
            pizzaConfirmation = "What a coincidence, that's my favorite!";
            break;
        case "cheese":
            pizzaConfirmation = "Just plain cheese? Okay...";
            break;
        default:
            pizzaConfirmation = pizzaPreference + " isn't my favorite, but let's order some!";
            break;
    } //end of switch

    return pizzaConfirmation;
}

console.log(pizzaExercise(pizzaChoice));


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.



//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

