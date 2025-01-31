
// for loop
for (let i = 0; i < cities.length; i++) {
    console.log(`${i}th iteration`)
}


// 01-Ins

// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });
  
// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// 02-Ins

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
let marker = L.marker([45.52, -122.67], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);
  
// Binding a popup to our marker
marker.bindPopup("Hello There!");


// 04-Ins

// Create a circle, and pass in some initial options.
L.circle([45.52, -122.69], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 500
  }).addTo(myMap);
  
  // Create a Polygon, and pass in some initial options.
  L.polygon([
    [45.54, -122.68],
    [45.55, -122.68],
    [45.55, -122.66]
  ], {
    color: "yellow",
    fillColor: "yellow",
    fillOpacity: 0.75
  }).addTo(myMap);
  
  // The coordinates for each point to use in the polyline
  let line = [
    [45.51, -122.68],
    [45.50, -122.60],
    [45.48, -122.70],
    [45.54, -122.75]
  ];
  
  // Create a polyline by using the line coordinates, and pass in some initial options.
  L.polyline(line, {
    color: "red"
  }).addTo(myMap);
  
  // Create a rectangle, and pass in some initial options.
  L.rectangle([
    [45.55, -122.64],
    [45.54, -122.61]
  ], {
    color: "black",
    weight: 3,
    stroke: true
  }).addTo(myMap);
  
// 06-Ins

// Loop through the cities array, and create one marker for each city object.
// Radius dependent on population
// binds marker titles
for (let i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius to equal the output of our markerSize() function:
    // This will make our marker's size proportionate to its population.
    radius: markerSize(cities[i].population)
  }).bindPopup(`<h1>${cities[i].name}</h1> <hr> <h3>Population: ${cities[i].population.toLocaleString()}</h3>`).addTo(myMap);
}

// 08-Ins

