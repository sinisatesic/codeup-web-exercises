"use strict";

//
// console.log("Hello from external JavaScript");
//
//
//
// alert("Welcome to my Website!");
//
//
//
// var userPrompt = prompt("What's ya fav color?");
//
// alert("Great! "+userPrompt+" is my favorite, too!");
//
//
//
//
// var userAnswerOne = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
//
// if (userAnswerOne == 27) {
//     alert ("Yes, "+userAnswerOne+" is the answer!");
// } else {
//    alert ("No, the answer is 27!");
// }



var userAnswerOneVideos = prompt("You're renting three movies, and they cost $3 per day, each. Movies are Blade, Blade II, and Blade III. How many days will you rent Blade?");
var userAnswerTwoVideos = prompt("How many days will you rent Blade II?");
var userAnswerThreeVideos = prompt("How many days will you rent Blade III?");

var total = alert("Total is "+(parseInt(userAnswerOneVideos) + parseInt(userAnswerTwoVideos) + parseInt(userAnswerThreeVideos)) * 3 + " dollaz");