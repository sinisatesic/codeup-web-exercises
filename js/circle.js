(function() {
    "use strict";

    // circle object starts
    var circle = {
        radius: 3,

        getArea: function() {
            // TODO: complete this method
            var circleArea = Math.PI * (this.radius * this.radius); //you can also do Math.PI * Math.pow(this.radius, 2);
            {
                return circleArea; // TODO: return the proper value
            }

            // hint: area = pi * radius^2
        },

        logInfo: function logInfo(doRounding) {
            // TODO: complete this method.
            var circleArea = Math.PI * (this.radius * this.radius);
            var roundedResult = Math.round(circleArea);


            if (doRounding === true){
                console.log("A circle with the radius " + this.radius + " results in circle area of " + roundedResult);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
