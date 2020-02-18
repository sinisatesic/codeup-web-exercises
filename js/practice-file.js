function fruit(name,color,shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}

let melon = new fruit('melon','green','round');
console.log(melon.describe());

let banana = new fruit('banana','yellow','banana-shape');
console.log(banana.describe());

////////////////////
////////////////////

for (var i = 1; i <= 100; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

////////////////////
////////////////////
function multiply(a){ //work on this one
    for (var a = 1; a <= 10; a++){
        for (var b = 1; b < a; b++){
            var result = a * b;
            console.log(a + ' * ' + b + ' = ' + result);
        }
    }
}

multiply(7);


////////////////////
////////////////////

let c = 1;
while(c < 10){
    console.log(c);
    c++;
}

////////////////////
////////////////////

//from edabit: write a function that returns true if the last character of a word is "n"; otherwise return false:

function isLastCharacterN(word) {
    return word.charAt(word.length - 1) === "n";
}

function isLastCharacterN(word) {
    return word.chartAt(word.length - 1) === "n";
}

function isLastCharacter(word) {
    return word.charAt(word.length - 1) === "n";
}

function isLastCharacter(word) {
    return word.charAt(word.length - 1) === "n";
}

function isLastCharacter(word) {
    return word.charAt(word.length - 1) === "n";
}

function isLastCharacterN(word) {
    return word.charAt(word.length - 1) === "n";
}

function isLastCharacterN(word) {
    return word.charAt(word.length - 1) === "n";
}

function isLastCharacterN(word){
    return word.charAt(word.length -1) === "n";
}

for (var i = 1; i <= 100; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

function fruit(name,color,shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}
let melon = new fruit('melon','green','round');
console.log(melon.describe());

for (var i = 1; i <= 100; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0);
    else if (i % 5 === 0);
    else console.log(i);
}

////////////////////
////////////////////

//Returns a random integer between min and max:

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// } //need to be able to comprehend the syntax structure in full!!
//more notes from lesson 2.17.20 on this topic, below:

var max = 10;
var min = 1;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}  //Math.floor will always round down. Here, you will never get 10 because of rounding down of Math.floor (always rounds down)
//Also, if you change Math.floor to Math.ceil, here, you will never reach 1 because of rounding up of Math.ceil (always rounds up);

//Math.round = Rounds according to the rules we learned in grammar school, i.e. scale of deciam of .1 to .9.

//Math.ceil = rounds up (3.14 would equal 4. Also, if you make enough decimal points, it will escape the rounding-up)
/////////////////

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//round an value to nearest integer:

Math.round(20.22);

//Math.floor() this function returns the largest integer less than or equal to a number:

Math.floor(35.22); //will result in 35
Math.floor(-25.77); // will result in 26 - this is because it's negative integer

//Math.ceil() function returns the smallest integer greater than or equal to a number:

Math.ceil(.88); // will result in 1
Math.ceil(5); // will result in 5
Math.ceil(7.027); //wil result in 8

//Math.pow(): this function returns the base to the exponent power, that is, base^exponent:

Math.pow(2, 16); //this is 2 raised to power of 16; will produce 65536. Neat stuff

//Math.sqrt() this function returns the square root of a number:

Math.sqrt(25);
Math.sqrt(2);
Math.sqrt(1);
Math.sqrt(0);
Math.sqrt(-5);

//Constants - here are some commonly used constants of the Method Object:

// Math.E   -- this property represents the base of natural logarithms, e, approximately 2.718

// Math.PI  -- this property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159

//these math functions will take in input(s) and convert to number value; if it can't, it will return NaN
//more practice content, below:

console.log(Math.pow(4, 2));

console.log(Math.sqrt(Math.pow(4, 3))); // this will return 8, as 4 cubed is 64, then square root of 64 is 8

