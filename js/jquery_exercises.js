// "use strict";
//
// // $(document).ready(function() {
// //     alert("DOM finished loading");
// // });
//
// var ulAlert = $('#html-ul').html();
// alert(ulAlert); //Use jQuery to select an element by the id. Alert the contents of the element.
// ulAlert = $('#html-div').html(); //Update the jQuery code to select and alert a different id.
// alert(ulAlert);
//
// //Use the same id on 2 elements. How does this change the jQuery selection?
// //answer: it responds with undefined
//
//
// $('.codeup').css('border', '1px solid red'); //Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.



// $('li').css('font-size', '40px'); //Using jQuery, set the font-size of all li elements to 20px.

// $('h1').css('background', 'lime'); //Craft selectors that highlight all the h1, p, and li elements.
// $('p').css('background', 'yellow');
// $('li').css('background', 'pink');


// var h1Alert = $('h1').html(); //reate a jQuery statement to alert the contents of your h1 element(s).
// alert(h1Alert);

//OR (right below)
// $(document).ready(function(){
//     alert($('h1').html());
// });




// $('h1, p, li').css('background', 'lime'); //Combine your selectors that highlight all the h1, p, and li elements.
//
// $('h1').css('animation', )











//SELECTORS/////

// ID, Class, Element, Multiple, All = these are most common selectors

// general syntax: (identical if $ is not used for anything else)

// $('selector')

// jQuery('selector')

//2 main methods:

// similar to .innerHTML method
// $('.class').html

// similar to .style method (allows you to easily manipulate/change css)d
// $('#id').css

// ID selector:

// This is how we select an element by id:
// $('#some-id');

// <h1 #id="codeup">Hello Codeup</h1>

// ... not done, look at casey's tutorial



//////// SECOND JQUERY LESSON!!! Feb. 27.2020 !! ////////////////

//Remove your custom jQuery code from previous exercises.
//
// Add jQuery code that will change the background color of an h1 element when clicked.
//
// Make all paragraphs have a font size of 18px when they are double clicked.
//
// Set all li text color to red when the mouse is hovering; reset to black when it is not.

//1.
$('h1').click(function() {
    $(this).css('background-color', 'pink');
});

//2.
$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

//3.
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function(){
        $(this).css('color', 'black');
    }
);

