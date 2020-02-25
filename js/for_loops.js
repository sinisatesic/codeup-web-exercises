

//OY, practice typing these and inputting them into console; muscle memory and console comfort in that way


function showMultiplicationTable(a) {       //CORRECT!!!
    for (var i = 1; i <= 10; i++) {
        var result = a * i;
        console.log(a + ' * ' + i + ' = ' + result);
    }
}

function showMultiplication(a){
    for (var i = 1; i <= 10; i++){
        var result = a * i;
        console.log(a + ' * ' + i + ' = ' + result);
    }
}

function multiplication(a){
    for (var i = 1; i <= 10; i++){
        var result = a * i;
        console.log(a + ' * ' + i + ' = ' + result);
    }
}

function multiplication(a){
    for (var i = 1; i <= 10; i++){
        var result = a * i;
        console.log(a + " * " + i + " = " + result);
    }
}

function mulitiplicationTable(a){
    for (var i = 1; i <= 10; i++){
        var result = a * i;
        console.log(a + ' * ' + i + ' = ' + result);
    }
}

function mulitiplicationTable(a){
    for(var i = 1; i <= 10; i++){
        console.log(a + ' * ' + i + ' = ' + result);
    }
}

function mulitiply(a){
    for (var i = 1; i <= 10; i++){
        var result = a * i;
        console.log(a + ' * ' + i + ' = ' + result);
    }
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
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

for (var i = 0; i <= 100; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

for (var i = 0; i <= 100; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
//
//
//
//pseudo code for below. Pseudo code can help you know what to search for regarding the problem at hand:

//1. for loop --> var i = 0; i < 10; i++;
//2. Inside for loop, generate random number between 20 & 200 --> Math.floor
//3. We need to check the randomNumber
//      if it's even --> console.log(random number is even) --> randomNumber % 2 == 0
//      if it's odd --> console.log(random number is odd)

for (var i = 0; i < 10; i++) {
    var newNum = Math.floor(Math.random() * 180) + 20;
    if (newNum % 2 == 0) {
        console.log(newNum + " is even");
    } else {
        console.log(newNum + " is odd");
    }
}




for (var i = 1; i < 51; i++){
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

// first approach using repeat method:

for(var i = 1; i < 10; i++){
    console.log(i.toString().repeat(i));
}

// second approach using nested loop:
for(var outerLoop = 1; outerLoop < 10; outerLoop++){
    var output = ""; //this is bucket placeholder for return values

    for(var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){
        output = output + outerLoop;
    }

    console.log(output);
}

//

for (var i = 100; i >= 5; i-=5) {
    console.log(i);
}
//

// another way using condition:
for(var i = 100; i >=5; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}
//

