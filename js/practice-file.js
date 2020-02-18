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