(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: 'Sini',
        lastName: 'Tesic'
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        console.log("Hello from " + person.firstName + ' ' + person.lastName); // you can also use "this" keyword here, for ex "this.firstName"
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
            {
                name: 'Cameron',
                amount: 180
            },
            {
                name: 'Ryan',
                amount: 250
            },
            {
                name: 'George',
                amount: 320
            }
        ];
    //here ends array of objects; per advice, I separated each of them for readability and clarity on user end.
    shoppers.forEach(function(shopper){
        if (shopper.amount > 200){ //take notice on syntax on calling content from shoppers array; notice because of forEach, you have to log it as shopper.amount
            var discount = shopper.amount - shopper.amount * .20;
            console.log("Shopper " + shopper.name + " has earned a 12% discount; total equals = " + discount);
        } else {
            console.log("Shopper " + shopper.name + " total equals = " + shopper.amount); //you can also add toFixed here after shopper.amount, for greater accuracy
        }
    });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Cosmic Serpent",
            author: {
                firstName: "Jeremy",
                lastName: "Narby"
            }
        },

        {
            title: "The 12th Planet",
            author: {
                firstName: "Zecharia",
                lastName: "Sitchin"
            }
        },

        {
            title: "A Search in Secret Egypt",
            author: {
                firstName: "Paul",
                lastName: "Brunton"
            }
        },
        {
            title: "Beyond A.I.",
            author: {
                firstName: "J. Storrs",
                lastName: "Hall"
            }
        },
        {
            title: "Republic",
            author: {
                firstName: "Aristokles",
                lastName: "Plato"
            }
        },
    ];

    //practice for each loop for this content, below:

   //git pull this page so you get this extra forEach loop that was here for the books objects-array!

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

  for (var i = 0; i < books.length; i++){
      console.log("Book # " + (i + 1) + "\nTitle: " + books[i].title + "\nAuthor: " + books[i].author.firstName + " " + books[i].author.lastName);
  }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
