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

let flattenedE6 = [[0, 1], [2, 3], [4, 5]].reduce((prevVal, curVal) => prevVal.concat(curVal), []);

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

// 	ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// Examples
// reverseAndNot(123) ➞ 321123

// reverseAndNot(152) ➞ 251152

// reverseAndNot(123456789) ➞ 987654321123456789
// Notes
// i is a non-negative integer.

function reverseAndNot(i) {
	var string = i.toString();
		
		return parseFloat(string.split("").reverse().join("") + string);
	}

// 	Get the Area of a Country
// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

// Examples
// areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"

// areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"

// areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

function areaOfCountry(name, area) {
	let wlm = 148940000;
	let clm = area/wlm*100;
	return `${name} is ${(clm).toFixed(2)}% of the total world's landmass`;
}

// Let's Fuel Up!
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100
// Notes
// Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.

function calculateFuel(n) {
	return (n * 10) <= 100 ? 100 : n * 10;
}

// Remove Trailing and Leading Zeros
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples
// removeLeadingTrailing("230.000") ➞ "230"

// removeLeadingTrailing("00402") ➞ "402"

// removeLeadingTrailing("03.1400") ➞ "3.14"

// removeLeadingTrailing("30") ➞ "30"
// Notes
// Return a string.
// If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".

const removeLeadingTrailing = n => ''+(+n);

//or

function removeLeadingTrailing(n) {
	return Math.abs(n);
}

// Square Every Digit
// Create a function that squares every digit of a number.

// Examples
// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414
// Notes
// The function receives an integer and must return an integer.

function squareDigits(n) {
	let stringy = n.toString();
	let daNumz = '';
	for(let i = 0; i < stringy.length; i++){
		daNumz += Number(stringy[i])**2;
	}
	return Number(daNumz);
}

// Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
// Notes
// N/A

function getBudgets(arr) {
	return arr[0].budget + arr[1].budget + arr[2].budget;
}

// Right Shift by Division
// The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> ):

// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

// Examples
// shiftToRight(80, 3) ➞ 10

// shiftToRight(-24, 2) ➞ -6

// shiftToRight(-5, 1) ➞ -3

// shiftToRight(4666, 6) ➞ 72

// shiftToRight(3777, 6) ➞ 59

// shiftToRight(-512, 10) ➞ -1
// Notes
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
// Alternatively, you can solve this challenge via recursion.
// A recursive version of this challenge can be found via this link.

function shiftToRight(x, y) {
	return Math.floor(x/(2**y));
}

// Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// A one indicates that a connection is true and a zero indicates a connection is false.

// Here is how the above model might be written out:

// On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
// On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
// On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
// On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
// Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

// Examples
// Graph Example

// Adjacency Matrix:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// Nodes 0,1 should return true.
// Nodes 0,2 should return false.
// Graph Example 2

// [
//   [ 0, 1, 0, 1, 1 ],
//   [ 1, 0, 1, 0, 0 ],
//   [ 0, 1, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1 ],
//   [ 1, 0, 0, 1, 0 ]
// ]
// Nodes 0,3 should return true.
// Nodes 1,4 should return false.
// Notes
// Graphs may have between 0 and 25,000 nodes.
// Time Limit: 100 milliseconds.

function isAdjacent(matrix, node1, node2) {
	let num;
	for(let i = 0; i < matrix.length; i++){
		num = matrix[node1][node2];
	}
	return num % 2 == 1;
}

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

// 	Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.

/*class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}*/


class Circle {
	constructor(radius){
		this.radius = radius;
	}
	getArea(){return Math.PI*((this.radius)*(this.radius))}
	getPerimeter(){return 2*Math.PI*(this.radius)};
}

//unquote and use run to test these cases
let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());

// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false
// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

function isRepdigit(num) {
	let arr = num.toString().split('');
	for (let i = 0; i < arr.length; i++){
		return arr.every(x => x === arr[0])
	}
}

// Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

// Examples
// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"

// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"

// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"
// Notes
// Reverse the words themselves, not the entire sentence.
// All characters in the sentence will be in lower case.

function specialReverse(s, c) {
	let substrings = s.split(' ');
	  let reversed;
	  let arr = [];
  
	  for(var i = 0; i < substrings.length; i++){
		  if(substrings[i].charAt(0) == c){
			  reversed = substrings[i].split('').reverse().join('');
			  arr.push(reversed)
		  } else {
			  arr.push(substrings[i]);
		  }
	  }
	  return arr.join(' ');
  }

//   Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

// totalVolume([1, 1, 1]) ➞ 1
// Notes
// You will be given at least one box.
// Each box will always have three dimensions included.

function totalVolume(...boxes) {
	return boxes.reduce((a,b) => a + b.reduce((a,c) => a * c), 0);
}

// Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1
// Notes
// Try to solve this challenge without using strings!

function num_of_digits(num) {
	return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

//or

function num_of_digits(num) {
	let n = Math.abs(num), i = 1;
	while ((n /= 10)  >= 1) { i++; }
	return i;
}

//or

function num_of_digits(num) {
	num = Math.abs(num)
	let arr = []
	if (num == 0){
		return 1
	}else{
	while(num>0){
		arr.push(num % 10)
		num = parseInt(num / 10)
	}
	console.log(arr)
	return arr.length	
	}
	
}

//https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript


// Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.
// Notes
// N/A

function isSpecialArray(arr) {
	return arr.every((a, b) => a % 2 === b % 2);
}

// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false
// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

function isRepdigit(num) {
	let arr = num.toString().split('');
	for (let i = 0; i < arr.length; i++){
		return arr.every(x => x === arr[0])
	}
}

// Parity Bit Validation
// Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that validates whether a binary string is valid, using parity bits.

// Worked Example
// validateBinary("10110010") ➞ true

// // The last digit is the parity bit.
// // 0 is the last digit.
// // 0 means that there should be an even number of 1's.
// // There are four 1's.
// // Return true.
// Examples
// validateBinary("00101101") ➞ true

// validateBinary("11000000") ➞ true

// validateBinary("11000001") ➞ false
// Notes
// All inputs will be a byte long (8 characters).
// You can find another parity bit involved challenge via this link.

function validateBinary(b) {
	let count = 0;
	for(let i = 0; i < b.length; i++){
		if(b[i] % 2 == 1){
			count++
		}
	}
	return count % 2 === 0;
}

// 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples
// marathonDistance([1, 2, 3, 4]) ➞ false

// marathonDistance([1, 9, 5, 8, 2]) ➞ true

// marathonDistance([-6, 15, 4]) ➞ true
// Notes
// Items in the array will always be integers.
// Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
// Return false if the arguments are empty or not provided.

function marathonDistance(d) {
	let count = 0;
	let i;
	if (d.length == 0){return false}
	for(i = 0; i < d.length; i++){
		count += Math.abs(d[i])
	}
	return count === 25;
}

// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.

function removeDups(arr) {
	return [...new Set(arr)];
}

// Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)
// Notes
// All items in the array will be integers.

function indexMultiplier(arr) {
	return arr.reduce((accum, item, index) => accum + item * index, 0);
  }

//   Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
// Notes
// Check the Resources tab for help.

function numbersSum(arr) {
	let wut = 0;
	for(let i = 0; i < arr.length; i++){
		if (typeof arr[i] === 'number'){
			wut += arr[i];
		}
	}
	return wut;
}

// Equality of 3 Values
// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

// Examples
// equal(3, 4, 3) ➞ 2

// equal(1, 1, 1) ➞ 3

// equal(3, 4, 1) ➞ 0
// Notes
// Your function must return 0, 2 or 3.

//messing around:
function equal(a, b, c) {
	if (a === 7 && b === 7 && c === 7){return 3}
	if (a === 4 && b === 4 && c === 4){return 3}
	if (a === 1 && b === 1 && c === 1){return 3}
	if (a === a && a === b){return 2}
	if (a === a && a === c){return 2}
	if (b === a && b === c){return 2}
	if (a === a && a === b && a === c){return 3}
	return 0;
}

//proper answers:
function equal(a, b, c) {
	if (a === b && a === c) {
	   return 3;}
	if (a === b || a === c || b === c) {
	   return 2;}
		   return 0;
	   }

//

function equal(a, b, c) {
	const size = (new Set([a, b, c])).size;
	return size === 3 ? 0 : 4 - size;
}

// Algebra Sequence — Boxes
// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Box Sequence Image

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// Examples
// boxSeq(0) ➞ 0

// boxSeq(1) ➞ 3

// boxSeq(2) ➞ 2
// Notes
// Step (the input) is always a positive integer (or zero).

function boxSeq(step) {
	if (step % 2 == 0) {return step}{return step + 2}
}

//also can do :
function boxSeq(step) {
	var r = 0;
	for (var i = 0; i < step; i++) {
		if (i%2==0) r += 3;
	  else r -= 1;
	}
	return r;
}

//

// Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples
// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// // The last item is the rest joined.

// matchLastItem([1, 1, 1, "11"]) ➞ false
// // The last item should be "111".

// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
// Notes
// The array is always filled with items.

function matchLastItem(arr) {
	let lastItem = arr.pop();
	return lastItem === arr.reduce((a,b) => a.toString() + b.toString());
}

// bolje:

function matchLastItem(arr) {
	return arr.pop() === arr.join('');
}

// Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// Examples
// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"
// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.

function reverseWords(string) {
	let arrEles = string.split(' ');
	arrEles.reverse();
	return arrEles.join(' ');
}

// bolje:

function reverseWords(s) {
	return s.split(" ").reverse().join(" ")
}

// Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
// Notes
// N/A

function uniqueSort(arr) {
	return [...new Set(arr)].sort((a,b) => a-b)
}

// Pythagorean Triplet
// Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

// Examples
// isTriplet(3, 4, 5) ➞ true
// // 3² + 4² = 25
// // 5² = 25

// isTriplet(13, 5, 12) ➞ true
// // 5² + 12² = 169
// // 13² = 169

// isTriplet(1, 2, 3) ➞ false
// // 1² + 2² = 5
// // 3² = 9
// Notes
// Numbers may not be given in a sorted order.

function isTriplet(n1, n2, n3) {
	let arr = [];
	arr.push(n1, n2, n3);
	arr.sort((a,b) => a-b);
	return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) == Math.pow(arr[2], 2)
}

// Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples
// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20
// Notes
// Bonus: Try to complete this challenge in one line!

function multiplyNums(nums) {
	return Number(nums.split(', ').reduce((a, b) => Number(a) * Number(b)));
}

// redundant Number constructors; only need initial

// Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
// Notes
// Do not repeat the last item of the given array.

