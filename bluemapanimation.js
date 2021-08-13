// This array contains the coordinates for all L stops between ORD & Forest Park
const blueLStops = [
  [-87.9008644, 41.97843], //ORD International
  [-87.8741637, 41.9786997], //Rosemont
  [-87.8437084, 41.9811038], //Cumberland
  [-87.814457, 41.9812032], //Harlem
  [-87.7754361, 41.9740041], //Jefferson Park
  [-87.7500229, 41.9629854], //Montrose
  [-87.7348463, 41.9551079], //Irving Park
  [-87.722469, 41.9487195], //Addison
  [-87.7234342, 41.944317], //Belmont
  [-87.7151375, 41.9309452], //Logan Square
  [-87.7042674, 41.9245439], //California
  [-87.6945496, 41.9184851], //Western
  [-87.6852159, 41.9127400], //Damen
  [-87.6712949, 41.9026887], //Division
  [-87.6592756, 41.8959803], //Chicago Ave
  [-87.6551302, 41.8936597], //Grand
  [-87.6336667, 41.8856555], //Clark & Lake
  [-87.6390455, 41.8823861], //Monroe
  [-87.6390455, 41.8823861], //LaSalle
  [-87.6459521, 41.8778518], //Clinton
  [-87.6590848, 41.8774718], //UIC Halsted
  [-87.6590848, 41.8769398], //Racine
  [-87.6781034, 41.8769145], //Illinois Medical District
  [-87.6901474, 41.8756478], //Western
  [-87.7143375, 41.8743305], //Kedzie
  [-87.7341727, 41.8738998], //Pulaski
  [-87.7499592, 41.8715944], //Cicero
  [-87.7817363, 41.8706823], //Austin
  [-87.7919431, 41.8718224], //Oak Park
  [-87.8162693, 41.8734438], //Harlem
  [-87.8162693, 41.8734438], //Forest Park
];

//PM mapbox key:  pk.eyJ1IjoicG1jY2FsbHUiLCJhIjoiY2tzNm5rZjh5MWlqejMxcGlhYTV4aGQwOCJ9.0Z-y3jDH7uDQio5fOgW6sg
mapboxgl.accessToken =    'pk.eyJ1IjoicG1jY2FsbHUiLCJhIjoiY2tzNm5rZjh5MWlqejMxcGlhYTV4aGQwOCJ9.0Z-y3jDH7uDQio5fOgW6sg';

// This is the map instance.  Chose center at Western stop and zoom 10 to see all stops including ORD & Forest Park w/o zooming out
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-87.6945496, 41.9184851],
  zoom: 10,
});

// Adds a marker to the map at the first coordinates O'Hare in the array trainStops.
let marker = new mapboxgl.Marker().setLngLat([-87.9008644, 41.97843]).addTo(map);


// counter here represents the index of the current L stop
let counter = 0;
function move() {
  setTimeout(() =>{
    if (counter >= blueLStops.length) return;
    marker.setLngLat(blueLStops[counter]);
    counter++;
    move();
  }, 500)
  // Move the marker on the map every 500ms. Used the function marker.setLngLat() to update the marker coordinates
  // Use counter to access train stops in the array blueLStops
  // Make sure you call move() after you increment the counter.
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
