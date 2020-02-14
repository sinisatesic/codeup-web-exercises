(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['nameOne','nameTwo','nameThree','nameFour'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    //or:

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

        console.log('name at index '+ i +' is name '+ names[i]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++){
        console.log('name at index '+ i +' is name '+ names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(index){
        console.log('name at index '+ i +' is name '+ names[i]);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var numbers = ['numOne','numTwo','numThree','numFour'];

    function first(numbers){
        return (numbers[0]);
    }
    console.log(numbers);

    function second(numbers){
        return (numbers[1]);
    }
    console.log(numbers);

    function last(numbers){
        return (numbers[numbers.length - 1]);
    }
    console.log(numbers);


    //
    //below is content for bonus material from David:

    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    function allIndexesOf(array, value){
        for(i = 0; i < fruits.length; i++){
            if(value === array[i]){
                console.log([i]);
            } else {
                console.log([]);
            }
        }
    }

    allIndexesOf(fruits, "apple");






})();

