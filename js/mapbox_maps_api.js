mapboxgl.accessToken = mapboxToken;

///////

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
});

///////

var markerOptions = { //this is an object that is being passed into the marker (below)
    color: "#ff0000", //here, option is "color"
    draggable: true
}

///////

// var marker1 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.4623839, 29.4730411])
//     .addTo(map);
//
//
// ///////
//
// var volarePopup = new mapboxgl.Popup()
//     .setHTML("<h1 id='volare1'>Volare</h1>")
//     .addTo(map);
//
// marker1.setPopup(volarePopup).togglePopup();

///////



///

geocode("5054 Broadway St, San Antonio, TX 78209", mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.flyTo({center: result, zoom: 15});
});

// /////// JS for marker 2 starts here
//
// var marker2 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.47796662173043, 29.61080750918382])
//     .addTo(map);
// //
//
//
// var restaurant2Popup = new mapboxgl.Popup()
//     .setHTML("<h1 id='restaurant2'>Hoppi Monk</h1>")
//     .addTo(map);
//
// marker2.setPopup(restaurant2Popup).togglePopup();
// //
//
// /////// JS for marker 3 starts here
// var marker3 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.5650461, 29.5296703])
//     .addTo(map);
//
// var restaurant3Popup = new mapboxgl.Popup()
//     .setHTML("<h1 id='restaurant3'>Ali Baba Market</h1>")
//     .addTo(map);
//
// marker3.setPopup(restaurant3Popup).togglePopup();

//here begins forEach loop attempt:

favoriteRestaurants = [
    {
    location: [-98.4623839, 29.4730411],
    name: "<h1 id='volare1'>Volare</h1>"
    },
    {
    location:[-98.47796662173043, 29.61080750918382],
    name: "<h1 id='hoppimonk2'>Hoppi Monk</h1>"
    },
    {
    location:[-98.5650461, 29.5296703],
    name: "<h1 id='alibaba3'>Ali Baba Market</h1>"
    }];

favoriteRestaurants.forEach(function(restaurant){
    var marker1 = new mapboxgl.Marker(markerOptions)
        .setLngLat(restaurant.location)
        .addTo(map);


    var volarePopup = new mapboxgl.Popup()
        .setHTML(restaurant.name)
        .addTo(map);

    marker1.setPopup(volarePopup).togglePopup();
});





//here i tried making cursor switch to pointer when hovering over marker; not yet working
// map.addLayer({
//     'id': 'places',
//     'type': 'symbol',
//     'source': 'places',
//     'layout': {
//         'icon-image': '{icon}-15',
//         'icon-allow-overlap': true
//     }
// });
//
// map.on('mouseenter', 'marker', function() {
//     map.getCanvas().style.cursor = 'pointer';
// });
//
// map.on('mouseleave', 'marker', function() {
//     map.getCanvas().style.cursor = '';
// });

