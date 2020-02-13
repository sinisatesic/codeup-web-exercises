"use strict";

(function () {
    // So far we have talked about arrays as if they are static, and unchanging. This isn't the case. Today we'll be talking about how we can change our arrays without just reassigning the values.

    /**
     * Audience: "But David, why would I need to know about that?"
     */

    // In the future, we maybe interacting with our data in a way where we won't be able to see it directly, so it's important to keep these methods and functions in mind when we start to create bigger and bigger applications.

    /**
     * Audience: "So David, how can I add an element to an array?"
     */

    // Consider the following array:

    var cheeses = ["Brie", "Muenster", "Kraft American Singles", "Pepper Jack", "String", "Bleu de Gex"];

    // Quite the collection, if a bit incomplete. Where's cheddar?! Let's add cheddar to the end of our array.
	// TODO Together: Add Cheddar to the end of the 'cheeses' array


	// TODO Together: Write a function to log each of the cheeses, using forEach
    

    // POP QUIZ: What the return of the function above?!

    // By using the push method I can add to the end of my array.

    // Well that's good and all, but let's also add Gouda to the front of the array.

    // The unshift method will allow me to add to the front of my array.

    /**
     * Audience: "But David, surely we are able to add more than one element at a time."
     */

    // Yes, you're right. I can pass more than one argument through these two methods.

	// TODO: Pass more than one argument to these two methods


    /**
     * Audience: "But David, just as you have showed us that we can create, can we not also
     * destroy? How can we remove an element from an array without reassigning the value."
     */

    // We have access to two methods that will allow us to remove elements as well.

    // You know, I haven't even tried Red Windsor. Let's remove it.

	// TODO: Remove the Red Windsor from the array

    // Unlike unshift, shift will remove the first element of an array.

    // I never really like Havarti, let's axe that too.
	// TODO: Remove the Havarti from the array


    // Pop will lop off the last element of an array.

    // Here's a trick, let's shift Ragstone from the array, again.
	
	// TODO: Remove the last element from the array, and store its value in a variable




    // It's important to note that the return from the pop and shift methods is the item being removed from the array.

    // Let's add Ragstone back to the end of the array.
	
	// TODO: add the removed variable back to the end of the array


    /**
     * Audience: "Golly David, there must be a way for me to locate an index of an element in an
     * array."
     */

    // Remember how with strings we were able to find the index of a pattern of characters?

	//TODO: find the index of the letter 'o' on the recently removed cheese


    // We can also use indexOf on arrays!

	// TODO: Find the index of the first occurrence of 'Kraft American Singles'


    // Now I can locate the index of an element even if I'm not looking at it!

    // We also have access to the lastIndexOf method.

    var myFavNumbers = [17,34,22,17,19,17];

	// TODO: Find the first and last index of the number 17 in the above array


    // We can now see where the last occurrence of a piece of data occurs.

    /**
     * Audience: "Hey David, what might that method be useful for?"
     */

    // We can use this method in conjunction with the slice method.

        // The slice method will work alot like the substring method, in that it can return a value from either one or two arguments

	// TODO: create a variable myFavCheeses, and assign it the slice of the cheeses array between Muenster and Kraft American Singles


    // By passing one argument, we start at the specified index and return an array to the end.
	
	// TODO: create a slice from array index 7 to the end of the array


    // Notice that using the slice method didn't remove the cheeses I liked from the cheeses array. By assigning the return from the slice method to a variable I was able to call on its value.

    function copyOfArray(array) {
        return array.slice();
    }
	
	// TODO: reverse the coy of the cheese array
   
	// TODO: using a forEach loop, log each of the cheeses in the reversed array
    

    /**
     * Audience: "Hey David, that cheese array is a bit of a mess. Is there a way we can feng
     * shui that mess a bit prettier?"
     */

	// TODO: sort the cheeses.

	// TODO: sort myFavNumbers, then reverse the array

	// TODO: create an array on the fly, and then sort it


    /**
     * "Hey David, now that I understand how arrays work a lot better, can we talk about that palindrome
     * problem again?"
     */

	// TODO: create a var csvNames. Assign it 'David,Vivian,Casey,Cody the Duck'. Split this string into an array called names. then reverse that array, and call a 'join' on it, saving the result in csvNames again. Console Log everything, to watch your progress.
 

})();