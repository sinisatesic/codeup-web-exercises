function showMultiplicationTable(a) {
    for (var i = 1; i <= 10; i++) {
        var result = a * i;
        console.log(a + ' * ' + i + ' = ' + result);
    }
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
        console.log(i + ' is false');
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


// for (var i = 1; i < 10; i++){
//     for(var x = i ; x < i; x++)
//     console.log(x);
// }

//

// for (var i = 0; i < 10; i++){
//     for (var x = i; x < 10; x++){
//
//     }
//     console.log(i);
// }

//
// for (var i = 0; i < 10; i++){
//     for (var x = 0; x <= 9; x++){
//         for (var z = 0; z < x; z++){
//             console.log(i);
//         }
//     }
//     console.log(x)
// }

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

