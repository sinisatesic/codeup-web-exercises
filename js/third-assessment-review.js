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
//

function filterNumbers(numbers) {
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number)
        }
    });
    return arr.sort();
}

filterNumbers(["fred", true, 5, 3]);

function filterNumbers(numbers) {
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number)
        }
    });
    return arr.sort();
}

function filterNumbers(numbers){
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number);
        }
    });
    return arr.sort();
}

function filterNumbers(numbers){
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number);
        }
    });
    return arr.sort();
}

function filterNumbers(numbers){
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number);
        }
    });
    return arr.sort();
}

function filterNumbers(numbers){
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number);
        }
    });
    return arr.sort();
}

function filterNumbers(numbers){
    arr = [];
    numbers.forEach(function(number){
        if (typeof number === "number"){
            arr.push(number);
        }
    });
    return arr.sort();
}

//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//     ```
//
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
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
//
//     ```js
//             // Example input
//             [
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
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
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
//     ```js
//         //     Example Input:
//
//          var breads  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillings = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
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