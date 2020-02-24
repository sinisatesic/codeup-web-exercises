"use strict";

// 1. What is an array in Javascript?
//  (from W3:) An array is a special character which can hold more than one value/multiple values at a time.

//     2. What is an object in Javascript?
//  (from W3:) objects are containers for named values called properties or methods

//     3. What is the difference between an array and an object?
// Arrays are indexed and objects are not. Arrays have multiple values, but objects have properties which contain values (KEY and VALUE pairs).
// Additionally, objects are more often utilized for larger amounts of values/data. Object properties can be accessed, added, changed, and removed by using either dot or bracket notation.
// Furthermore, arrays are especially useful in ordered lists/forms.

//     4. What is a property? A method?
// (from MDN:)
// A JavaScript property is a characteristic of an object, often describing attributes associated with a data structure.
// There are two kinds of properties:
//Instance properties hold data that are specific to a given object instance.
// Static properties hold data that are shared among all object instances.
//A property has a name (a string) and a value (primitive, method, or object reference). Note that when we say that "a property holds an object", that is shorthand for "a property holds an object reference".
// This distinction matters because the original referenced object remains unchanged when you change the property's value.

//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?


//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

//Vivian's pseudo code below!!!

//1. write a function --> filterNumbers(inputArray)  (be aware of keyword "mixed" in assertion for mixed data)
//2. Since we are returning an array, we need a bucket --> var bucket = [];
// ANY time an array is being called in function, you'll MOST LIKELY/LIKE DEFINITELY have to iterate through that array
//3. We need to loop to check each individual item in our array --> either for loop || forEach
//4. We need to check each item to see if it's a number ---> typeof item === "number"
//5. if the item is a number, push it to the bucket/empty array --> bucket.push(item)
//6. we need to use .sort method on bucket/empty array ; this is to sort in ascending order
//7. return bucket/empty array

//////////////////////////////////
//my answer:
//////////////////////////////////
function filterNumbers(numbers) {
    arr = [];
    numbers.forEach(function (number) {
        if (typeof number === "number") {
            arr.push(number)
        }
    });
    return arr.sort(); //this would fail for double(or more) digit numbers for ascending!!!!!
}

filterNumbers(["fred", true, 5, 3]);
//////////////////////////////////
//Vivian's answer (forEach, first):
//////////////////////////////////
function filterNumbers(inputArray){
    var bucket = [];

    inputArray.forEach(function (item) {
        if (typeof item === "number") {
            bucket.push(item);
        }
    })
    return bucket.sort(function (a, b) {
        return a - b;
    });
}

console.log(filterNumbers(["fred", true, 5, 3]));
console.log(filterNumbers([100, 1000000, false, "red", true, 50, 500000, 3]));
//////////////////////////////////
//////////////////////////////////
//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//     ```
//
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//console.log(object.age + 1);

//Vivian's pseudo code below!!!
//1. write a function --> getOlder(dogs)
//2. Since we are taking in array --> we have to loop through each object (each dog, in Vivian's example) --> dog.age += 1;
//3. return dogs (parameter name, which is objects in my example)

//////////////////////////////////
//my answer:
//////////////////////////////////
function getOlder(objects) {
    objects.forEach(function (object) {
        object.age++;
    });
    return objects;
}

//////////////////////////////////
//Vivian's answer:
//////////////////////////////////
function getOlder(dogs) {
    dogs.forEach(function (dog) {
        dog.age += 1;
    });

    return dogs;
}

//     ```js
//     //Example Input:
//
//        [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 7
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 4
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 10
//          }
//      ];
//    ```
//     ```js
//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];
//    ```
//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

//Vivian's pseudo code below!!!
//1. Write a function called washCars(cars)
//2. for each loop through each car --> car.isDirty = false;
//3. return cars

//////////////////////////////////
//my answer:
//////////////////////////////////
function washCars(objects) {
    objects.forEach(function (object) {
        if (object.isDirty === true) {
            object.isDirty = false;
        }
    });
    return objects;
}

//////////////////////////////////
//Vivian's answer:
//////////////////////////////////
function washCars(cars){
    cars.forEach(function (car) {
        car.isDirty = false;
    });
    return cars;
}

console.log(washCars(carList));

//     ```js
//             // Example input
//        var carList =      [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
//             ]
//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//////////////////////////////////

// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

//Vivian's pseudo code below!!!
//PART 1 - COUNT (counting bucket/counter)
// 1. write a function called adminList(users)
// 2. var adminCount = 0;
//3. have to loop through array: forEach user --> user.isAdmin (check if they're admin) --> adminCount += 1 (if they're admin, need to add one to the counter)
//4. return adminCount

function adminList(users){
    var adminCount = 0;

    users.forEach(function (user) {
        if(user.isAdmin){
            adminCount += 1;
        }
    })

    return adminCount;
}

console.log(adminList(userList));   //userList is the input array below

