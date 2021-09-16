// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
    let counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            counter++;
        } else if (arr === []){
            counter = 0;
        }
    }
   return counter;
}

// 

const countTrue = r => r.filter(Boolean).length

//

// A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

function redundant(str) {
	return function(){
		return str;
	}
}

// 

const redundant = str => () => str;



// Derivative of a Function
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// Examples
// derivative(1, 4) ➞ 1

// derivative(3, -2) ➞ 12

// derivative(4, -3) ➞ -108
// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.

function derivative(b, m) {
	return b*(m**(b - 1));
}

//

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

function possibleBonus(a, b) {
	return (b-a) <= 6 && (b-a) > 0 ;
}

//

// Folding a Piece of Paper
// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

// Examples
// numLayers(1) ➞ "0.001m"
// // Paper folded once is 1mm (equal to 0.001m)

// numLayers(4) ➞ "0.008m"
// // Paper folded 4 times is 8mm (equal to 0.008m)

// numLayers(21) ➞ "1048.576m"
// // Paper folded 21 times is 1048576mm (equal to 1048.576m)
// Notes
// There are 1000mm in a single meter.
// Don't round answers.

function numLayers(n) {
	let ppr = 0.5;
	for(let i = 0; i <= n; i++){
		ppr+=ppr;
	}
	return `${(ppr/1000)/2}m`;
}

// Find the nth Tetrahedral Number
// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

// Create a function that takes an integer n and returns the nth tetrahedral number.

// Alternative Text

// Examples
// tetra(2) ➞ 4

// tetra(5) ➞ 35

// tetra(6) ➞ 56
// Notes
// There is a formula for the nth tetrahedral number.

function tetra(n) {
	return (n * (n + 1) * (n + 2))/6;
}

//

// Function Factory
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Please check the examples below for a clearer representation of the behavior expected.

// Examples
// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2) ➞ 7

// plusFive(-8) ➞ -3

// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10)

// plusTen(0) ➞ 10

// plusTen(188) ➞ 198

// plusFive(plusTen(0)) ➞ 15
// Notes
// All inputs will be valid numbers.

function makePlusFunction(baseNum) {
	return function anotherOne(e){
		return e + baseNum;
	}
}

//

// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.

//

function concat(...args) {
	return [...args].flat();
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

//

// Find the Discount
// Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.

// Alternative Text

// Examples
// dis(1500, 50) ➞ 750

// dis(89, 20) ➞ 71.2

// dis(100, 75) ➞ 25
// Notes
// Your answer should be rounded to two decimal places.

function dis(price, discount) {
	let stuff = discount/100
	return Math.round((price - (price * stuff))* 100)/100;
}

// bolji odgovor:

function dis(price, discount) {
	return (100 - discount) / 100 * price	
}

//

// Integer in Range?
// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

// Examples
// intWithinBounds(3, 1, 9) ➞ true

// intWithinBounds(6, 1, 6) ➞ false

// intWithinBounds(4.5, 3, 8) ➞ false
// Notes
// The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
// Bounds will be always given as integers.

function intWithinBounds(n, lower, upper) {
	return n >= lower && n < upper && Number.isInteger(n);
}

//

// Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]

//