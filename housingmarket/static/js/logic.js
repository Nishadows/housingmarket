// var sliderControl=null

var seattle = L.map("seattle", {center: [47.5, -121.75], zoom: 8});
var nova = L.map("nova", {center: [38.9, -77.25], zoom: 9});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(seattle);

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
feature.properties.Home_Value +'</br><br>Average Rental Price per Month: $'+
feature.properties.Rental_Price +'</br></h4>')}
});
var homeLayer2012 = L.geoJson(data2012, {style: styleHome, time:"2012", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value +'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price +'</br></h4>')}
});
var homeLayer2013 = L.geoJson(data2013, {style: styleHome, time:"2013", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value +'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price +'</br></h4>')}
});
var homeLayer2014 = L.geoJson(data2014, {style: styleHome, time:"2014", 
onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value +'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price +'</br></h4>')}
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
var rentalLayer2011 = L.geoJson(data2011, {style: styleRental, time:"2011", 
  onEachFeature: function (feature, layer) {
  layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
  '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
  feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
  feature.properties.Rental_Price+'</br></h4>')}
  });
  var rentalLayer2012 = L.geoJson(data2012, {style: styleRental, time:"2012", 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
    '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
    feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
    feature.properties.Rental_Price+'</br></h4>')}
  });
  var rentalLayer2013 = L.geoJson(data2013, {style: styleRental, time:"2013", 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
    '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
    feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
    feature.properties.Rental_Price+'</br></h4>')}
  });
  var rentalLayer2014 = L.geoJson(data2014, {style: styleRental, time:"2014", 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
    '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
    feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
    feature.properties.Rental_Price+'</br></h4>')}
  });
  var rentalLayer2015 = L.geoJson(data2015, {style: styleRental, time:"2015", 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
    '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
    feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
    feature.properties.Rental_Price+'</br></h4>')}});
  var rentalLayer2016 = L.geoJson(data2016, {style: styleRental, time: "2016", 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
    '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
    feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
    feature.properties.Rental_Price+'</br></h4>')}
  });
  var rentalLayer2017 = L.geoJson(data2017, 
    {style: styleRental, 
      time: "2017",
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
        '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
        feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
        feature.properties.Rental_Price+'</br></h4>')}
    });
  var rentalLayer2018 = L.geoJson(data2018, 
    {style: styleRental, 
      time: "2018",
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<h3>'+feature.properties.County+', '+feature.properties.State+
        '<br>'+feature.properties.time+'<hr></h3><h4><br>Average Home Price per Square Foot: $'+
        feature.properties.Home_Value+'</br><br>Average Rental Price per Month: $'+
        feature.properties.Rental_Price+'</br></h4>')}  
    });
  
var homeLayerGroup = L.layerGroup([homeLayer2011,homeLayer2012,
  homeLayer2013,homeLayer2014,homeLayer2015,homeLayer2016,homeLayer2017,homeLayer2018])
    
var rentalLayerGroup = L.layerGroup([rentalLayer2011,rentalLayer2012,
  rentalLayer2013,rentalLayer2014,rentalLayer2015,rentalLayer2016,rentalLayer2017,homeLayer2018]);


var homelegend = L.control({position: 'bottomright'});

homelegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      grades = [110, 170, 230, 290, 350, 410, 470,530],
      labels = [110-170,170-130,230-290,290-350,350-410,410-470,470-530];
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background: ' + getColorHome(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};


var rentallegend = L.control({position: 'bottomright'});

rentallegend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      grades = [1200, 1500, 1800, 2100, 2400, 2700, 3000,3300],
      labels = [1200-1500,1500-1800,1800-2100,2100-2400,2400-2700,2700-3000,3000-3300];
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColorRental(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};

rentallegend.addTo(seattle);
rentallegend.addTo(nova);

homelegend.addTo(seattle);
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

        
function getColorRental(d) {
  return d > 3300 ? '#0428a9' :
         d >  3000? '#133fa9' :
         d > 2700  ? '#2256a9' :
         d > 2400  ? '#326eaa' :
         d > 2100  ? '#4185aa' :
         d > 1800   ? '#509dab' :
         d >  1500  ? '#60b4ab' :
         d > 1200   ? '#6fccac' :
             '#8efbad'
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

function styleRental(feature) {
  return {
      fillColor: getColorRental(feature.properties.Rental_Price),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

var sliderControl = L.control.sliderControl({
  position: "bottomleft", 
  layer: rentalLayerGroup, 
  follow: true,
  range: false,
  timeAttribute:"time"});

  var sliderControl2 = L.control.sliderControl({
    position: "bottomleft", 
    layer: rentalLayerGroup, 
    follow: true,
    range: false,
    timeAttribute:"time"});
  

//Make sure to add the slider to the nova-map ;-)
seattle.addControl(sliderControl);
nova.addControl(sliderControl2);

//And initialize the slider
sliderControl.startSlider();
sliderControl2.startSlider();

// $('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(0, 19));

// Create a layer control, containing our basenova-maps and overlayMaps, and add them to the map
// L.control.layers(rentalLayerGroup).addTo(map);
// L.control.layers(rentalLayerGroup).addTo(map2);

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});
// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Rental Prices": rentalLayerGroup,
  "Home Value": homeLayerGroup
};

// Define a map object


// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(seattle);
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(nova);

