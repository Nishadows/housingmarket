var sliderControl=null

var nova = L.map("nova", {center: [38.9, -77.25], zoom: 9});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(nova);


var homeLayer2011 = L.geoJson(data2011, {style: styleHome, time:"2011", 
onEachFeature: function (feature, layer) {
layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
'<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
feature.properties.Rental_Price+'</br></h4>')}
});
var homeLayer2012 = L.geoJson(data2012, {style: styleHome, time:"2012", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price+'</br></h4>')}
});
var homeLayer2013 = L.geoJson(data2013, {style: styleHome, time:"2013", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price+'</br></h4>')}
});
var homeLayer2014 = L.geoJson(data2014, {style: styleHome, time:"2014", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price+'</br></h4>')}
});
var homeLayer2015 = L.geoJson(data2015, {style: styleHome, time:"2015", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price+'</br></h4>')}});
var homeLayer2016 = L.geoJson(data2016, {style: styleHome, time: "2016", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price+'</br></h4>')}
});
var homeLayer2017 = L.geoJson(data2017, 
  {style: styleHome, 
    time: "2017",
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
      '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
      feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
      feature.properties.Rental_Price+'</br></h4>')}
  });
var homeLayer2018 = L.geoJson(data2018, 
  {style: styleHome, 
    time: "2018",
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
      '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
      feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
      feature.properties.Rental_Price+'</br></h4>')}  
  });

var homeLayerGroup = L.layerGroup([homeLayer2011,homeLayer2012,
  homeLayer2013,homeLayer2014,homeLayer2015,homeLayer2016,homeLayer2017,homeLayer2018])

var homelegend = L.control({position: 'bottomright'});

homelegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      grades = [110, 170, 230, 290, 350, 410, 470,530],
      labels = [110-170,170-130,230-290,290-350,350-410,410-470,470-530];
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColorHome(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};

homelegend.addTo(nova);


function getColorHome(d) {
  return d > 530 ? '#fff' :
         d >  470 ? '#BD0026' :
         d > 410  ? '#E31A1C' :
         d > 350  ? '#FC4E2A' :
         d > 290   ? '#FD8D3C' :
         d >  230  ? '#FEB24C' :
         d > 170   ? '#FED976' :
         d >110    ? '#FFEDA0':
         '#FFEDA0';
        }


function styleHome(feature) {
  return {
      fillColor: getColorHome(feature.properties.Home_Value),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}


sliderControl = L.control.sliderControl({
  position: "topright", 
  layer: homeLayerGroup, 
  follow: true,
  range: false,
  timeAttribute:"time"});
  

//Make sure to add the slider to the nova-map ;-)
nova.addControl(sliderControl);

//And initialize the slider
sliderControl.startSlider();

$('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(0, 19));

// Create a layer control, containing our basenova-maps and overlayMaps, and add them to the map
L.control.layers(homeLayerGroup).addTo(nova);