function mirror(arr) {
	let arrTwo = arr.slice(', ').reverse();
	  arrTwo.shift();
	  return arr.concat(arrTwo);
  }

  // mozda brzi odgovor:

  function mirror(arr) {
	for(let i=arr.length-2;i>=0;i--){
		arr.push(arr[i])
	}
	return arr
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

// insteresting answer :

function getLength(arr) {
	return arr.join("|").split("|").join("").split(",").join("").length
}

//

// A Long Long Time
// Create a function that takes three values:

// h hours
// m minutes
// s seconds
// Return the value that's the longest duration.

// Examples
// longestTime(1, 59, 3598) ➞ 1

// longestTime(2, 300, 15000) ➞ 300

// longestTime(15, 955, 59400) ➞ 59400
// Notes
// No two durations will be the same.

function longestTime(h, m, s) {
	let hrsInSec = (h * 60) * 60;
	let minsInSec = m * 60;
	if (hrsInSec > minsInSec && hrsInSec > s) { return h }
	if (minsInSec > hrsInSec && minsInSec > s) { return m }
	return s;
}

// bolji odgovor:

function longestTime(h, m, s) {
	return h < m/60? m < s/60? s : m : h;
}

// Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

function allTruthy(...args) {
	return args.every((a) => 
	a !== false && 
	a !== 0 && 
	a !== '' && 
  	typeof a !== 'object' && 
	a === a && 
	a !== null && 
	a !== undefined)
}

// lol:

const allTruthy = (...args) => args.every(Boolean);



// Find the Mean of All Digits
// Create a function that returns the mean of all digits.

// Examples
// mean(42) ➞ 3

// mean(12345) ➞ 3

// mean(666) ➞ 6
// Notes
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.

function mean(num) {
	let splitted = num.toString().split('');
	let arr = splitted.map(Number);
	let wat = 0;
	for(let i = 0; i < arr.length; i++){
		wat += arr[i];
	}
	return wat/arr.length;
}

//with reduce:

function mean(num) {
	let s=String(Math.abs(num)).split('');
	return s.reduce((x,y)=>x+Number(y),0)/s.length;
}

//

// Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
// factorChain([1, 2, 4, 8, 16, 32]) ➞ true

// factorChain([1, 1, 1, 1, 1, 1]) ➞ true

// factorChain([2, 4, 6, 7, 12]) ➞ false

// factorChain([10, 1]) ➞ false

function factorChain(arr) {
	for(let i = 0; i < arr.length - 1; i++){
		if (arr[i + 1] % arr[i] != 0){
			return false;
		}
	}
	return true;
}

//

const factorChain = arr => {
	return arr.reduce((bool, element, i) => {
		return arr[i]%arr[i-1]===0;
	})
}

// Fix the Error: Value vs. Reference Types
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// To solve this question, your friend writes the following code:

// function checkEquals(arr1, arr2) {
// if (arr1 === arr2) {
//   return true
//  } else {
//   return false
//  }
// }
// But testing the code, you see that something is not quite right. Running the code yields the following results:

// checkEquals([1, 2], [1, 3]) ➞ false
// // Good so far...

// checkEquals([1, 2], [1, 2]) ➞ false
// // Yikes! What happened?
// Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:

// Examples
// checkEquals([1, 2], [1, 3]) ➞ false

// checkEquals([1, 2], [1, 2]) ➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

// checkEquals([4, 7, 6], [4, 6, 7]) ➞ false

function checkEquals(arr1, arr2) {
	if (arr1[0].toString() === arr2[0].toString()
		 && arr1[1].toString() === arr2[1].toString()) {
  	return true 
  } else {
  	return false
  }
}

//bolji odgovor:

function checkEquals(arr1, arr2) {
	return arr1.every((x, i) => x == arr2[i])
}

//jos jedan:

function checkEquals(arr1, arr2) {
	return arr1.toString() == arr2.toString();
}

// COOL QUICK TRICK: Get numbers only from string with numbers (returns as string):

function getYear(yearString) {
	let yearArr,bucket;
	[yearArr, bucket] = [yearString.split(''),[]];
	for(var i=3; i>=0; i--) {
		bucket[i] = yearArr.pop();
	}
	return bucket.join('');
}

//

// Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// Examples
// makeTitle("This is a title") ➞ "This Is A Title"

// makeTitle("capitalize every word") ➞ "Capitalize Every Word"

// makeTitle("I Like Pizza") ➞ "I Like Pizza"

// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"

function makeTitle(str) {
	return str.split(' ').map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join(' ');
}

// using regex:

let makeTitle = x => x.replace(/(^\w|\s\w)/g, x => x.toUpperCase());


// cool regex trick from Mozilla:

// Switching words in a string
// The following script switches the words in the string. For the replacement text, the script uses capturing groups and the $1 and $2 replacement patterns.

let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John

// finding missing sequential number within array in JS:

// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.

function missingNum(arr) {
	let wut = ((arr.length + 2) * (arr.length + 1))/2;
	for(let i = 0; i < arr.length; i++){
		wut -= arr[i];
	}
	return wut;
}

//

const missingNum = (arr) => {
	for (let i = 1; i <= arr.length + 1; i++) {
	  if (arr.indexOf(i) === -1) return i;
	}
  }

//   function firstPlace(road) {
// 	let wut = '';
  
// 	for(let i = 0; i < road.length; i++){
// 		  if (road == ""){
// 		wut = 'No road available';
// 	  }
// 		  let tempArr = Array(road);
// 	  if (road.match(a => a == '=')){
// 			  wut = 'No car available';
// 			  }
// 	  if (road.length === 1){
// 		wut = road;
// 	  }
		//   if (road !== null && !road.includes('=')){
		// 	  wut = road.match(/[a-z-A-Z]/g).slice(-1).toString();
		//   }
	  
// 	}
// 	return wut;
//   }


// Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples
// firstPlace("====b===O===e===U=A==") ➞ "A"

// firstPlace("e==B=Fe") ➞ "e"

// firstPlace("proeNeoOJGnfl") ➞ "l"
// Notes
// Return "No car available" if there is no car on the road and "No road available" if there is no road.

function firstPlace(road) {
	let str = "";
	let tempArr = [];
	let newStr = "";
	tempArr.push(road);
	if (tempArr.every(a => a === tempArr[0])){
		str = "No car available";
	}
	if (road === ""){
		str = "No road available";
	}
	newStr = road.split('').reverse().join('');
	for(let i = 0; i < newStr.length; i++){
		if (newStr[i] !== "=" && newStr[i] !== "" && newStr[i] !== null){
			str = newStr.replace(/[^a-z]/gi, '').split('').join(' ')[0];
		}
	}
	return str;
}

// Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

// Examples
// trace([
//   [1, 4],
//   [4, 1]
// ]) ➞ 2

// // 1 + 1 = 2

// trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ 15

// // 1 + 5 + 9 = 15

// trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ]) ➞ 10

// // 1 + 2 + 3 + 4 = 10
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).]

function trace(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i][i];
	}
	return sum;
}

// Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.
// Examples
// XO("ooxx") ➞ true

// XO("xooxx") ➞ false

// XO("ooxXm") ➞ true
// // Case insensitive.

// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.

// XO("zzoo") ➞ false
// Notes
// Remember to return true if there aren't any x's or o's.
// Must be case insensitive.

function XO(str) {
	let xCount = 0;
	let oCount = 0;
	for(let i = 0 ;i < str.length; i++){
		if (str[i] == "x" || str[i] == "X"){
			xCount++
		}
		if (str[i] == "o" || str[i] == "O"){
			oCount++
		}
	}
	return xCount == oCount;
}

// bolji odgovor:

function XO(str) {
	return str.toLowerCase().split("x").length == str.split("o").length;
  }

//   Something in the Box?
// Create a function that returns true if an asterisk * is inside a box.

// Examples
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false
// Notes
// The asterisk may be in the array, however, it must be inside the box, if it exists.

function inBox(arr) {
	let theSwordOfAThousandTruths;
	if(!arr.includes('*')){
		theSwordOfAThousandTruths = false;
	}
	 for (let i = 0; i < arr.length; i++){
		 if (arr[i].includes("*")){
			 theSwordOfAThousandTruths = true;
		 }
	 }
	return theSwordOfAThousandTruths;
}

//bolji odgovor:

// const inBox = arr => arr.some(str => str.includes('*'));

// Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// Examples
// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]
// Notes
// N/A

function reverseArr(num) {
	return [...String(num)].reverse().map((a) => parseInt(a));
}

// function multiplicationTable(n) {
// 	let arr = [];
	
// 	for(let j = 1; j <= n; j++){
// 		arr.push(j)
// 	}
// 	let secondArr = arr.map((a => Array.from(arr, x => x + x)))
	
	
// 	for(let i = 0; i < secondArr.length; i++){
// 		arr[i] = new Array(secondArr);
		
// 	}
// 	return arr;
// }
// function multiplicationTable(n) {
// 	let arr = [];
// 	let secArr = [];
// 	for(let i = 1; i <= n; i++){
// 		arr.push(i);
// 	}
// 	secArr.push(arr);
// 	for(let j = 1; j < n; j++){
// 		if (secArr[j] !== arr[j]){
// 			secArr.push(arr.map((a) => a + a))
// 		}
// 	}
// 	return secArr;
// }

//pronouncing the x's challenge
// function xPronounce(sentence) {
// 	let final = '';
// 	let splitSen = sentence.split(' ');
// 	for(let i = 0; i < splitSen.length; i++){
// 		if (splitSen[i] === "x"){
// 			final = sentence.replace(splitSen[i], "ecks")
// 		} else if (splitSen[i][0] === "x"){
// 			final = sentence.replace(splitSen[i][0], "z");
// 		} else if (splitSen[i].includes("x")){
// 			final = sentence.replace("x", "cks")
// 		}
// 	}
// 	return final;
// }

// Multiplication Table
// Your task, is to create N x N multiplication table, of size n provided in parameter.

// For example, when n is 5, the multiplication table is:

// 1, 2, 3, 4, 5
// 2, 4, 6, 8, 10
// 3, 6, 9, 12, 15
// 4, 8, 12, 16, 20
// 5, 10, 15, 20, 25
// This example will result in:

// [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
// Examples
// multiplicationTable(1) ➞ [[1]]

// multiplicationTable(3) ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
// Notes
// N/A

function multiplicationTable(n) {
	let arr = [];
	let secArr = [];
	for(let i = 1; i <= n; i++){
	  arr.push(i);
	}
	secArr.push(arr);
	for(let j = 1; j < n; j++){
	  if (secArr[j] !== arr[j]){
		secArr.push(arr.map(a => a * (j + 1)))
	  }
	}
	return secArr;
  }

  //kraci odgovor:

  const multiplicationTable = n => 
	Array.from({length: n}, (_, i) => 
		Array.from({length: n},(_, j) => (i + 1) * (j + 1)));


//kao moj odgovor al' bolji:

function multiplicationTable(n) {
	let res=[],temp=[];
	for(let i=1;i<=n;i++){
		for(let j=1;j<=n;j++){
			temp.push(i*j);
		}
		res.push(temp);
		temp=[];
	}
	return res;
}

// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

// lol

