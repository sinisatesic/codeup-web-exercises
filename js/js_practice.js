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

// Integer Digits Count
// Create a function that counts the integer's number of digits.

// Examples
// count(318) ➞ 3
 
// count(-92563) ➞ 5
 
// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6
// Notes
// For an added challenge, try to solve this without using strings.
// Alternatively, you can solve this via a recursive approach.
// A reversion of this challenge can be found via this link.

function count(n) {
	return Math.abs(n).toString().length;
}// How Much is True?
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

//

// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(s) {
	let poop1 = '';
	let poop2 = '';
	for(let i = 0; i < s.length; i++){
		if(s[i] === s[i].toUpperCase()){
			poop1 += s[i];
		}else if(s[i] === s[i].toLowerCase()){
			poop2 += s[i];
		}
	}
    return poop1 + poop2;
}


// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//console.log(object.age + 1);

//Vivian's pseudo code below!!!
//1. write a function --> getOlder(dogs)
//2. Since we are taking in array --> we have to loop through each object (each dog, in Vivian's example) --> dog.age += 1;
//3. return dogs (parameter name, which is objects in my example)

//////////////////////////////////
//my answer:
//////////////////////////////////
function getOlder(objects) {
    objects.forEach(function (object) {
        object.age++;
    });
    return objects;
}

//////////////////////////////////
//Vivian's answer:
//////////////////////////////////
function getOlder(dogs) {
    dogs.forEach(function (dog) {
        dog.age += 1;
    });

    return dogs;
}


// Calculate the Missing Value with Ohm's Law
// Create a function that calculates the missing value of 3 inputs using Ohm's law. The inputs are v, r or i (aka: voltage, resistance and current).

// Ohm's law:

// V = R * I
// Return the missing value rounded to two decimal places.

// Examples
// ohmsLaw(12, 220, "") ➞ 0.05

// ohmsLaw(230, "", 2) ➞ 115

// ohmsLaw("", 220, 0.02) ➞ 4.4

// ohmsLaw("", "", 10) ➞ "Invalid"

// ohmsLaw(500, 50, 10) ➞ "Invalid"
// Notes
// Missing values will be ""
// If there is more than one missing value, or no missing value, return "Invalid"
// Only numbers will be given.

function ohmsLaw(v, r, i) {
	if (typeof v === 'string' && typeof r === 'string' || 
			typeof r === 'string' && typeof i === 'string' ||
			typeof v === 'string' && typeof i === 'string'){
		return "Invalid";
	}
	if (typeof v === 'string') { 
		return Number((r * i).toFixed(2));
	} 
	if (typeof r === 'string') {
		return Number((v/i).toFixed(2));
	}  
	if (typeof i === 'string') {
		return Number((v/r).toFixed(2));
	}
	if(typeof v === 'number' 
		 && typeof r === 'number' 
		 && typeof i === 'number'){
		return "Invalid";
	}
}

// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.

function addUp(num) {
	return (num * (num + 1))/2;
  }

//   Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

function minMax(arr) {
	let min = arr[0];
	let max = arr[0];
		
		for (var i = 1; i <= arr.length; i++){
			let value = arr[i];
			min = (value < min) ? value : min;
			max = (value > max) ? value : max;
		}
		return [min, max];
	}

// 	Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.
// Notes
// N/A

function sevenBoom(arr){
	if (arr.join().includes(7)){
		return "Boom!";
	} else {
		return "there is no 7 in the array";
	}
}

// Tower of Hanoi
// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

// Examples
// towerHanoi(3) ➞ 7

// towerHanoi(5) ➞ 31

// towerHanoi(0) ➞ 0
// Notes
// The amount of discs is always a positive integer.
// 1 disc can be changed per move.

function towerHanoi(discs) {
	return  Math.pow(2,discs)-1
}

towerHanoi=d=>2**d-1


// Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// Examples
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
// Notes
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

function countBoomerangs(arr) {
	let counterz = 0;
	for(let i = 0; i < arr.length; i++){
		if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]){
			counterz++;
		}
	}
	return counterz;
}


// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5
// Notes
// An empty array should return 0.

const getLength = arr => arr.flat(Infinity).length;

// 

function getLength(arr) {
	let count = 0;
const checkArr = (a)=>{
	a.forEach(i=>{
		if(typeof i === "object")
			return checkArr(i);
		count++;
	})
}
checkArr(arr);
	return count;
}

// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Notes
// The strings can contain white spaces or any type of characters.
// Bonus: Try solving this without RegEx.

function numInStr(arr) {
    var bucket = [];
	var numbers = [1,2,3,4,5,6,7,8,9,0];
    for (var i = 0;i < arr.length; i++){
			
			for (var j = 0; j < numbers.length; j++){
				  if (arr[i].indexOf(numbers[j]) !== -1){
            bucket.push(arr[i]);
						break;
        }
			}
      
        
    }
	return bucket;
}

// LCM of Two Numbers
// Write a function that returns the least common multiple (LCM) of two integers.

// Examples
// lcm(9, 18) ➞ 18

// lcm(8, 5) ➞ 40

// lcm(17, 11) ➞ 187
// Notes
// Both values will be positive.
// The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.

function lcm(n1, n2) {
	if ((typeof n1 !== 'number') || (typeof n2 !== 'number')) 
	 return false;
   return (!n1 || !n2) ? 0 : Math.abs((n1 * n2) / gcd(n1, n2));
 }
 
 function gcd(n1, n2) {
   n1 = Math.abs(n1);
   n2 = Math.abs(n2);
   while(n2) {
	 var newNum = n2;
	 n2 = n1 % n2;
	 n1 = newNum;
	 }
	 return n1;
   }

//    Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
// Notes
// The elements must be exactly identical for there to be a jackpot.

function testJackpot(result) {
	return result.every(el => el === result[0]) ? true : false;
}


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

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000
// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

function frames(minutes, fps) {
	return (minutes * 60) * fps;
}

// Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples
// clone([1, 1]) ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
// Notes
// N/A

function clone(arr) {
	arr.push([...arr])
	return arr
}

// Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.

function addName(obj, name, value) {
	let wut = {};
	   obj[name] = value;
	   wut = obj;
	   return wut;
   }


//    Volume of a Cone
// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.

// Volume of a Cone Image

// Examples
// coneVolume(3, 2) ➞ 12.57

// coneVolume(15, 6) ➞ 565.49

// coneVolume(18, 0) ➞ 0
// Notes
// See the resources tab for the formula.
// Return approximate answer by rounding the answer to the nearest hundredth.
// Use JavaScript's PI property, don't fall for 3.14 ;-)
// If the cone has no volume, return 0.

function coneVolume(h, r) {
	return Number(((Math.PI*r**2*h)/3).toFixed(2));
}

// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5
// Notes
// An empty array should return 0.

function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}

// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100
// Notes
// N/A

function points(two, three) {
	return two*2+three*3;
}

// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function keysAndValues(obj) {
	var keys = Object.keys(obj),
			values = keys.map(function (key) {
				return obj[key];
			});
		return [keys, values];
	}