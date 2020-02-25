
do{

    var userNumber = parseFloat(prompt("Please pick odd number from 1 to 50"));

    if(userNumber < 1 && userNumber > 50){
        alert('user number not between 1 and 50; please pick diff number');
    } else if(userNumber % 2 === 0){
        alert('user number not odd; please pick diff number');
    } else if (isNaN(userNumber)){
        alert('this is not a number; please pick number');
    } else {
        alert('Yes, you picked an odd number between 1 and 50');
        break;
    }

} while(true);
//
//


//
//
//
//
//
// HEY - here, ask if you can use else if structure for below instead of an if and then if else
for (var i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue; //skip
    }


    if(i === userNumber){
        console.log("Yikes, skipping num: "+ userNumber);
    } else{
        console.log("Here is an odd number: " + i);
    }
}

for (var i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

//




// another approach for the for-loop portion(2nd portion):
for(var i = 1; i <= 50; i+=2){
    if(i === userNumber){
        console.log("Yikes! skipping number: " + userNumber);
        continue;
    }

    console.log("here's an odd number " + i);
}

// var userPrompt = prompt("Pick an odd number from 1 and 50");
// for (var i = userPrompt; userPrompt < 50 && userPrompt > 0; userPrompt++){
//     if(userPrompt % 3 === 0){
//         continue;
//     }
//     console.log("skipping number");

// var userPrompt = prompt("Pick an odd number from 1 and 50");
//
// for (var i = userPrompt; i < 51; i++){
//     if(userPrompt % 2 !== 0){
//         console.log("skipping number");
//     } else {
//         console.log('not add number, please enter odd');
//     }
// }