// PART 2 - USER EMAILS
//Refactor to return an array of admin-only user emails.
//1. Write a function called adminstList(users)
//2. var bucket = [];
//3. forEach user --> if user.isAdmin --> bucket.push(user.email)
//4. return bucket

function adminList(users){
    var bucket = [];    //empty array

    users.forEach(function (user) {
        if (user.isAdmin){
            bucket.push(user.email);
        }
    })

    return bucket;
}

// PART 3: Refactor again to return an array of user objects that are admins.
//1. Write a function called adminList(users)
//2. var bucket = [];
//3. forEach user --> if user.isAdmin --> bucket.push(user)
//4. return bucket

function adminList(users){
    var bucket = [];    //empty array

    users.forEach(function (user) {
        if (user.isAdmin){
            bucket.push(user);
        }
    })

    return bucket;
}


// -----------Output # 1-----------
// function adminList(array){ // function called adminList that takes in an array
//
//     var count = 0; // count begins at 0
//
//     array.forEach(function (item, instance){ //loop through the array and store the item and index values
//
//         if ( item.isAdmin === true){ //if the user is an admin
//             count = instance + 1; //add 1 to the count
//         }
//     });
//
//     return count; // return the adjusted count
//
// }
//-----------Output # 2-----------
// function adminList(array){ // function called adminList that takes in an array
//
//     var adminEmail= []; // empty array for admin emails, bucket
//
//     array.forEach(function (item){ //loop through the array and store the item values
//
//         if ( item.isAdmin === true){ //if the user is an admin
//             adminEmail.push(item.email); //add admin emails to the bucket
//         }
//     });
//
//     return adminEmail; // return the adjusted emails additions
//
// }
//-----------Output # 3-----------



//     ```js
//          //Example Input:
//           [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              },
//              {
//                  isAdmin: false,
//                  email: 'user3@email.com'
//              }
//          ];
//     ```
//
//     ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//var arr = [
//     [1,2], [3,4], [5,6]
// ];
// for (var i = 0; i < arr.length; i++){
//     for (var j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// function makeSandwichObjects([breads], [fillings]) {
//     var breads = [
//         "white",
//         "wheat",
//         "rhy",
//         "white"
//     ];
//     var fillings = [
//         "pb&j",
//         "ham",
//         "cheese steak",
//         "tuna"
//     ];
//     var object = {};
//     for (var i = 0; i < breads.length; i++) {
//         object[breads[i]] = fillings[i];
//     }
//     console.log(object);
// }
//
// //
//
// function makeSandwichObjects([breads], [fillings]) {
//     var breads = [];
//     var fillings = [];
//     var result = fillings.reduce(function (result, field, index) {
//         result[breads[index]] = field;
//         return result;
//     }, {});
//     console.log(result);
// }

//
//////////////////////////////////
//my answer:
//////////////////////////////////
function makeSandwichObjects(breads, fillings) {
    var sandwiches = [];
    for(var i = 0; i < breads.length; i++) {
        sandwiches.push({bread: breads[i], filling: fillings[i]});
    }
    return sandwiches;
}
///////////////////////////////////
//Vivian's pseudo code below for number 5!!! //she used for loop since she thought it's more straightforward

//1. Write a function --> makeSandwichObjects(breads, fillings)
//2. since we're looping through arrays, need an empty bucket: var bucket = [];
//3. we have to loop ---> for(var i = 0; i < breads.length; i++)
//4. inside of our loop now; need to create our sandwich object
//5. we then need to return sandwich objects into bucket; bucket.push(sandwichObject)
//6. return bucket

function makeSandwichObjects(breads, fillings) {
    var bucket = [];

    for(var i = 0; i < breads.length; i++){
        var sandwichObject = {
            bread: breads[i],
            filling: fillings[i]
        }

        bucket.push(sandwichObject);    //this is inside loop because we want it to happen at each iteration
    }

    return bucket; //another way is Danielle's answer for push step!
}

//////////////////////////////////
//Vivian's answer:
//////////////////////////////////

//     ```js
//     Example Input:

// var breads = [
//     "white",
//     "wheat",
//     "rhy",
//     "white"
// ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
//          makeSandwichObjects(breads, fillings) // example call to the function
//     ```
//     ```js
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
//
//     ```

//// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
// 	console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
//1. create a function called keepYellow(colors)
//2. create empty bucket since you're iterating through array
//3. loop through using forEach loop --> check to see if color === "yellow"
//4. pushed results to bucket
//5. return bucket


function keepYellow(colors){
    var bucket = [];

    colors.forEach(function (color) {
        if (color === "yellow"){
            bucket.push(color);
        }
    })
    return bucket;
}

//for this last one above^, below is using for loop for it:

function keepYellow(colors){
    var bucket = [];

    for (var i = 0; i < colors.length; i++) {
        if (color[i] === "yellow"){
            bucket.push(color[i]);
        }
    }
    return bucket;
}