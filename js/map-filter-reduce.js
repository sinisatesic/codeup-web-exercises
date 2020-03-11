//Exercises
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it. //done
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. //done
// Use .map to create an array of strings where each element is a user's email address //done
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average. //done
// Use .reduce to get the longest email from the list of users. //done
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let userObjects = users.filter(user => user.languages.length >= 3);

// Use .map to create an array of strings where each element is a user's email address
//below is e5

// let emails = users.map( function (user){
//     return user.email;
// });

//below is e6
let emails = users.map(user => user.email);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

//e6
let years = users.reduce((total, user) => total + user.yearsOfExperience, 0);
let average = (years/users.length);


// Use .reduce to get the longest email from the list of users.
let longest = users.reduce((total, user) => {
    if (user.email.length > total.length){
        total = user.email;
    }
    return total;
}, '');

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let listNames = users.reduce((allNames, instructor) => {
    return `${allNames} ${instructor.name}`
}, "instructors: ");