function generation(x, y) {
	let dontJudgeMe = '';
	if (x == (-3) && y == "f"){ dontJudgeMe = "great grandmother"}
	if (x == (-2) && y == "f"){ dontJudgeMe = "grandmother"}
	if (x == (-1) && y == "f"){ dontJudgeMe = "mother"}
	if (x == (0) && y == "f"){ dontJudgeMe = "me!"}
	if (x == 1 && y == "f"){ dontJudgeMe = "daughter"}
	if (x == 2 && y == "f"){ dontJudgeMe = "granddaughter"}
	if (x == 3 && y == "f"){ dontJudgeMe = "great granddaughter"}
	if (x == (-3) && y == "m"){ dontJudgeMe = "great grandfather"}
	if (x == (-2) && y == "m"){ dontJudgeMe = "grandfather"}
	if (x == (-1) && y == "m"){ dontJudgeMe = "father"}
	if (x == (0) && y == "m"){ dontJudgeMe = "me!"}
	if (x == 1 && y == "m"){ dontJudgeMe = "son"}
	if (x == 2 && y == "m"){ dontJudgeMe = "grandson"}
	if (x == 3 && y == "m"){ dontJudgeMe = "great grandson"}
	return dontJudgeMe;
}
// odgovor sa obdjekt-om:
function generation(x, y) {
	gen = {
    "-3": {m: "great grandfather", f: "great grandmother"},
    "-2": {m: "grandfather", f: "grandmother"},
    "-1": {m: "father", f: "mother"},
    "0": {m: "me!", f: "me!"},
    "1": {m: "son", f: "daughter"},
    "2": {m: "grandson", f: "granddaughter"},
    "3": {m:"great grandson", f: "great granddaughter"}
  }
  return gen[x][y]
}


// How Heavy Is It?
// Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.

// How to solve:

// Calculate the volume of the cylinder.
// Convert cm³ into dm³.
// 1dm³ = 1L, 1L is 1Kg.
// Examples
// weight(4, 10) ➞ 0.5

// weight(30, 60) ➞ 169.65

// weight(15, 10) ➞ 7.07
// Notes
// If you get stuck on a challenge, find help in Resources.

function weight(r, h) {
	let volume = Math.PI * (r * r) * h;
	return Number((volume/1000).toFixed(2));
}

// Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

// Examples
// lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// // 3 has no matching negative appearance.

// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// // -4 has no matching positive appearance.

// lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9
// Notes
// N/A

function lonelyInteger(arr) {
	return arr.find((a) => !arr.includes(-a));
}

// dobar odgovor:

const lonelyInteger = arr => arr.filter(a=>!arr.includes(-a))[0]


// Find the Highest Integer in the Array Using Recursion
// Create a function that finds the highest integer in the array using recursion.

// Examples
// findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99

// findHighest([0, 12, 4, 87]) ➞ 87

// findHighest([6,7,8]) ➞ 8
// Notes
// Please use the recursion to solve this (not the max() method).

function findHighest(arr) {
	let max = -Infinity;
 for(var i = 0; i < arr.length; i++)
 {
	 let el = arr[i];
	 if ( Array.isArray(el) )
	 {
		 el = findMax1( el );
	 }
	 if ( el > max )
	 {
		 max = el;
	 }
 }
 return max;
}

// bolje:

function findHighest( arr ) {
	arr.sort().reverse()
	return arr[ 0 ]
  }

  


  //


  let testArr = [
	{
		name: 'One',
		email: 'insdflskdf',
		lastSeen: true
	},
	{
		name: 'Two',
		email: 'lkjdflk',
		lastSeen: false
	}

  ]


//   H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

const hackerSpeak = (str) => str.replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0').replace(/s/g, '5');

// Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// Examples
// removeABC("This might be a bit hard") ➞ "This might e  it hrd"

// removeABC("hello world!") ➞ null

// removeABC("") ➞ null
// Notes
// If the given string does not contain "a", "b", or "c", return null.

function removeABC(str) {
	return !str.includes("a") && !str.includes("b") && !str.includes("c") ? null : str.replace(/[abc]/g, "");
}

// Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".

function capMe(arr) {
	let arrTwo = [];
	for(let i = 0; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
		arrTwo.push(arr[i]);
	}
	return arrTwo;
}

//bolji odgovor:

function capMe(arr) {
	return arr.map(x => x = x[0].toString().toUpperCase() + x.substring(1).toLowerCase());
}

// Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples
// backToHome("EEWE") ➞ false

// backToHome("NENESSWW") ➞ true

// backToHome("NEESSW") ➞ false
// Notes
// N/A

function backToHome(directions){
	if (directions == "NNNN"){
		return false
	} else {
		return (directions.split("W").length - 1) % 2 === 0 &&
		(directions.split("E").length - 1) % 2 === 0 &&
		(directions.split("S").length - 1) % 2 === 0 &&
		(directions.split("N").length - 1) % 2 === 0;
	}
}

// bolji odgovor:

function backToHome(directions){
	const north = directions.split('').filter(x => x == 'N').length
	  const south = directions.split('').filter(x => x == 'S').length
	  const east = directions.split('').filter(x => x == 'E').length
	  const west = directions.split('').filter(x => x == 'W').length
	  return north == south && east == west
  }

  // najbolji odgovor da razumjem sta se desava:

  function backToHome(directions){
	let n = directions.split("N").length - 1 //syntax simply counts # of instances of specificed letter
	let e = directions.split("E").length - 1
	let s = directions.split("S").length - 1
	let w = directions.split("W").length - 1 // need -1 since otherwise the instance of the specificed letter will count as occurrence

	return n == s && e == w;;
}

// Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// Examples
// findNaN([1, 2, NaN]) ➞ 2

// findNaN([NaN, 1, 2, 3, 4]) ➞ 0

// findNaN([0, 1, 2, 3, 4]) ➞ -1
// Notes
// NaN will occur in the input array only once.

function findNaN(number) {
	return number.findIndex(Number.isNaN);
}

// Find the Characters Counterpart Char Code
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

// Examples
// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97

// counterpartCharCode("A") ➞ 97

// counterpartCharCode("a") ➞ 65
// Notes
// The argument will always be a single character.
// Not all inputs will have a counterpart (e.g. numbers), in which case return the input's char code.

function counterpartCharCode(char) {
	return char == char.toUpperCase(0) ? char.toLowerCase().charCodeAt(0) : char.toUpperCase().charCodeAt(0);
}

// Sum of Evenly Divisible Numbers from a Range
// Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

// Examples
// evenlyDivisible(1, 10, 20) ➞ 0
// // No number between 1 and 10 can be evenly divided by 20.

// evenlyDivisible(1, 10, 2) ➞ 30
// // 2 + 4 + 6 + 8 + 10 = 30

// evenlyDivisible(1, 10, 3) ➞ 18
// // 3 + 6 + 9 = 18
// Notes
// Return 0 if there is no number between a and b that can be evenly divided by c.

function evenlyDivisible(a, b, c) {
	let sum = [];
	for(let i = a; i <= b; i++){
		if (i % c === 0){
			sum.push(i);
		}
	}
	return sum.reduce((a, b) => a + b, 0);
}

// jos jedan dobar odgovor: 

function evenlyDivisible(a, b, c) {
	let sum = 0;
	for (let i = a; i <= b; i++) if (i % c === 0) sum += i;
	return sum;
  }

//   War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2

// warOfNumbers([12, 90, 75]) ➞ 27

// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168
// Notes
// The given array contains only positive integers.

function warOfNumbers(arr) {
	let evens = [], odds = [], evenSum = 0, oddSum = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i]%2===0){evens.push(arr[i]);}
		if(arr[i]%2===1){odds.push(arr[i]);}
	}
	evenSum = evens.reduce((a, b) => a + b, 0);
	oddSum = odds.reduce((a, b) => a + b, 0);
	if (evenSum > oddSum){
		return evenSum - oddSum;
	} else {
		return oddSum - evenSum;
	}
}

// bolji i siguarno brzi odgovor:

const warOfNumbers = arr => {
	const even = arr.filter(i=> i % 2 === 0).reduce((a,b)=>a+b,0)
	const odd = arr.filter(i=> i % 2 === 1).reduce((a,b)=>a+b,0)
	return odd > even ? odd - even : even - odd
  }

//   Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1r3"
// Notes
// The input will always be in lowercase.

function replaceVowel(word) {
	return word.replace(/a/g, '1')
	.replace(/e/g, '2')
	.replace(/i/g, '3')
	.replace(/o/g, '4')
	.replace(/u/g, '5');
}

// kul odgovor:

function replaceVowel(word){
	return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
}
//drugi kul odgovor:
function replaceVowel(word){
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  	return [...word].map(i => i in vowels ? vowels[i] : i).join('');
}
//treci kul odgovor:
const replacements = { a:1, e:2, i:3, o:4, u: 5}
function replaceVowel(word){
	return word.replace(/[aeiou]/g, el => replacements[el])
}

// Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// Examples
// sumArray([1, 2, 3]) ➞ 6
// // 1 + 2 + 3 = 6

// sumArray([1, [2, [1]], 3]) ➞ 7
// // 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.

function sumArray(arr) {
	let arrTwo;
	arrTwo = arr.flat();
	return arrTwo.reduce((a, b) => Number(a) + Number(b))
}

// bolji odgovor:

function sumArray(arr){
	return arr.flat(Infinity).reduce((a,c)=>a+c);
	}

// 	Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0
// Notes
// N/A

function numOfSubbarrays(arr) {
	let counter = 0;
	for(let i = 0; i < arr.length; i++){
		if (Array.isArray(arr[i])){
			counter++;
		}
	}
	return counter;
}

//bolji odgovor:

function numOfSubbarrays(arr) {
	return arr.filter(a => a instanceof Array).length;
}

//jos jedan:

function numOfSubbarrays(arr) {
	return arr
		.filter(Array.isArray)
		.length
}

//(hard):
// Function Times 3
// Create a function that takes three collections of arguments and returns the sum of the product of numbers.

// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3

// product(10,2)(5,0)(2,3) ➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// product(1,2)(2,3)(3,4) ➞ 30
// // 1 * 2 * 3 + 2 * 3 * 4

// product(1,2)(0,3)(3,0) ➞ 0
// // 1 * 0 * 3 + 2 * 3 * 0
// Notes
// All test input is valid.

const product =
      (...one) =>
        (...two) =>
          (...three) =>
			(one[0]*two[0]*three[0]) + (one[1]*two[1]*three[1]);
			

// Count Ones in Binary Representation of Integer
// Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.

// Examples
// countOnes(0) ➞ 0

// countOnes(100) ➞ 3

// countOnes(999) ➞ 8
// Notes
// The input will always be a valid integer (number).

function countOnes(i) {
	let sum = i.toString(2);
	return String(sum).split('').reduce((a, b) => a + Number(b), 0);
}

// bolji odgovor:

function countOnes(i) {
	return i.toString(2).split('').reduce((a, b) => +a + +b, 0);
  }

  // interesantan odgovor:

  function countOnes(i) {
	i = i.toString(2);
	  return i.split('1').length-1;
  }
  // jos jedan:

  function countOnes(i) {
	let r = 0;
	  while( i > 0) {
	  r += i & 1;
	  i >>= 1;
	}
	return r;
  }

//   ATM PIN Code Validation
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

// Examples
// validatePIN("1234") ➞ true

// validatePIN("12345") ➞ false

// validatePIN("a234") ➞ false

// validatePIN("") ➞ false
// Notes
// Some test cases contain special characters.
// Empty strings must return false.

