//A promise is an object and it takes in one parameter which is a function.
//This function will take in two parameters: resolve and reject.
//Then we need to actually create the definition of that function inside.
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if( a == 2) {
        resolve('Success')   //We can pass anything we want into our happy path.
    } else {
        reject('Failed')    //We can pass anything we want into our reject/sad path.
    }
});

//Anything inside of a .then is going to run for a resolve.
//We are passing single parameter into .then since our resolve takes in a single parameter.

p.then((message) => {                                 //arrow function here invokes function telling what we want to do upon .then method.
    console.log('This is in the then: ' + message);   //happy path ; successful.
}).catch((message) => {                               //our .catch will catch any errors from our reject parameter (if promise not true). Just like resolve, it's a single parameter here.
    console.log('This is in the catch: ' + message);  //sad path ; unsuccessful.
})


//.then will be called (like callback) if promise resolves successfully, and .catch will be called if unsuccessful.
//Promises are intended to replace callbacks.


//Below is video's example of changing from callbacks to promises. First commented out section will be callsbacks approach, then second section of blocks are same functionality but with promises:
//First with callbacks:

// const userLeft = false;
// const userWatchingCatMeme = true;
//
// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }
//
// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// });



//steps for converting from callbacks to promises:

//1. Copy entire function of watchTutorialCallBack -- lines 33 - 47 -- and paste it below all of the code for the callbacks to have it available to work with for next steps.
//2. change function name to watchTutorialPromise for accuracy and clarity, and completely remove callback parameters -- callback, errorCallback -- (this is purpose of promises: to no longer have these callbacks).
//3. Then, inside of function watchTutorialPromise, return a promise and ensure to include its parameters.
//4. And now inside of that new promise function, we want to define all of our code that was calling the callbacks.
//5. So, since resolve is successful "callback", we can replace everywhere we have callback with resolve.
//6. In same fashion, if it's unsuccessful, our "callback" will be our reject parameter, so replace errorCallback with reject.

//Now you've refactored function to use promises instead of callbacks. This overall only required changing a few variables and returning a promise instead of callbacks.
//How do we now use this function? -->

//7. First, change function name of watchTutorialCallback to watchTutorialPromise.
//8. We recognize this is a function that takes no parameters, so we need to call this function -- () -- and then do something with it afterwards since the return is a promise.
//9. So, we need to add .then method to this function -- our success "callback" -- and after ending this with closing parenthesis -- ) --, we can add our .catch method.
//10. Therefore, we add the .catch after aforementioned closing parenthesis for our reject parameter (sad path).

//Final result after conversion to promises:

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
});

//so instead of nesting thens, you just add more thens. For example, on last bit of above code for watchTutorialPromise(), uncomment and see below:

// watchTutorialPromise().then((message) => {
//     console.log('Success: ' + message)
// }).then((message) => {
//     console.log('second then')
// }).then((message) => {
//     console.log('third then')
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
// });

//avoids "callback hell"



// Below are examples of how to further use promises with Promise.all and Promise.race.
//Below are 3 promises that always resolve, and send a single message when they resolve.
//For sake of example, pretend you want all 3 of these videos to do something at the same time once recorded (not waiting for one before starting the next).
//So, in relation to such a situation, Promise.all can be used:

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([                      //an array of all promises we want to run
    recordVideoOne,                       //Promise.all will run all of these promises at same time, and when done, it will call the .then and .catch methods depending on whether resolved or rejected.
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {        //The .then here will send an array of all successful (resolved) messages.
    console.log(messages)
});


// Uncomment below starting at line 148 for Promise.race example:
// For sake of same example, imagine you want something to happen as soon as just one of these videos is done recording. For this, you can use Promise.race:

// Promise.race([                 //The .race method is same as .all method except it will return as soon as first one is completed instead of waiting for everything to complete.
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then(message => {           //Since it returns as soon as one is complete, it will return a single message -- note message here instead of messages.
//     console.log(message)       //It will log one return value.
// });


//url for video Justin shared:  https://www.youtube.com/watch?v=DHvZLI7Db8E