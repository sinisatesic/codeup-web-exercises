// "use strict";
//
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
// // another method:
//
// var userPrompt = prompt("Fav color?");
//
// var alertMessage = "Noice "+userPrompt+ " is my fav too";
//
// alert(alertMessage);
//
//
// //
// //
// //
// //
// // var userAnswerOne = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
// //
// // if (userAnswerOne == 27) {
// //     alert ("Yes, "+userAnswerOne+" is the answer!");
// // } else {
// //    alert ("No, the answer is 27!");
// // }
//
// //
// //
// var userAnswerOneVideos = prompt("You're renting three movies, and they cost $3 per day, each. Movies are Blade, Blade II, and Blade III. How many days will you rent Blade?");
// var userAnswerTwoVideos = prompt("How many days will you rent Blade II?");
// var userAnswerThreeVideos = prompt("How many days will you rent Blade III?");
//
// var total = alert("Total is "+(parseInt(userAnswerOneVideos) + parseInt(userAnswerTwoVideos) + parseInt(userAnswerThreeVideos)) * 3 + " dollaz");
// //
// //
// //
// var contractorGoogle = prompt("You're a contractor at Google, Amazon, and FB. They pay $400, $380, and $350 per hour, respectively. How many hours did you work for Google?");
// var contractorAmazon = prompt("How many hours did you work at Amazon?");
// var contractorFB = prompt("How many hours did you work at FB?");
//
// var total = alert("Total is "+(parseInt(contractorGoogle * 400) + parseInt(contractorAmazon * 380) + parseInt(contractorFB * 350)+" dollaz"));
//
//
// // ANOTHER METHOD:
//
// var googleRate = Number(prompt("What is ya google rate?"));
// var amazonRate = Number(prompt("What is ya amazon rate?"));
// var facebookRate = Number(prompt("What is ya fb rate?"));
//
// var googleHours = Number(prompt("How many hours ya work at google?"));
// var amazonHours = Number(prompt("How many hours ya work at amaon?"));
// var facebookHours = Number(prompt("How many hours ya work at fb?"));
//
// var totalPay = (googleRate * googleHours) + (amazonRate + amazonHours) + (facebookRate + facebookHours);
//
// var alertMessage = "Ya pay is "+ totalPay;
// alert(alertMessage);

//
//


//3.3 Class Registration

var classIsNotFull = confirm("Class is not full");
var noScheduleConflicts = confirm("Schedules do not conflict");

var studentEnrolledStatus = classIsNotFull && noScheduleConflicts;

alert("Student can enroll: " + studentEnrolledStatus);


//3.4 Product Example
//note: variables starting with "is" is usually affiliated with boolean values

var numberOfItems = Number(prompt("How many items you buyin?"));
var offerIsValid = confirm("Is the offer still valid?");
var isPremiumMember = confirm("Are you a premium member?");

var discountAppliedStatus = offerIsValid && (isPremiumMember || numberOfItems < 2);
alert("Can use discount: " + discountAppliedStatus);



// var isSevenNumber = !isNaN(7);
// console.log("Is seven numa: "+isSevenNumber);


//Immediately Invoked Function Expression example. A best practice would be to utilize one IFEE as a 'container' for all of your JS; this will secure info from being global.  :

(function() {
    function somethingSuperImportant() {
        return "Example info that's sensitive"
    }

    console.log(somethingSuperImportant());

})();

// just IFEE syntax:
//
//     (function() {
//
//     })();