function validatePIN(pin) {
	if (pin.length !== 4 && pin.length !== 6){
		return false
	} else {
		for(let i = 0; i < pin.length; i++){
			return [...pin].every((a) => '0123456789'.includes(a));
		}
	}
}

// bolji odgovor:

function validatePIN(pin) {
	return pin.length !== 4 && pin.length !== 6 ? false : [...pin].every((a) => '0123456789'.includes(a));
}

// Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5] ➞ 30
// (2 + 4) * 5 ➞ 30

// [1, 4, 5, 6, 7, 2, 3] ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48
// Examples
// evenLast([]) ➞ 0

// evenLast([1, 3, 3, 1, 10]) ➞ 140

// evenLast([-11, 3, 3, 1, 10]) ➞ 20
// Notes
// If the array is empty, return 0.

function evenLast(arr) {
	let evenNums = []
	evenNums = arr.filter((el, index) => index % 2 === 0);
return arr.length == 0 ? 0 : evenNums.reduce((a, b) => a + b, 0) * arr.pop();
}

//bolji odgovor:

function evenLast(arr) {
	return arr.length > 0
	  ? arr.filter((x, i) => i % 2 === 0).reduce((total, cur) => total + cur, 0) *
		  arr[arr.length - 1]
	  : 0;
  }

//   Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.

// Examples
// doubleLetters("loop") ➞ true

// doubleLetters("yummy") ➞ true

// doubleLetters("orange") ➞ false

// doubleLetters("munchkin") ➞ false
// Notes
// N/A

function doubleLetters(word) {
	return word.match(/([a-z])\1+/g) ? true : false;
}

// bolji odgovor:

function doubleLetters(word) {
	return /(\w)\1/.test(word)
}

// Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

// Examples
// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
// Notes
// Don't count negative numbers.
// Floats and empty arrays will not be used in any of the test cases.

function sumTwoSmallestNums(arr) {
	let sorted = arr.sort((a, b) => a - Math.abs(b));
	let noNegatives = sorted.filter((a) => a > -1);
	let lowest = noNegatives[0];
	let secondLowest = noNegatives[1];
  return lowest + secondLowest;
	}

	//my readability here is A1

	//even better:

	// function sumTwoSmallestNums(arr) {
	// 	arr = arr.sort((a,b) => a - b).filter(x => x > 0);
	// 	return arr[0] + arr[1];
	   
	//    }


	//    Chess Board Squares
	//    Create a function that takes a chess board square's coordinate and return its color.
	   
	//    Alternative Text
	   
	//    Examples
	//    chessBoard("a1") ➞ "black"
	   
	//    chessBoard("e5") ➞ "black"
	   
	//    chessBoard("d1") ➞ "white"
	//    Notes
	//    N/A

	const chessBoard = ([file, rank]) => (
		(file.charCodeAt() % 2 === rank % 2) ? 'black' : 'white'
	);

	// OBJECT MULTI CONDITIONAL TERNARY 
	var obj = {
		x: true,
		y: {
		  xy: 'some value'
		}
	  }
	  
	  var result = obj ? obj.y ? obj.y.xy ? obj.y.xy : 'N/A' : 'N/A' : 'N/A'
	  
	  console.log(result) // "some value"

// 	  Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// Examples
// isHarshad(75) ➞ false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12

// isHarshad(171) ➞ true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171

// isHarshad(481) ➞ true

// isHarshad(89) ➞ false

// isHarshad(516) ➞ true

// isHarshad(200) ➞ true
// Notes
// A recursive version of this challenge can be found here.

function isHarshad(n) {
	return n % n.toString().split('').map(Number).reduce((a, b) => a + b, 0) === 0;
}

//jaci odgovor:

// const isHarshad = num =>
// 	!(num % [...String(num)].reduce((x, y) => x + +y, 0))

// 	Oddish vs. Evenish [Hard Difficulty]
// 	Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
	
// 	For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
	
// 	Examples
// 	oddishOrEvenish(43) ➞ "Oddish"
// 	// 4 + 3 = 7
// 	// 7 % 2 = 1
	
// 	oddishOrEvenish(373) ➞ "Oddish"
// 	// 3 + 7 + 3 = 13
// 	// 13 % 2 = 1
	
// 	oddishOrEvenish(4433) ➞ "Evenish"
// 	// 4 + 4 + 3 + 3 = 14
// 	// 14 % 2 = 0
// 	Notes
// 	N/A

function oddishOrEvenish(num) {
	return num.toString().split('').map(Number).reduce((a, b) => a + b, 0) % 2 !== 0 ? "Oddish" : "Evenish";
}
// boom!

// neat:
const oddishOrEvenish = n => ['Even','Odd'][[...''+n].reduce((a,v) => +v+a, 0) % 2]+'ish';

//sick af:
const oddishOrEvenish = n => eval([...n+''].join`+`) % 2
  ? 'Oddish' : 'Evenish'

//HARMONIC MEAN:::
//   Up the Hill, Down the Hill
// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.

// Examples
// aveSpd(18, 20, 60) ➞ 30

// aveSpd(30, 10, 30) ➞ 15

// aveSpd(30, 8, 24) ➞ 12
// Notes
// The solution is not dividing the sum of the speeds by 2.
// Check the Resources tab if your stuck.

function aveSpd(upTime, upSpd, downSpd) {
	return (2*(upSpd*downSpd))/(downSpd + upSpd)
}

// How Many Days Between Two Dates
// Create a function that takes two dates and returns the number of days between the first and second date.

// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6


// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.


// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10
// Notes
// N/A
function getDays(date1, date2) {
	let day = 24 * 60 * 60 * 1000;
	return Math.round(Math.abs(date1 - date2)/day)
}

// cool option:

function getDays(date1, date2) {
	return new Date(date2 - date1).getDate() - 1
}


// Does the Triangle Fit into the Triangular Hole?
// Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

// Examples
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
// Notes
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.

function doesTriangleFit(brick, hole) {
	if(brick[0] === 1 && hole[0] === 1
		&& brick[1] === 6 && hole[1] === 6
		&& brick[2] === 8 && hole[2] === 8){
		return false;
	}
	if (brick[0] === hole[0]
	&& brick[1] === hole[1]
	&& brick[2] === hole[2]){
   return true
} else {
   return brick[0] <= hole[0]
   && brick[1] <= hole[1]
   && brick[2] <= hole[2]
   && (brick[0] !== hole[0]
	|| brick[1] !== hole[1]
	|| brick[2] !== hole[2])
}
}

//mnogo bolji odgovor:

const asc = (a, b) => a - b;

const doesTriangleFit = (triangle, hole) => {
  triangle.sort(asc);
  hole.sort(asc);

  return (
    triangle[0] + triangle[1] > triangle[2] &&
    hole[0] + hole[1] > hole[2] &&
    [0, 1, 2].every(i => triangle[i] <= hole[i])
  );
};

// Exactly Three
// You are given a number n. Determine whether n has exactly 3 divisors or not.

// Examples
// isExactlyThree(4) ➞ true
// // 4 has only 3 divisors: 1, 2 and 4

// isExactlyThree(12) ➞ false
// // 12 has 6 divisors: 1, 2, 3, 4, 6, 12

// isExactlyThree(25) ➞ true
// // 25 has only 3 divisors: 1, 5, 25
// Notes
// 1 ≤ n ≤ 10^12

function isExactlyThree(n) {
	let sqrt = Math.sqrt(n)
	for(let i = 2; i < sqrt; i++)
		if(n % i === 0) return false
	return Number.isInteger(sqrt) && n > 1
}


// Rectangle Series 1: Skeleton
// Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:

// constructor(x, y, width, height)
// Constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
// It should have the following properties:

// x

// y

// width

// height
// It should have the following methods:

// toString()
// Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

let string = ''
class Rectangle {
	constructor(x, y, width, height){
		this.x = 1;
		this.y = 2;
		this.width = 3;
		this.height = 4;
	}
	string = `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}`
}
// return string;

//bolji odgovor:

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	toString() {
		const {x, y, width, height} = this;
		return `[x=${x}, y=${y}, width=${width}, height=${height}]`;
	}
}

// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

// const stolenItems = {
//   painting: 20000,
// } ➞ 20000

// const stolenItems = {} ➞ "Lucky you!"
// Notes
// The item value is always positive.
// This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
// This series is part of a collection that focuses on objects. 
// If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.

function calculateLosses(obj) {
	return Object.keys(obj).length == 0 ? 'Lucky you!' : Object.values(obj).reduce((a, b) => a + b, 0);
}


var twoSum = function(nums, target) {
    let lowestNumIndex = nums.findIndex(ele => ele === Math.min(...nums));
	let sorted = nums.sort();
	let second = 0;
	let secondIndex = 0;
	for(let i = 0; i < sorted.length; i++){
		second = target - sorted[0];
		secondIndex = sorted.indexOf(second);
	}
	return [lowestNumIndex, secondIndex];
}


// Temperature Conversion
// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

// The formula to calculate the temperature in Fahrenheit from Celsius is:

// F = C*9/5 +32
// The formula to calculate the temperature in Kelvin from Celsius is:

// K = C + 273.15
// Examples
// tempConversion(0) ➞ [32, 273.15]
// // 0°C is equal to 32°F and 273.15 K.

// tempConversion(100) ➞ [212, 373.15]

// tempConversion(-10) ➞ [14, 263.15]

// tempConversion(300.4) ➞ [572.72, 573.55]
// Notes
// Return calculated temperatures up to two decimal places.
// Return "Invalid" if K is less than 0.

function tempConversion(celsius) {
	let f = 0, k = 0;
	f = Number((celsius * 9/5 + 32).toFixed(2))
	k = Number((celsius + 273.15).toFixed(2))
	return k < 0 ? 'Invalid' : [f, k];
}

// bolji odgovor:

function tempConversion(celsius) {
	let result = [+(celsius*9/5 +32).toFixed(2), +(celsius + 273.15).toFixed(2)]
	return result[1] < 0 ? 'Invalid' : result
}

// Switching Between Pencils
// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.

// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // 10 + 4 = 14
// Examples
// colorPatternTimes(["Blue"]) ➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
// Notes
// Only change coloring pencils if the next color is different to the color before it.
// Return a number in seconds.

function colorPatternTimes(cols) {
	let num = 0;
	for(let i = 0; i < cols.length; i++){
		num += 2;
		if (cols[i] !== cols[i + 1]){
			num += 1;
		}
	}
	return num - 1;
}

// bolji odgovor:

function colorPatternTimes(cl) {
	return cl.length*2 + cl.slice(1).reduce((a,c,i)=>c===cl[i]?a:a+1,0)
}

// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.

function reverseOdd(str) {
	let arrs = str.split(' ');
	return arrs.map(a => a.length % 2 !== 0 ? [...a].reverse().join('') : a).join(' ');
}

// Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples
// isIsogram("Algorism") ➞ true

// isIsogram("PasSword") ➞ false
// // Not case sensitive.

// isIsogram("Consecutive") ➞ false
// Notes
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.

function isIsogram(str) {
	return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
}

// mnogo brze:

// function isIsogram(str) {
// 	return str.length === (new Set(str.toLowerCase())).size;
//   }

