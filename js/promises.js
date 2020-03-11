"use strict";



// function wait(number) {         //takes in parameter called number
//     return new Promise((resolve) => {       //within said function, returns new Promise, with a function as parameter i.e. resolve
//         setTimeout(() => {  //within promise, we invoke setTimeout function/method which calls back to the promise
//              resolve();         //resolve function of Promise
//         }, number);             //the number is the 'starting point'
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// //Justin's solution for this below:
//
// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res, num);
//     });
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//Generate a Personal Access Token for the GitHub API.
//

// Link: <https://api.github.com/resource?page=2>; rel="next",
//     <https://api.github.com/resource?page=5>; rel="last"

// We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:

//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})


// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

function getGithubUsernames() {
    return fetch('https://api.github.com/users/sinisatesic/events/public', {headers: {'Authorization': 'token '+ githubToken}})
        .then(response => response.json());
}
getGithubUsernames().then((data) => {
    console.log(data[0].payload.commits[0].message);
}).catch(error => console.error(error));

getGithubUsernames().then




