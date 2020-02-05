"use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
function sayHello(name) {
    return "Hello, " + name;

}

console.log(sayHello('Sini'));
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
sayHello('Sini');
var helloMessage = sayHello('Sini');

console.log(helloMessage);
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
var myName = 'Sini';
sayHello(myName);
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
function isTwo(num) {
    return num === 2;

}

console.log(random);
console.log(isTwo(random));

//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
function calculateTip(percentage, total) {
    return percentage * total;
}

console.log(calculateTip(.20, 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */

var billTotal = Number(prompt("What ya bill total be?"));  //instead of number, here, you can also use parseFloat
var tipPercentage = Number(prompt("What tip percent be ya givin'?")); //same here, regarding parseFloat

var yourTip = calculateTip(billTotal, tipPercentage);

var alertMessage = "Ya tip be " + yourTip + " dollaz";

alert(alertMessage);
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
function applyDiscount(price, discount) {
    return price - (price * discount);
}

console.log(applyDiscount(100, .2));

console.log(applyDiscount(200, .37));


// **BONUS MATERIAL***
// 1.
// function isOdd(number) {
//     return number % 2 !== 0;
// }
//
// console.log(isOdd(4));


// 2.
// function isEven(number) {
//     return number % 2 === 0;
// }
//
// console.log(isEven(26));


//3.
// function identity(input) {
//     return input;
// }
//
// console.log(identity(true));


// //4.
// function isFive(input) {
//     if (input === 5) {
//         return true;
//     }   else {
//         return false;
//     }
// }
//
// console.log(isFive(11)); //no matter what numerical value is placed in input, output will result in 5.

//5.
// function addFive(input) {
//     return input + 5;
// }
//
// console.log(addFive(5));


//6.
// function isMultipleOfFive(input) {
//     return input % 5 === 0;
// }
//
// console.log(isMultipleOfFive(25));


//7.
// function isThree(input) {
// //     if (input === 3) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }
// //
// // console.log(isThree(4)); //this will produce a "false" output, as input is not literally 3.


//8.
// function isMultipleOfThree(input) {
//     return input % 3 === 0;
// }
//
// console.log(isMultipleOfThree(9));


//9.
// function isMultipleOfThreeAndFive(input) {
//     return input % 3 === 0 && input % 5 === 0;
// }
//
// console.log(isMultipleOfThreeAndFive(30));


//10.
// function isMultipleOf(target, n) {
//     return target % n === 0;
// }
//
// console.log(isMultipleOf(25, 5));


//11.
// function isTrue(boolean) {
//     return boolean === true;
// }
//
// console.log(isTrue(true));


//12.
// function isFalse(boolean) {
//     return boolean === false;
// }
//
// console.log(isFalse(false)); //this returns true because boolean indeed equals type and value of boolean false, so boolean input of false is true.


//13.
// function isTruthy(input) {
//    return Boolean(input) === true;
// }
//
// console.log(isTruthy(false));


//14.
// function isFalsy(input) {
//     return Boolean(input) === false;
// }
//
// console.log(isFalsy(false));


//15. //need more context on this one so it comes more naturally, or find a simpler method
// let isVowel = function (letter) {
//     var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//
//     for (var i = 0; i < vowels.length; i++) {
//         if (letter === vowels[i]) {
//             return true;
//         }
//     }
//
//     return false;
//
// };
//
// console.log(isVowel("A"));


//16. //there's got to be a better way!!!!
// function isConsonant(letter) {
//     var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y",
//     "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"];
//
//     for (var i2 = 0; i2 < consonants.length; i2++) {
//         if (letter === consonants[i2]) {
//             return true;
//         }
//     }
//
//     return false;
// };
//
// console.log(isConsonant("j"));


//17.//beautiful function below - good stuff, me
// function isCapital(letter) {
//     return letter === letter.toUpperCase();
// }
//
// console.log(isCapital("G"));


//18.//again, so nice::
// function isLowerCase(letter) {
//     return letter === letter.toLowerCase();
// }
//
// console.log(isLowerCase("z"));
//


//19.
// function isSpace(letter) {
//     return letter === " ";
// }
//
// console.log(isSpace(" "));
//


//20.
// function isZero(number) {
//     return number === 0;
// }
//
// console.log(isZero(0));


//21.
// function notZero(input) {
//     return input !== 0;
// }
//
// console.log(notZero(0));


//22.
// function lowerCase(string) {
//     return string === string.toLowerCase();
// }
//
// console.log(lowerCase("sini's back"));


//23.
// function double(n) {
//     return n * 2;
// }
//
// console.log(double(10));


//24.
// function triple(n) {
//     return n * 3;
// }
//
// console.log(triple(9));



//25.
// function quadruple(n) {
//     return n * 4;
// }
//
// console.log(quadruple(10));


//26.
// function half(n) {
//     return n / 2;
// }
//
// console.log(half(100));


//27.
// function subtract(a, b) {
//     return a - b;
// }
//
// console.log(subtract(25, 10));


//28.
// function multiply(a, b) {
//     return a * b;
// }
//
// console.log(multiply(7, 10));


//29.
// function divide(a, b) {
//     return a / b;
// }
//
// console.log(divide(25, 5));


//30.
// function remainder(a, b) {
//     return a % b;
// }
//
// console.log(remainder(7, 5));


//31.
// function modulo(a, b) {
//     return a % b;
// }
//
// console.log(modulo(5, 2));


//32.
// function cube(n) {
//     return n*n*n;
// }
//
// console.log(cube(5));
//
// OR
//
// function cube(n) {
//     return Math.pow(n, 3);   //here, pow is for powered - Math is a method you can use in JS
// }
//
// console.log(cube(3));


// //33.
// function squareRoot(n) {
//     return Math.sqrt(n);
// }
//
// console.log(squareRoot(64));
//
//
// //34.
// function cubeRoot(n) {
//     return Math.cbrt(n);
// }
//
// console.log(cubeRoot(27));



// //35.
// function invertSign(number) {
//     return number === +number && -number === -number;
// }
//
// console.log(invertSign(-20));
//
//
// OR, to change whether number value is positive or negative, use below:
//
//     let reverseSign = function(x){
//         if(x > 0){
//             return -x;
//         }
//         else {
//             return +x;
//         }
//     }