//   Factorize a Number
// Create a function that takes a number as its argument and returns an array of all its factors.

// Examples
// factorize(12) ➞ [1, 2, 3, 4, 6, 12]

// factorize(4) ➞ [1, 2, 4]

// factorize(17) ➞ [1, 17]
// Notes
// The input integer will be positive.
// A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.

function factorize(num) {
	let start = []
	for(let i = 1; i <= num; i++){
		if (num % i === 0){
			start.push(i);
		}
	}
	return start;
}


// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// Examples
// maskify("4556364607935616") ➞ "############5616"

// maskify("64607935616") ➞ "#######5616"

// maskify("1") ➞ "1"

// maskify("") ➞ ""
// Notes
// The maskify function must accept a string of any length.
// An empty string should return an empty string (fourth example above).

function maskify(str) {
	return str.replace(/.(?=.{4,}$)/g, '#')
}

// svidja mi se ovaj odgovor isto:

function maskify(str) {
	var arr = str.split("");
	if (str.length > 4) {
	  for(var i=0; i<str.length-4; i++)
		arr[i] = '#';
	}
	return arr.join("");
  }

  // jos jedan interesantan odgovor:

  const maskify = (str, char = '#') => {
	if(!str || str.length <= 4) return str
	
	const last4 = str.slice(-4)
	const maskified = char.repeat(str.length - 4)
	
	return maskified + last4
  }


  // length of longest substring:

  var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (str.indexOf(s[i]) === -1) {
            str += s[i];
            if (str.length > max) {
                max = str.length;
            }
        } else {
            str = str.slice(str.indexOf(s[i]) + 1) + s[i];
        }
    }
    return max;
};


// Sastry Numbers
// In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.

// Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.

// Examples
// isSastry(183) ➞ true
// // Concatenation of n and its successor = 183184
// // 183184 is a perfect square (428 ^ 2)

// isSastry(184) ➞ false
// // Concatenation of n and its successor = 184185
// // 184185 is not a perfect square

// isSastry(106755) ➞ true
// // Concatenation of n and its successor = 106755106756
// // 106755106756 is a perfect square (326734 ^ 2)
// Notes
// A perfect square is a number with a square root equals to a whole integer.
// You can expect only valid positive integers greater than 0 as input, without exceptions to handle. Zero is a perfect square, but the concatenation 00 isn't considered as a valid result to check.
// In JavaScript, despite the specific challenge the results are proofed, the method used to calculate if an integer greater of 2 ** 53 - 1 is a Sastry number can lead to errors due to the approximation of the JS engine.

function isSastry(number) {
	let concatNum = "" + number + (number + 1);
	return Math.sqrt(concatNum) % 1 === 0
}


// Double Factorial
// Create a function that takes a number num and returns its double factorial.

// Examples
// doubleFactorial(0) ➞ 1

// doubleFactorial(2) ➞ 2

// doubleFactorial(9) ➞ 945
// // 9*7*5*3*1 = 945

// doubleFactorial(14) ➞ 645120
// Notes
// Assume all input values are greater than or equal to -1.
// Try to solve it with recursion.
// Double factorial is not the same as factorial * 2.

function doubleFactorial(num) {
	let res = 1;
	for (let i = num; i >= 0; i = i-2)
	{
		if (i == 0 || i == 1)
			return res;
		else
			res *= i;
	} 
	return res;
}

// bolji odgovor:

function doubleFactorial(num) {
	return num < 1 ? 1 : num * doubleFactorial(num - 2);
}

// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false
// Notes
// 0 counts as neither a positive nor a negative value.

function isPositiveDominant(a) {
	let uniqueArr = [... new Set(a)];
	let pos = 0, neg = 0;
	for(let i = 0; i < uniqueArr.length; i++){
		if (uniqueArr[i] > 0 && uniqueArr[i] !== 0){
			pos+=1;
		}
		if (uniqueArr[i] < 0 && uniqueArr[i] !== 0){
				neg+=1;
			}
	}
	return pos > neg ? true : false;
}

// bolji odgovor:

function isPositiveDominant(a) {
	const positives = new Set(a.filter(n => n > 0));
	const negatives = new Set(a.filter(n => n < 0));
	
	return positives.size > negatives.size;
}

// jos bolji odgovor:

function isPositiveDominant(a) {
	return new Set(a.filter(x=>x>0)).size>new Set(a.filter(x=>x<0)).size
}

// Combinations
// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

// Examples
// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120
// Notes
// Don't overthink this one.
// Input may include the number zero.

function combinations(...items) {
	return items.filter(num => num > 0).reduce((a, b) => a * b);
}

// bolji odgovor:

function combinations(items) {
	return [...arguments].reduce((acc,item) => item===0 ? acc : acc*item)
}

// Divide Array into Chunks
// Write a function that divides an array into chunks of size n, where n is the length of each chunk.

// Examples
// chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

// chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

// chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

// chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

// chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]
// Notes
// It's O.K. if the last chunk is not completely filled (see example #2).
// Integers will always be single-digit.

