"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

// Getter for text of logo color
function getColorText() {           //will return a string inside the #colorText span
    return $('#colorText').html(); //will give us html inside of #colorText
}
console.log(getColorText());

// Setter for text of logo color
function setColorText(color){ //will set the text to the passed in color, and also change its css color
   return $('#colorText').removeClass(getColorText()).html(color).addClass(color);
}

console.log(setColorText('purple'));

// Getter for section color
function getSectionColor(section) {
    return $(section).attr('class'); //helpful if you're just having one class entered
    // return $("#path2").attr('cass');     //first return above is same as this one, but variable section makes it dynamic
}

console.log(getSectionColor('#path1'));
// Setter for the section color
function setSectionColor(color, section) {
    if(section === "all") { // change all sections if 'all' is passed in
        //set all sections to the specified 'color'
        resetColor();
        setColorText(color);
        return $('.codeup-logo > path').addClass(color); //all path children of parent .codeup-logo
    } else {        //an individual section was passed in (i.e. 'path2','path5', etc)
        $(section).removeClass(getSectionColor(section)); //need to be sure we remove the current color before adding one, or else classes wills add up
        return $(section).addClass(color);
    }
}
// setSectionColor('orange', 'all');
    // if individual section is passed in, change its color (used for Rainbow effect)



////////////////////////////
// reset all path elements to default, and change the 'color' text in the h2 to 'green'
function resetColor() {
    $('.codeup-logo > path').removeClass( function () {  //greater than indicates child that is directly under codeup logo class. CSS syntax
        return $(this).attr('class');       //the return here is very specific for targeting one class; you can do just .removeClass(), but it will remove all the classes
    });                                             //$(this) <== all of the '.codeup-logo > path' elements
}

// write a function called rainbowLogo() that changes the logo to rainbow colors
function rainbowLogo() {
    //1.create some text 'r a i n b o w' with letters individually colored in rainbow colors
        //set that text in the #colorText span (inside the header 'Codeup Logo in SVG Form'
    //2. target each path in the logo individually and color them rainbow colors
        //i.e path1 = red, path2 = orange, path3 = yellow, etc.

    var text = 'rainbow';
    var logoSection = ['#path1', '#path2', '#path3', '#path4', '#path5', '#path6'];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    var counter = 0;
    logoSection.forEach(function (sectionId){
        setSectionColor(colors[counter], sectionId);
        counter++;
    });

    //split up the 'rainbow' text, and make it rainbow colored
    var colorfulText = []; //our bucket
        //['span style="red">r</span>', '<span style="orange">a</span>, <span style="yellow">i</span>, etc.. //this is for each letter in string "rainbow"

    var i = 0;      //have two counters because we have more letters than colors
    var colorCounter = 0;


    text.split('').forEach(function (letter){       //.split splits text/string into array
        // each letter receives it's own array element: text.split ==> ['r','a','i','n','b','o','w']
        colorfulText[i] = '<span class="' + colors[colorCounter] + '">' + letter + '</span>';
        //<span class="red">r</span> (what we're aiming for)
        if(colorCounter === 5) {
            colorCounter = 0;  //reset, so we can start our colors over again (at red), since we have no more colors left
        }
        colorCounter++; i++;
    });

    text = colorfulText.join(' ');  //text ==> 'r a i n b o w' <- with individual color per letter
    console.log(text);

    return $('#colorText').removeClass(getColorText()).html(text);

}

console.log(rainbowLogo());
// Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked
var circleClickCount = 0;



// Add a click listener to each of the 'circle' elements at the botto of the page, and make each color circle

$('.circle').click( function () {
    // change the logo to the clicked color, or rainbow, if rainbow was clicked
    //for example, 'red' was clicked -> change the logo (all paths) to red, and change text and font to 'red' in red font
    var clickedColor = $(this).attr('id');  //this will toggle current jQuery object we're working with // 'red', 'yellow', etc

    circleClickCount++;

    //either 1. click a single color, or 2. click 'rainbow'
    if(clickedColor === 'rainbow'){
        console.log('rainbow was clicked'); //just to see this was executed/ see the code
        resetColor(); //removes all classes from path elements
        rainbowLogo(); //will change all path elements to rainbow colors
    } else {
        // they clicked on a single color
        console.log(clickedColor + " was clicked"); //logging to see the code running
        setColorText(clickedColor);
        setSectionColor(clickedColor, 'all');
    }
    // If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name
    if($('.codeup-logo').attr('id') === clickedColor) {
        //what we are now clicking, toggle the caps class
        $('#colorText').toggleClass('caps');
        console.log("clicked the same color");
    } else { //user clicked a different color
        $('#colorText').removeClass('caps'); //removing class of caps because it will not go to lowercase when different color clicked, otherwise
        circleClickCount = 0;
    }

    console.log(circleClickCount);
    //after we've checked for multiple clicks, set .codeup-logo element ID to 'clickedColor'
    $('.codeup-logo').attr('id', clickedColor);
});



// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border


// TODO: Let's take the border away from the first circle


// TODO: Let's make the last circle disappear


// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle


// TODO: while changing the fist path element to have a black fill, give its grandparent a light gray background and 10px padding


// TODO: change the second path element to blue, then change the 'next' element to yellow


// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?