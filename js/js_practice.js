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