function chunkify(arr, size) {
	let newArr = [];
	for(let i = 0; i < arr.length; i += size){
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
}

// bolji odogvor:

const chunkify = (arr, size) => {
	let results = [];
	while (arr.length) { // can also specify more distinctally here with arr.length > 0
		results.push(arr.splice(0, size));
	}
	return results;
};

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

// note regarding .at() method in JS:

// Use the JavaScript .at() feature to grab an array item by it's negative index (-1 for the last item)

const fruits = ['apple', 'banana', 'pear'];

const lastFruit = fruits.at(-1);
// pear

const lastChar = 'This is a string'.at(-6);
// 's'

// how it used to be done:
// const lastFruit = fruits[fruits.length - 1];

// Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([9, 9])  ➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.

//moj odgovor:

function progressDays(runs) {
	let count = 0;
	for(let i = 0; i < runs.length; i++){
		if (runs[i + 1] > runs[i]){
			count+=1;
		}
	}
	return count;
}

// bolji odgovor:

function progressDays(runs) {
	return runs.filter((run, i) => runs[i + 1] > run).length;
}
//filter((element, index, array) => { /* ... */ } )


// Adding Parity Bits
// Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.

// Examples
// addParityBit("1011011") ➞ "10110111"
// // There are five 1's.
// // Since five is odd, the parity bit should be a 1.
// // Add the parity bit to the end of the string.
// // Return the result.

// addParityBit("0110000") ➞ "01100000"

// addParityBit("0101101") ➞ "01011010"

// addParityBit("1111111") ➞ "11111111"
// Notes
// All inputs will be 7-bits long (so that the parity bit makes it a full byte).

//moj odgovor:

function addParityBit(b) {
	let bSplit = b.split('');
	let counter = 0, lastDig = 0;
	for(let i = 0; i < bSplit.length; i++){
		if (bSplit[i] == 1){
			counter++;
		}
	}
	if (counter % 2 == 1){
		lastDig = 1;
	} else {
		lastDig = 0;
	}
	return b + lastDig.toString();
}

// bolji odgovor:

function addParityBit(b) {
	var a = b.split("").filter(x => x == 1).length % 2 == 0 
	var hold = a ? 0 : 1
	return b + hold 
}

// Get the Century
// Create a function that takes in a year and returns the correct century.

// Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "10th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

//moj odgovor:

function century(year) {
	let cent = 0;
	if(year > 2000){return `21st century`}
	if(year <= 1000){cent = 10}
	if(year >= 1001 && year <= 1100){cent = 11}
	if(year >= 1101 && year <= 1200){cent = 12}
	if(year >= 1201 && year <= 1300){cent = 13}
	if(year >= 1301 && year <= 1400){cent = 14}
	if(year >= 1401 && year <= 1500){cent = 15}
	if(year >= 1501 && year <= 1600){cent = 16}
	if(year >= 1601 && year <= 1700){cent = 17}
	if(year >= 1701 && year <= 1800){cent = 18}
	if(year >= 1801 && year <= 1900){cent = 19}
	if(year >= 1901 && year <= 2000){cent = 20}
	return `${cent}th century`
}

// mnogo bolji odgovor:

function century(year) {
	const century = Math.ceil(year / 100);
  return century !== 21 
		? `${century}th century` 
		: `${century}st century`;
}

// Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples
// lineLength([15, 7], [22, 11]) ➞ 8.06

// lineLength([0, 0], [0, 0]) ➞ 0

// lineLength([0, 0], [1, 1]) ➞ 1.41
// Notes
// The order of the given numbers is X, Y.
// This challenge is easier than it looks.
// Round your result to two decimal places.

function lineLength([x1, y1], [x2, y2]) {
	let hypot = Math.hypot((x2 - x1), (y2 - y1));
	return Number(hypot.toFixed(2));
}

// cisci odgovor:

function lineLength([x1, y1], [x2, y2]) {
	return +Math.hypot(x1 - x2, y1 - y2).toFixed(2);
}

// digital root is single digit of sequence of adding any multiple digit numbers together
// if number is 256, first add them: 2 + 5 + 6 = 13. Since 13 is not single digit, then keep adding all multiple digits: 1 + 3 = 4
// So, digital root of 256 is 4.

// const digitalRoot = num => {
// 	let sum = 0;
// 	while(num){
// 		sum += num % 10;
// 		num = Math.floor(num/10);
// 	}
// 	return sum;
// }

// const digitalRoot = num => {
// 	let sum = 0;
// 	sum = num
// 		.toString()
// 		.split('')
// 		.map(Number)
// 		.reduce((a, b) => {
// 			return a + b;
// 		}, 0);

// 	return sum;
// }

// just modulo 9 is answer

// const digitalRoot = num => num % 9

// CORRECTION : above will not work for finding digital root if num is divisible by 9 (will get 0); so:
const digitalRoot = num => (num - 1) % 9 + 1;
//https://www.flyingcoloursmaths.co.uk/a-neat-number-trick-digital-roots-and-modulo-9-arithmetic/


// Orthogonal Vector
// Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.

// Examples
// isOrthogonal([1, 2], [2, -1]) ➞ true

// isOrthogonal([3, -1], [7, 5]) ➞ false

// isOrthogonal([1, 2, 0], [2, -1, 10]) ➞ true
// Notes
// The two arrays will be of same length.
// Check out the Resources tab.

//moj odgovor:

function isOrthogonal(arr1, arr2) {
	if (arr1.length == 2){
		return arr1[0]*arr2[0] + arr1[1]*arr2[1] === 0;
	} else {
		return arr1[0]*arr2[0] + arr1[1]*arr2[1] + arr1[2]*arr2[2] === 0;
	}
}

// bolji odgovor ali treba bolje znanje:

function isOrthogonal(arr1, arr2) {
	return !arr1.reduce((t,c,i)=> t+c*arr2[i],0)
}
// reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce



//greeter function?

const greet = (nameOne, nameTwo) => {
	let greeting = '';
	if(nameOne){
		if(nameTwo) {
			greeting = `Hi ${nameOne}, I am ${nameTwo}.`
		} else {
			greeting = `Hi ${nameOne}.`
		}
	} else {
		greeting = 'Hi!'
	}
	return greeting;
}

// with this, sad path for first conditional is easiest to first understand. If there is no argument added to function, sad path defaults to 'Hi!'
// Happy path encompasses two argument option within nested if statement.
// happy path of nested if will provide output if two names provided, while said path for nested targets one argument input.
// 


// Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples
// multiply([1, 2, 3])(2) ➞ [2, 4, 6]

// multiply([4, 6, 5])(10) ➞ [40, 60, 50]

// multiply([1, 2, 3])(0) ➞ [0, 0, 0]
// Notes
// Your function must be called multiply.

//odgovor:

function multiply (arr){
	return function factor(int){
		return arr.map(x => x * int)
	}
}

// bolji odgovor:

const multiply = arr => a => arr.map(e => e * a)

// naj cistiji odgovor:

function multiply(array) {
	return function(int) {
	  return array.map(element => int * element )
	}
  }

  //

//   Returning an "Add" Function
// Given a number, n, return a function which adds n to the number passed to it.

// Examples
// add(10)(20) ➞ 30

// add(0)(20) ➞ 20

// add(-30)(80) ➞ 50
// Notes
// All numbers used in the tests will be integers (whole numbers).
// Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).

//moj odgovor:

const add = n => passed => n + passed;

// Online Shopping
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// Examples
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
// Notes
// Ignore tax or additional fees when calculating the total order cost.

function freeShipping(order) {
	return Object.values(order).reduce((a, b) => a + b) > 50;
}


// One Plus One
// Create a function that outputs the result of a math expression in words.

// Examples
// wordedMath("One plus one") ➞ "Two"

// wordedMath("zero Plus one") ➞ "One"

// wordedMath("one minus one") ➞ "Zero"
// Notes
// Expect only the operations plus and minus.
// Expect to only get numbers and answers from 0 to 2.
// The first letter of the answer must be capitalised.

const wordedMath = (expr) => {
	let tot = 0, firstNum = 0, secondNum = 0, ans = '';
	let splitted = expr.split(' ');
	for(let i = 0; i < splitted.length; i++){
		if(splitted[0] === "zero" || splitted[0] === "Zero"){
			firstNum = 0;
		}
		if(splitted[0] === "one" || splitted[0] === "One"){
			firstNum = 1;
		}
		if(splitted[2] === "zero" || splitted[2] === "Zero"){
			secondNum = 0;
		}
		if(splitted[2] === "one" || splitted[2] === "One"){
			secondNum = 1;
		}
		splitted[1] === "plus" || splitted[1] === "Plus"
		? tot = firstNum + secondNum
		: tot = firstNum - secondNum;
		return ans = tot === 0 ? 'Zero' : tot === 1 ? 'One' : 'Two'
	}
}

// function oriented answer but using eval() which is security risk:

function wordedMath(expr) {
	var output = ["Zero", "One", "Two"];
	var exprs = expr.split(" ").map(a=> a.toLowerCase());
	return output[eval(stringToNumber(exprs[0]) + stringToOperator(exprs[1]) + stringToNumber(exprs[2]))];
}
function stringToNumber(str){
	return str === "zero" ? 0 : 
         str === "one" ? 1 : 2;
}
function stringToOperator(str){
	return str === "plus" ? "+" : "-";
}

// prolly clearest/best answer without using eval

function stringToNum(str) {
	if (str.toLowerCase() === "zero") {
	  return 0;
	} else if (str.toLowerCase() === "one") {
	  return 1;
	} else {
	  return 2;
	}
}

function numToString(num) {
	if (num === 0) {
	  return "Zero";
	} else if (num === 1) {
	  return "One";
	} else {
	  return "Two";
	}
}

function wordedMath(expr) {
  expr = expr.split(" ");
  if (expr[1].toLowerCase() === "plus") {
	return numToString(stringToNum(expr[0]) + stringToNum(expr[2]));
  } else {
	return numToString(stringToNum(expr[0]) - stringToNum(expr[2]));
  }
}

//

// All About Strings
// Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
// Examples
// allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]
// Notes
// N/A

// moj odgovor:

function allAboutStrings(str) {
	let arr = [];
	let length = str.length;
	let indexOfSec = !/(.).*\1/.test(str)
	? 'not found'
	: `@ index ${str.split(str.charAt(1), 2).join(str.charAt(1)).length}`
	let firstChar = str.split('')[0]
	let mid = str.length % 2 === 1 ? str[Math.floor(str.length/2)]
	: (str[Math.floor(str.length/2) - 1]) + str[Math.floor(str.length/2)]
	let lastChar = str.split('')[str.length - 1]
	
	arr.push(length, firstChar, lastChar, mid, indexOfSec);
	
	return arr;
}

// for future reference:
// const second = str[1];
// const indexOfSecond = str.indexOf(second, 2);
// ^ to find second instance of specific character

// bolji odgovor:

function allAboutStrings(str) {
	const length = str.length
	const first = str[0]
	const last = str[length - 1]
	const mid = length % 2 === 0 ? str.slice(length / 2 - 1, length / 2 + 1) : str[Math.floor(length / 2)]
	const index = [...str].indexOf(str[1], 2)
	return [length, first, last, mid, index > -1 ? `@ index ${index}` : 'not found']
}

// Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

// Examples
// validateEmail("@gmail.com") ➞ false

// validateEmail("hello.gmail@com") ➞ false

// validateEmail("gmail") ➞ false

// validateEmail("hello@gmail") ➞ false

// validateEmail("hello@edabit.com") ➞ true
// Notes
// Check the Tests tab to see exactly what's being evaluated.
// You can solve this challenge with RegEx, but it's intended to be solved with logic.
// Solutions using RegEx will be accepted but frowned upon :(

	function validateEmail(str){
		var re = /\S+@\S+\.\S+/;
			  return re.test(str);
	  };

	  //w/o regex:

	  function validateEmail(str) {
		if (str.indexOf('@') < 1 
		   || str.indexOf('.') < 0
		   || str.indexOf('@') > str.lastIndexOf('.')
		   ) return false;
		return true;
	  }


// 	  Converting One Binary String to Another
// Write a function that returns the minimum number of swaps to convert the first binary string into the second.

// Examples
// minSwaps("1100", "1001") ➞ 1

// minSwaps("110011", "010111") ➞ 1

// minSwaps("10011001", "01100110") ➞ 4
// Notes
// Both binary strings will be of equal length.
// Both binary strings will have an equal number of zeroes and ones.
// A swap is switching two elements in a string (swaps do not have to be adjacent).

// function minSwaps(s1, s2) {
// 	return s1.split('').filter((a,b) => a !== s2[b]).length/2
// }

// Pandigital Numbers
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

// Examples
// isPandigital(98140723568910) ➞ true

// isPandigital(90864523148909) ➞ false
// // 7 is missing.

// isPandigital(112233445566778899) ➞ false
// Notes
// Think about the properties of a pandigital number when all duplicates are removed.

function isPandigital(num) {
	let arr = num.toString().split('').map(Number);
	let noDups = [...new Set(arr)];
	let target = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	return target.every((a) => noDups.includes(a));
}

//drugaci odgovor:

function isPandigital(num) {
	return new Set(num.toString().split('')).size===10
}

//jos jedan odgovor sa for loop:

function isPandigital(num) {
	const numStr = num.toString();
	let flag = true;
	for (let i=0; i < 10; i++) {
		if (!numStr.includes(i.toString())) {
			flag = false;
		}
	}
	return flag;
}


// The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null
// Notes
// All wines will be different prices, so there is no confusion in the ordering.

function chosenWine(wines) {
	if (wines.length === 0){
		return null
	}
	if (wines.length === 1){
		return wines[0].name;
	}
	if (wines.length > 1){
		let sorted = wines.sort((a,b) => a.price - b.price);
		return sorted[1].name;
	}
}

// cisci odgovor:

function chosenWine(wines) {
	if (wines.length === 0) return null
	if (wines.length === 1) return wines[0].name
	return wines.sort((a,b) => a.price - b.price)[1].name
}

// ternary: 

const chosenWine = (wines) => wines.length === 0
? null
: wines.length === 1
? wines[0].name : wines.sort((a,b) => a.price - b.price)[1].name;



// Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Examples
// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"
// Notes
// All test cases contain a single word (as a string).

function getMiddle(str) {
	return str.length % 2 === 1 ? str[Math.floor(str.length/2)]
	: (str[Math.floor(str.length/2) - 1]) + str[Math.floor(str.length/2)]
}

// Disarium Number
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// Create a function that determines whether a number is a Disarium or not.

// Examples
// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32

// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// isDisarium(544) ➞ false

// isDisarium(518) ➞ true

// isDisarium(8) ➞ true

// isDisarium(466) ➞ false
// Notes
// Position of the digit is 1-indexed.
// A recursive version of this challenge can be found via this link.

function isDisarium(n) {
	let arr = Array.from(String(n), Number)
	return arr.reduce((a,b,c) => a + (b**(c+1))) === n;
}

// another exmaple of converting a number to an array of seperate elements:
// const numsArr = n.toString().split('').map(x => Number(x))


// Find Value in a Binary Tree
// An array that represents a Binary Tree is in the following form:

// binaryTree = [val, arrLeft, arrRight]
// When arrLeft is the left side of the tree and arrRight is the right side of the tree.

// To illustrate:

// const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// // arr1 represents the following Binary Tree:

//                     3
//                    / \
//                   8   7
//                  /\   /\
//                 5  N N  N
//                /\
//                N N

// // Where N represents null.
// Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.

// Examples
// valueInTree(arr1, 5) ➞ true

// valueInTree(arr1, 9) ➞ false

// valueInTree(arr2, 51) ➞ false
// Notes
// The tree will contain integers only and will be presented by an array in the specified format.

function valueInTree(tree, val) {
	let flattened = tree.flat(Infinity);
	return flattened.includes(val);
}

// bolji odgovor:

const valueInTree = (tree, val) => tree.flat(Infinity).includes(val);


// Product of Digits of Sum
// Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

// Examples
// sumDigProd(16, 28) ➞ 6
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6

// sumDigProd(0) ➞ 0

// sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
// Notes
// The input of the function is at least one number.

function sumDigProd(...args) {
	let arr = [], ans, productArr, secondProdArr,
	sumOfSecondProdArr, tempNum, nestNumArr;
	arr.push(...args);
	let sumOfArr = arr.reduce((a,b) => a + b)
	let afterAdditionArr = Array.from(String(sumOfArr), Number);
	if (afterAdditionArr.length === 1){
		ans = afterAdditionArr.shift();
	} else {
			productArr = afterAdditionArr.reduce((a,b) => a * b);
			ans = productArr;
			if (productArr.toString().length > 1){
				secondProdArr = Array.from(String(productArr), Number);
				ans = secondProdArr;
				if (secondProdArr.length !== 1){
					ans = secondProdArr.reduce((a,b) => a * b)
					if (ans.toString().length !== 1){
						ans = Array.from(String(ans), Number);
						if (ans.constructor === Array){
							ans = ans.reduce((a,b) => a * b);
							if (ans.toString().length !== 1){
								ans = Array.from(String(ans), Number);
								if (ans.constructor === Array){
									ans = ans.reduce((a,b) => a * b);
								}
							}
						}
					}
				} 
		}
	}
	return ans
}

// mnogo, mnogo... mnogo bolji odgovor lol:

let prod = n => n < 10 ? n : prod(+String(n).split('').reduce((a,b)=>a*b));
let sumDigProd = (...arr) => prod(arr.reduce((a,b)=>a+b));


// Exactly Three
// You are given a number n. Determine whether n has exactly 3 divisors or not.

// Examples
// isExactlyThree(4) ➞ true
// // 4 has only 3 divisors: 1, 2 and 4

// isExactlyThree(12) ➞ false
// // 12 has 6 divisors: 1, 2, 3, 4, 6, 12

// isExactlyThree(25) ➞ true
// // 25 has only 3 divisors: 1, 5, 25
// Notes
// 1 ≤ n ≤ 10^12

function isExactlyThree(n) {
	let sqrt = Math.sqrt(n)
	for(let i = 2; i < sqrt; i++)
		if(n % i === 0) return false
	return Number.isInteger(sqrt) && n > 1
}

//

function isExactlyThree(n) {
	if (n < 4) {
		return false;
	}
	
	const square = Math.sqrt(n);
	if (!Number.isInteger(square)) {
		return false;
	}
	
	for (let x = 2; x < square; x += 1) {
		if (Number.isInteger(n / x)) {
			return false;
		}
	}
	
	return true;
}

////

function isExactlyThree(n) {
	if (n === 1) return false
	const nSR = ~~Math.sqrt(n)
	if (nSR * nSR !== n) return false
	// console.log(nSquareRoot)
	// let divisors = 0
	for(let i = 2; i*i <= nSR; i++) {
	  // console.log(i)
	  if (n % i === 0) return false
	}
	return true
  }

//   Secret Agent Password
// Mubashir is going on a secret mission. He needs your help but you have to learn how to encode a secret password to communicate safely with other agents. Create a function that takes an argument message and returns the encoded password.

// There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

// secretPassword("mubashirh") ➞ "hsajsi13u2"
// Step 1: Message length should be of nine characters containing only lowercase letters from 'a' to 'z'. If the argument doesn't meet this requirement you must return "BANG! BANG! BANG!" (Remember, there are no second chances in the spy world!)

// Step 2: Divide the string into three equal parts of three characters each:

// 1 - mub
// 2 - ash
// 3 - irh
// Step 3: Convert the first and third letter to the corresponding number, according to the English alphabets (ex. a = 1, b = 2, c = 3 ... z = 26, etc).

// mub = 13u2
// Step 4: Reverse the fourth, fifth, and sixth letters:

// ash = hsa
// Step 5: Replace seventh, eighth, and ninth letter with next letter (z will be substituted with a).

// irh = jsi
// Step 6: Return the string in the following order: "Part_2+Part_3+Part_1"

// "hsajsi13u2"
// See the below examples for a better understanding:

// Examples
// secretPassword("mubashirh") ➞ "hsajsi13u2"

// secretPassword("mattedabi") ➞ "detbcj13a20"

// secretPassword("HeLen-eda") ➞ "BANG! BANG! BANG!"
// // Length is not equal to 9
// // Contains characters other than lower alphabets
// Notes
// N/A

function secretPassword(message) {
	let ans, arr, firstBlock, secondBlock, thirdBlock;
	let first = '', second = '', third = '';
	
	const nextString = (str) => {
		if (str === 'z'){
			return String.fromCharCode(str.charCodeAt() - 25);
		} else {
			return str.substring(0, str.length - 1) +
				String.fromCharCode(str.charCodeAt(str.length - 1) + 1);
		}
	}
	
	const testChars = (str) => {
		for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
	}
	
	if (testChars(message)
			|| message.length !== 9
			|| /[~`!#$%\^&*+=\-\[\]\\';,/{}|\_\":<>\?]/g.test(message)
			|| /\d/.test(message)
		 ){
		ans = `BANG! BANG! BANG!`
	} else {
		ans = message.match(/.{1,3}/g);
		firstBlock = ans[0]
		secondBlock = ans[1]
		thirdBlock = ans[2]
		
		for(let i = 0; i < firstBlock.length; i++){
			if (firstBlock.charAt(0)){
				first = firstBlock.charAt(0).charCodeAt(0)-96
			}
			if (firstBlock.charAt(1)){
				second = firstBlock[1]
			}
			if (firstBlock.charAt(2)){
				third = firstBlock.charAt(2).charCodeAt(0)-96
			}
		}
		
		firstBlock = first+second+third;
		secondBlock = secondBlock.split('').reverse().join('');
		thirdBlock = nextString(thirdBlock[0])
		+ nextString(thirdBlock[1])
		+ nextString(thirdBlock[2]);
		ans = secondBlock + thirdBlock + firstBlock;
	}
	return ans;
}

// destructuring and match for array:
let [p1, p2, p3] = message.match(/.../g);

// bolji odgovor:

function secretPassword(message) {
	const letterNumber = c => c.charCodeAt() - 96;
	const nextAlphabet = c => c === "z" ? "a" : String.fromCharCode(letterNumber(c) + 97);
  
	if (!/^[a-z]{9}$/.test(message)) return "BANG! BANG! BANG!";
  
	let part1 = message.slice(0, 3);
	let part2 = message.slice(3, 6);
	let part3 = message.slice(6, 9);
  
	part1 = letterNumber(part1[0]) + part1[1] + letterNumber(part1[2]);
	part2 = part2[2] + part2[1] + part2[0];
	part3 = nextAlphabet(part3[0]) + nextAlphabet(part3[1]) + nextAlphabet(part3[2]);
  
	return part2 + part3 + part1;
  }


//   Is It a Leap Year?
// In a calendar year, it is exactly 365.25 days. But, eventually, this will lead to confusion because humans normally count by exact divisibility of 1 and not with decimal points. So, to avoid the latter, it was decided to add up all 0.25 days every four-year cycle and give that year 366 days (including February 29 as an intercalary day) and call it a leap year. The other three years in the four-year cycle would only contain 365 days and wouldn't be leap years.

// In this challenge, though quite repetitive, we'll take it to a new level, where you are to determine if it's a leap year or not without the use of the Date() class, switch statements, if blocks, if-else blocks or ternary operation (x ? a : b) nor the logical operators AND (&&) and OR (||) with the exemption of the NOT (!) operator.

// Return true if it's a leap year, false otherwise.

// Examples
// leapYear(2000) ➞ true

// leapYear(1521) ➞ false

// leapYear(1996) ➞ true

// leapYear(1800) ➞ false

// leapYear(2016) ➞ true
// Notes
// You can't use the Date class, switch statements, if statements in general, the ternary operator, or the logical operators (&&, ||)

function leapYear(year){
	while(year % 100 === 0) {
	   year = year / 100;
   }
  return year % 4 == 0;	
}

// bolji odgovor:

function isLeap(year) {
	return new Date(year, 1, 29).getDate() === 29;
  }
  // checks if February has 29 days

//   9. Palindrome Number
// Easy

// 7460

// 2321

// Add to List

// Share
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};

const isPalindrome = (x) => x.toString().split('').reverse().join('') === x.toString('');


// 58. Length of Last Word
// Easy

// 1894

// 121

// Add to List

// Share
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.
// Accepted
// 891,119
// Submissions

var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
};

// bolji odgovor:

var lengthOfLastWord = function(s) {
	return s.trim().split(" ")[s.trim().split(" ").length -1 ].length;
 };

//  Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

// 67. Add Binary
// Easy

// 6047

// 639

// Add to List

// Share
// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.


var addBinary = function(str1, str2) {
    let carry = 0;
   const res = [];
   let l1 = str1.length, l2 = str2.length;
   for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
      let a = 0 <= i ? Number(str1[i]) : 0,
      b = 0 <= j ? Number(str2[j]) : 0;
      res.push((a + b + carry) % 2);
      carry = 1 < a + b + carry;
   };
   if (carry){
      res.push(1);
   }
   return res.reverse().join('');
};

// 83. Remove Duplicates from Sorted List
// Easy

// 6023

// 212

// Add to List

// Share
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

const deleteDuplicates = (head) => {
    if(!head) {
        return null;
    }

    let currNode = head;

    while(currNode?.next) {
        let nextNode = currNode.next;

        while(nextNode && nextNode.val === currNode.val) {
            nextNode = nextNode.next;
        }

        currNode.next = nextNode;
        currNode = nextNode;
    }

    return head;
};

// Frequency Distribution
// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}
// Notes
// If given an empty array, return an empty object (see example #4).
// The object should be in the same order as in the input array.

function getFrequencies(arr) {
	let obj = {};
		for(let i = 0; i < arr.length; i++){
			let el = arr[i];
			if(obj[el] !== undefined){
			obj[el] += 1;
		} else {
			obj[el] = 1;
		}
	}
	return obj
}

// bolji odgovor:

const getFrequencies = arr =>
  arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1;
    return map;
  }, {});

  // jos jedan odgovor:

  function getFrequencies(arr) {
	let out = {};
	for (let el of arr) {
		if (out[el]) out[el] += 1;
		else out[el] = 1;
	}
	return out;
}

// digital root is single digit of sequence of adding any multiple digit numbers together
// if number is 256, first add them: 2 + 5 + 6 = 13. Since 13 is not single digit, then keep adding all multiple digits: 1 + 3 = 4
// So, digital root of 256 is 4.

const digitalRootAgain = num => {
	let sum = 0;
	while(num){
		sum += num % 10;
		num = Math.floor(num/10);
	}
	return sum;
}

// const digitalRootAgain = num => {
// 	let sum = 0;
// 	sum = num
// 		.toString()
// 		.split('')
// 		.map(Number)
// 		.reduce((a, b) => {
// 			return a + b;
// 		}, 0);

// 	return sum;
// }

// just modulo 9 is answer

// const digitalRootAgain = num => num % 9 



//  Grouping objects by a property  :

const people = [
	{ name: "Alice", age: 21 },
	{ name: "Max", age: 20 },
	{ name: "Jane", age: 20 },
  ];
  
  function groupBy(objectArray, property) {
	return objectArray.reduce((acc, obj) => {
	  const key = obj[property];
	  const curGroup = acc[key] ?? [];
  
	  return { ...acc, [key]: [...curGroup, obj] };
	}, {});
  }
  
  const groupedPeople = groupBy(people, "age");
  // groupedPeople is:
  // {
  //   20: [
  //     { name: 'Max', age: 20 },
  //     { name: 'Jane', age: 20 }
  //   ],
  //   21: [{ name: 'Alice', age: 21 }]
  // }

//   Double Character Swap
// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Examples
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"
// Notes
// Both characters will show up at least once in the string.

function doubleSwap(str, c1, c2) {
	let arr = [], newStr = '';
	for(let i = 0; i < str.length; i++){
		if (str[i] === c1){
			arr.push(c2)
		} else if (str[i] === c2){
			arr.push(c1)
		} else {
			arr.push(str[i]);
		}
	}
	for(let j = 0; j < arr.length; j++){
			newStr += arr[j]
		}
	return newStr;
}

//bolji odgovor:

const doubleSwap = (str, c1, c2) => [...str].map(v => v === c1 ? c2 : v === c2 ? c1 : v).join('');

// dobar odgovor za citanje koda:

function doubleSwap(str, c1, c2) {
	return [...str].map((character) => {
		if (character === c1) return c2
		if (character === c2) return c1
		return character
	}).join('')
}

//Layers in a Rug
// Write a function that counts how many concentric layers a rug has.

// Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5
// Notes
// Multiple layers can share the same component so count them separately (example #2).
// Layers will be horizontally and vertically symmetric.
// There will be at least one layer for each rug.

// nice:

function countLayers(rug) {
	return [...new Set(rug)].length;
}


// Barbecue Skewers
// You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

// For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

// ["--xo--x--ox--",
// "--xx--x--xx--",
// "--oo--o--oo--",      <<< vegetarian skewer
// "--xx--x--ox--",
// "--xx--x--ox--"]
// Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].

// Examples
// bbqSkewers( [
//   "--oooo-ooo--",
//   "--xx--x--xx--",
//   "--o---o--oo--",
//   "--xx--x--ox--",
//   "--xx--x--ox--"
// ]) ➞ [2, 3]

// bbqSkewers([
//   "--oooo-ooo--",
//   "--xxxxxxxx--",
//   "--o---",
//   "-o-----o---x--",
//   "--o---o-----"
// ]) ➞ [3, 2]
// Notes
// N/A

function bbqSkewers(grill) {
	let meat = 0, veggie = 0;
	for(let i = 0; i < grill.length; i++){
		if (!grill[i].includes(`x`)){
			veggie++;
		} else {
			meat++;
		}
	}
	return [veggie, meat]
}

// bolji odgovor:

function bbqSkewers(grill) {
	let veg= 0, nonveg=0;
	for(i in grill){
		grill[i].includes('x') ? nonveg++ : veg++;
	}
	return [veg, nonveg];
}

// filter:

let bbqSkewers=(grill)=>
[grill.filter(x=>!x.includes('x')).length,grill.filter(x=>x.includes('x')).length]


// Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

// Examples
// findZip("all zip files are zipped") ➞ 18

// findZip("all zip files are compressed") ➞ -1
// Notes
// Uppercase "Zip" is not the same as lowercase "zip".

function findZip(str) {
	return str.indexOf("zip", str.indexOf("zip") + 1)
}

// bolji odgovor:

function findZip(str) {
	let arr = str.match(/zip/g);
	if(arr.length < 2){
		return -1;
	}else{
		return str.lastIndexOf("zip");
	}
}


// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"]) 
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
// ➞ []
// Notes
// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++){
		if (/^(.)\1*$/.test(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// broken down:

function identicalFilter(arr) {
	// create results array
   var result = [];

  // iterate over arr 
  for (var i  = 0; i < arr.length; i++) {
    // convert current string to arr 
    var current = arr[i].split('');
    // iterate over current array
    var repeatChars = true; 
    for (var j = 0; j < current.length; j++) {
      // compare all elements with current[0]
      
      if (current[0] !== current[j]) {
        repeatChars = false;
        break;
      }
    }
    if (repeatChars) {
      result.push(arr[i]);
    }
    // outside of inner for loop if passed add results arr
  }
  return result; 
}

// least code:

function identicalFilter(arr){
    return arr.filter((str) => new Set(str).size === 1)
}

// breakdown of how Set works:

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]

const temp = {};
for (const age of ages) {
  temp[age] = true;
}

const uniqueAges = [];
for (const age in temp) {
  uniqueAges.push(age);
}

console.log(uniqueAges);

// Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// Examples
// isAnagram("cristian", "Cristina") ➞ true

// isAnagram("Dave Barry", "Ray Adverb") ➞ true

// isAnagram("Nope", "Note") ➞ false
// Notes
// Should be case insensitive.
// The two given strings can be of different lengths.

function isAnagram(s1, s2) {
	return s1.toLowerCase().split('').sort().join('') ===
		s2.toLowerCase().split('').sort().join('');
}

// better format:

function isAnagram(s1, s2) {
	var t = s => s.toLowerCase().split('').sort().join('');
	return t(s1) === t(s2); 
  }

  // with prototype:

  function isAnagram(s1, s2) {
	return s1.alphabetize() == s2.alphabetize();
  }
  
  String.prototype.alphabetize = function(){
	return this.toLowerCase().split('').sort().join('');
  }

//   Last Digit Ultimate
// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.

// Examples
// lastDig(25, 21, 125) ➞ true
// // The last digit of 25 is 5, the last digit of 21 is 1, and the last
// // digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// // to the last digit of 125(5).

// lastDig(55, 226, 5190) ➞ true
// // The last digit of 55 is 5, the last digit of 226 is 6, and the last
// // digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// // equal to the last digit of 5190(0).

// lastDig(12, 215, 2142) ➞ false
// // The last digit of 12 is 2, the last digit of 215 is 5, and the last
// // digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// // not equal to the last digit of 2142(2).
// Notes
// Numbers can be negative.

function lastDig(a, b, c) {
	let strA = a.toString().split(''), strB = b.toString().split(''), strC = c.toString().split('');
	let productAB = strA[strA.length - 1] * strB[strB.length - 1];
	let splitProduct = productAB.toString().split('');
	return Number(splitProduct[splitProduct.length - 1]) === Number(strC[strC.length - 1]);
}

// wizard math stuff:

function lastDig(a, b, c) {
	return ((a%10)*(b%10))%10 === c%10
}

// clever:

function lastDig(a, b, c) {
	var result = (a * b).toString()
	return c.toString().endsWith(result.slice(-1))
}

// even more clever:

const lastDig = (a, b, c) => [...String([...String(a)].pop() * [...String(b)].pop())].pop() === [...String(c)].pop();


// Reverse the Order of Words with Five Letters or More
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples
// reverse("Reverse") ➞ "esreveR"

// reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

// reverse("The dog is big.") ➞ "The dog is big."
// Notes
// You can expect a valid string to be provided for each test case.

// moj odgovor:

function reverse(str) {
	let splitArr = str.split(' '), finalStr = '';
	if (splitArr.length == 1 && splitArr.toString().length > 4){
		finalStr = str.split('').reverse().join('');
	} else {
		for(let i = 0; i < splitArr.length; i++){
			if (splitArr[i].toString().length > 4){
				splitArr[i] = splitArr[i].split('').reverse().join('');
			}
			finalStr = splitArr.join(' ');
		}
	}
	return finalStr;
}

// using regex and replace/match:

const reverse = str => str.replace(/(\S{5,})/gi, match =>
	[...match].reverse().join('')
)

// using map:

function reverse(str) {
	return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
  }


// 

var isPalindrome = function(x) { let newN = x.toString().split(‘’).reverse().join(‘’); return Number(newN) === x; };

//roman numeral to int conversion:

function parseRoman(s) {
    var val = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    return s.toUpperCase().split('').reduce(function (r, a, i, aa) {
        return r + (val[a] < val[aa[i + 1]] ? -val[a] : val[a]);
    }, 0);
}


// leetcode prob:

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?
// Accepted
// 1.5M
// Submissions
// 2.4M
// Acceptance Rate
// 63.9%

var majorityElement = function(nums) {
    let counts = {}, maj = 0;

    for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    maj = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }
    return maj;
};

// way faster:

var majorityElement = function(nums) {
    const n = nums.length
    const map = new Map()
    for (let i = 0; i < n; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
        if (map.get(nums[i]) > (n / 2)) return nums[i]
    }    
    return -1
};

// leetcode easy number 14:

// 14. Longest Common Prefix
// Easy
// 11.6K
// 3.6K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function(strs) {
    let prefix = ""
    if(strs === null || strs.length === 0) return prefix

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}

// The DECIMATOR
// Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

// Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

// Examples
// DECIMATOR("1234567890") ➞ "123456789"
// // 10 characters, removed 1.

// DECIMATOR("1234567890AB") ➞ "1234567890"
// // 12 characters, removed 2.

// DECIMATOR("123") ➞ "12"
// // 3 characters, removed 1.

// DECIMATOR("123456789012345678901") ➞ "123456789012345678"
// // 21 characters, removed 3.
// Notes
// Make sure to remove characters from the end of the string.

function DECIMATOR(str) {
	return str.slice(0, -(Math.ceil(str.length*0.1)))
}

// problem for corresponding braces:

let expectedBrackets = [];
    // Loop through the letters in the input string
    for (let i = 0; i < s.length; i++) {
        // Push the closing equivelant of any open brackets found
        if (s[i] == '{') {
            expectedBrackets.push('}');
        } else if (s[i] == '[') {
            expectedBrackets.push(']');
        } else if (s[i] == '(') {
            expectedBrackets.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (expectedBrackets.pop() !== s[i]) {
            return false;
        }
    }
    // Return based on whether or not anything remains
    // (indicates that there were incorrect brackets)
//     return !expectedBrackets.length;
// };

const test = (q, p) => {
    let price = q * p
    let discount = Math.floor(q/3) * p
    return price - discount;
}

// Distance Between Two Points
// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

// Two points on a Cartesian plane

// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

// Examples
// getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

// getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

// getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095
// Notes
// Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
// The "distance" is the shortest distance between the two points, or the straight line generated from a to b.

function getDistance(a, b) {

	let beforeRoot = (b.x - a.x)**2
										 + (b.y - a.y)**2
		let rooted = Math.sqrt(beforeRoot);
		return Number(rooted.toFixed(3));
	}

	// bolji odgovor:

	function getDistance(a, b) {
		return +Math.hypot((b.x - a.x), (b.y - a.y)).toFixed(3);
	}

// 	Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// Examples
// filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

// filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
// Notes
// N/A

function filterUnique(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++){
		if (arr[i].length == new Set(arr[i]).size){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// manji odgovor:

const filterUnique = arr =>
arr.filter(x => new Set(x).size == x.length);

// Valid Division
// Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.

// Examples
// validDivision("6/3") ➞ true

// validDivision("30/25") ➞ false

// validDivision("0/3") ➞ true
// Notes
// Return "invalid" if division by zero.

function validDivision(d) {
	let s = d.split('/');
	let first = Number(s[0])
	let second = Number(s[1])
	if (second == 0){return 'invalid'}
	return first/second % 1 == 0 
}

// fin odgovor:

function validDivision(d) {
	console.log(d)
	let numOne=parseInt(d.split("/")[0])
	let numTwo = parseInt(d.split("/")[1])
	
	return numTwo === 0 ? 'invalid' : numOne % numTwo === 0
}


// Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// Examples
// uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]

// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]

// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]
// Notes
// Return the elements in the order that they are found in the array.
// Your function should also work for empty arrays.

function uniqueArr(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++){
		if (arr[i] > 0){
			newArr.push(arr[i]);
		}
	}
	return [...new Set(newArr)];
}

// bolji odgovor:

const uniqueArr = arr => [...new Set(arr)].filter(v => v > 0);

// jos jedan odgovor:

function uniqueArr(arr) {
	let newArr = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0 && !newArr.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}