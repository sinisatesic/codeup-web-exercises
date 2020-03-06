/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 12,
    center: [31.134667,  29.9792458] //longitude first; latitude second
});




//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker
var markerOptions = { //this is an object that is being passed into the marker (below)
    color: "#ff0000", //here, option is "color"
    draggable: true
}

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.486209, 29.426007])
    .addTo(map);



// TODO: Experiment with the color, and setting the LngLat  //done
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs! //done


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)

var alamoPopup = new mapboxgl.Popup()
    // .setHTML("<h1>Remember da Alamos</h1>")
    .setText("Remember da Alamos")
    .addTo(map);

marker.setPopup(alamoPopup);

// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.



// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.


geocode(marker, mapboxToken).then(function(result){ //result equals return of the anonymous function
    console.log(result);            //results in long and lat in console as an array
});

//another example:

// geocode("The White House", mapboxToken).then(function(result){
//     console.log(result);
//     // map.setCenter(result);
//     map.flyTo({center: result, zoom: 15});
//     // map.setZoom(5)
// });

//TODO: Using the geocode method above, add a marker at Codeup to the map //done
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo() //done



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function(result){
    console.log(result);
});

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


