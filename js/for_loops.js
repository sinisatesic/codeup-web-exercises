function showMultiplicationTable(){

    for (var x = 1; x <= 10; x++) {
        for (var i = x; i <= 10; i++){
            var result = x * 1;
            console.log(x + ' * ' + i + ' = ' + result);
        }
    }
}

console.log(showMultiplicationTable(5));



//
//
//

for (var i = 0;i < 10; i++){
    var newNum =  Math.floor(Math.random() * 200) + 20;
    if(newNum % 2 == 0){
        console.log(newNum + " is even");
    } else {
        console.log(newNum + " is odd");
    }

}

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

for (var i = 100; i >= 5; i=-5){
    console.log(i);
}
//
//

