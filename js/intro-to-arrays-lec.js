"use strict";

console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

var pies = [];

console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];

var pies = ["apples", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];


var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]

var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant", "casey"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoriteFoods = ['sarma', 'pizza', 'lasagna'];
console.log(favoriteFoods);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

console.log(shapes.length);

// TODO: console.log the length of the instructors array

console.log(instructors.length);

// TODO: console.log the length of the daysOfTheWeek array

console.log(daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array

console.log(favoriteFoods.length);



/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// square
console.log(shapes[1]);
// rectangle
console.log(shapes[2]);
// circle
console.log(shapes[3]);
// triangle
console.log(shapes[4]);
// undefined


// TODO: console.log each element of the instructors array

console.log(instructors[0]);
console.log(instructors[1]);
console.log(instructors[2]);
console.log(instructors[3]);
console.log(instructors[4]);
console.log(instructors[5]);
console.log(instructors[6]);
console.log(instructors[7]);


// TODO: console.log the first three elements of the daysOfTheWeek array

console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[2]);

// TODO: console.log the first three elements of the favoriteFoods array

console.log(favoriteFoods[0]);
console.log(favoriteFoods[1]);
console.log(favoriteFoods[2]);

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

function returnLastElement(inputArray){
    return inputArray[inputArray.length - 1];
}

console.log(returnLastElement(favoriteFoods));
console.log(returnLastElement(daysOfTheWeek));
console.log(returnLastElement(instructors));

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
// for(initial variable; condition; increment){
//     //body statement here
// }
//
// for (var i = 0; i < 10; i++) {
//     console.log(array[i]);
// }


//  TODO TOGETHER: Log each element of the shapes array

for (var i = 0; i < shapes.length; i++){
    console.log(shapes[i]);
}

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape

for (var i = 0; i < shapes.length; i++){
    console.log("the shape at index " + i + " is "+ shapes[i]);
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

for (var i = 0; i < shapes.length; i++){
    if(shapes[i] === "circle"){
        alert(shapes[i] + " is my fav shape");
    }
}


// TODO: What happens if we change var i = 1? or var i = 2;
//

for (var i = 1; i < shapes.length; i++){
    if(shapes[i] === "circle"){
        alert(shapes[i] + " is my fav shape");
    }
}

for (var i = 2; i < shapes.length; i++){
    if(shapes[i] === "circle"){
        alert(shapes[i] + " is my fav shape");
    }
}

// TODO: What are benefits of using loops to iterate?
// clean, direct execution of each array, and fully through
// TODO: How does the loop know when to stop iterating?
// once condition(s) are met
// TODO: Using a for loop, iterate through the instructors array and console.log each instructor

for (var i = 0; i < instructors.length; i++){
    console.log(instructors[i]);
}
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week'

for (var i = 0; i < daysOfTheWeek.length; i++){
    console.log(daysOfTheWeek[i]);
}

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

for (var i = 0; i < favoriteFoods; i++){
    console.log(favoriteFoods[i]);
}

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"

for (var i = 0; i < instructors.length; i++){
    if(instructors[i] === "vivian" || instructors[i] === "casey" || instructors[i] === "david"){
        alert("hey, i know " + instructors[i]);
        console.log("match");
    } else {
        alert("I haven't had class with " + instructors[i] + ", yet");
        console.log("noMatch");
    }

}

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

shapes.forEach(function(shape){
    console.log(shape);
});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];


pies.forEach(function(pie){
    console.log(pie);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

instructors.forEach(function(instructor){
    console.log(instructor);
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

daysOfTheWeek.forEach(function(day){
    console.log(day);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

favoriteFoods.forEach(function(food){
    console.log(food);
});