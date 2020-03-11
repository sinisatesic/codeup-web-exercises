"use strict";

$(document).ready(function() {

    /****************** MAP, FILTER, REDUCE ******************/

    // Array of MacBookPro{} objects
    var mbpModels = [
        {
            id: 'MA464LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
            model: 'A1150',
            year: '2006',
            price: 3199
        },
        {
            id: 'MB986LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
            model: 'A1286',
            year: 'Mid-2009',
            price: 2799
        },
        {
            id: 'MD311LL/A ',
            desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
            model: 'A1297',
            year: 'Late-2011',
            price: 2399
        },
        {
            id: 'MGXA2LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
            model: 'A1398',
            year: 'Mid-2014',
            price: 2299
        }
    ];


    // ES6
    // var cartTotal = cart.reduce((total,item) => total + item.cost, 0);

    // *****************   ******     ******************//
    // *****************  TODO: MAP() ******************//
    // *****************   ******     ******************//

    // Print a list of id's of the mbpModels array
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6


    /********************************* 1 *********************************/

    //  1. Using forEach()
    let ids = [];
    mbpModels.forEach( function (mbp){
        ids.push(mbp.id);
    });
    $('#forEach').html(createList(ids));


    /********************************* 2 *********************************/

    //  2. Using map()
    let idsMap = mbpModels.map(function (mbp) {     //mbp here, like a forEach, can be named whatever; it's toggling each iterating instance through mbpModels
        return mbp.id;
        });
    $('#map').html(createList(idsMap));


    /********************************* 3 *********************************/

    //  3. Use ES6
    let idsES6 = mbpModels.map(mbp => mbp.id);
    $('#mapES6').html(createList(idsES6));

    /**************************** createList() ***************************/
    /******* returns a <li> type list in raw HTML ************************/
    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }
    /**************************** createList() ***************************/


    // *****************   ******     ******************//
    // **************  TODO: FILTER() ******************//
    // *****************   ******     ******************//

    // Print a list of the models made in 2011 and later
    //  1. Use forEach()
    //  2. Use filter()
    //  3. Use ES6

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get year from string *****************************/
    function getYear(yearString) {
        let yearArr,bucket;
        [yearArr, bucket] = [yearString.split(''),[]];
        for(var i=3; i>=0; i--) {
            bucket[i] = yearArr.pop();
        }
        return bucket.join('');
    }
    /********************* END function to get year from string ***************************/


    /********************************* 1 *********************************/
    //  1. Use forEach()
    let forEach2011 = [];
    mbpModels.forEach( function (mbp) {
        //get the current model's year
        let thisYear = getYear(mbp.year); // will get something like '2014' instead of 'mid-2014'

        //check if thisYear is >= 2011
        if(thisYear >= 2011) {
            forEach2011.push(mbp.desc + '<strong>(' + mbp.year + ')</strong>');     //you can also use template string format here (in Casey's notes)
            // Apple MacBook Pro 17-inch "Core i7" 2.4 <strong>(Mid-2011)</strong>
        }
    });
    $('#filterForEach').html(createList(forEach2011)); //will give li list of objects we want from this array

    /********************************* 2 *********************************/
    //  2. Use filter()
    let filter2011 = mbpModels.filter( function (mbp) {
            return getYear(mbp.year) >= 2011;       //.filter returns boolean value ; only objects whose year is greater than 2011
        });
    $('#filter').html(createList(filter2011.map(mbp => mbp.desc)));

    /********************************* 3 *********************************/
    //  3. Use ES6
    let es62011 = mbpModels.filter(mbp => getYear(mbp.year) >= 2011);
    $('#filterEs6').html(createList(es62011.map(mbp => `${mbp.desc} <strong>(${mbp.year})</strong>`)));

    // *****************   ******     ******************//
    // **************  TODO: REDUCE() ******************//
    // *****************   ******     ******************//

    // Determine the total value of all MacBook Pros together
    //  1. Use forEach()
    //  2. Use reduce()
    //  3. Use ES6

    /********************************* 1 *********************************/
    //  1. Use forEach()
    let totalValueFE = 0;
    mbpModels.forEach(function (mbp){
        totalValueFE += mbp.price;
    });
    $('#reduceForEach').html(commaThousands(totalValueFE));
    /********************************* 2 *********************************/
    //  2. Use reduce()
    let totalValueReduce = mbpModels.reduce(function (total, mbp){
        return total + mbp.price;
        }, 0);      //starting at zero for total
    $('#reduce').html(commaThousands(totalValueReduce));
    /********************************* 3 *********************************/
    //  3. Use ES6
    let totalValueES6 = mbpModels.reduce((total, mbp) => total + mbp.price, 0);
    $('#reduceEs6').html(commaThousands(totalValueES6));

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get commas in number *****************************/
    function commaThousandsRefactor(number) {
        let numArr = number.toString().split('');
        let numDigits = numArr.length;
        numArr.reverse();
        // 1-3 : no commas
        // 4-6 : 1 comma
        // 7-9 : 2 commas
        // ...   ...
        // 1. 123456789
        // 2. 123456,789
        // 3. 123,456,789
        for(let i=0; i<(numDigits+numDigits%3)/3; i++) {
            numArr.splice(3, 0, ','); //987,654321
            numArr.splice(7, 0, ','); //987,654,321
            
        }

    }
    // commaThousandsRefactor(10485);
    function commaThousands(number) {
        var numArr = number.toString().split('');
        var startPos = numArr.length % 3;
        var initialLength = numArr.length;
        var first = true;
        var extra = 0;
        // add commas every third digit from the end
        if( numArr.length <= 3) {
            return number;
        } else {
            for(var i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
                console.log('for iteration');
                console.log(i * 3 + extra + startPos);
                if(i*3+extra+startPos >= initialLength+extra) {
                    // console.log('stop');
                    break;
                } else {
                    if((startPos !== 0) && first) {
                        numArr.splice(startPos,0,',');
                        first = false;
                        extra++;
                    } else{
                        numArr.splice((i*3+extra),0,',');
                        extra++;
                    }
                }
            }
            // console.log(numArr.join(''));
            numArr.splice(0,0,'$');
            return numArr.join('');
        }
    }
    /**************************** DON'T WORRY HOW THIS FUNCTION WORKS ********************************/

});