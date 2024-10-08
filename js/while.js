// Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536


var i = 2;
while(i <= 65536){
    console.log(i);
    i*=2;
}

var i = 2;
while(i <= 65536){
    console.log(i);
    i*=2;
}

var i = 2;
while(i <= 65536){
    console.log(i);
    i*=2;
}

var i = 2 ;
while(i <= 65536){
    console.log(i);
    i*=2;
}

var i = 2;
while(i <= 65536){
    console.log(i);
    i*=2;
}

var i = 2;
while(i <= 65536){
    console.log(i);
    i*=2;
}


// An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones
//ref :
// var i = 10;
// do{
//     console.log(i);
//     i++;
// } while(i < 10);


// pseudo code for this prob:
//
// 1. Generate the total amount of cones to sell for the days --> allCones
// 2. Now we are in the oop - need to generate / check how many cones the customer wants to buy --> conesPurchased
    //if conesPurchased > allCones --> not enough cones to sell(sad path - dev term; try in future checking for sad path first)
    //if I do have enough cones --> I can sell them! allCones = allcones - conesPurchased --> (happy path)
    //repeat this process while allCones > 0
    //completes the oop --> after the loop I can go home --> console.log("sold all cones");

//below will generate random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do{
    //below will generate a random number between 1 and 5
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if(conesPurchased > allCones){
        var sadPathMessage = "Cannot sell you "+conesPurchased+" , I only have " +allCones+" left";
        console.log(sadPathMessage);
    } else {
        allCones = allCones - conesPurchased; //same as allCones -= conesPurchased
        var happyPathMessage = conesPurchased + " cones sold..." + allCones +" cones to sell";
        console.log(happyPathMessage)
    }
}while(allCones > 0);

console.log("sold the cones");
//
var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if (conesPurchased > allCones){
        var sadPath = "can't sell "+conesPurchased+" , i only have "+allCones+ " left";
        console.log(sadPath);
    } else {
        allCones = allCones - conesPurchased;
        var happyPath = conesPurchased + "cones sold .." + allCones + " left to sell";
        console.log(happyPath);
    }
}while(allCones > 0);

console.log("sold all cones");
