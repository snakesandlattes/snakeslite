function initMap() {

  // Create an array of styles.
  var yellow = [
    {
      featureType: "all",
      stylers: [
      { hue: "#fbad19" },
      { saturation: 100 },
      { lightness: 10 },
      { gamma: 1.23 },
      { invert_lightness: false }
    ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var yellowMap = new google.maps.StyledMapType(yellow, {name: "Location"});
  
  
  
  

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(43.66475, -79.413),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'yellow']
    }
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);
  
  var image = '/pin.png';
  
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(43.66475, -79.413), 
      map: map,
      animation: google.maps.Animation.DROP,
      title:"Snakes and Lattes",
      icon: image
  });
  
  var contentString = '<div class="map_popup">';
  contentString += 'Snakes & Lattes <br />';
  contentString += '600 Bloor Street West <br />';
 // contentString += '<img src="/store.jpg" width="100" />';
  contentString += '<a href="http://maps.google.ca/maps?q=snakes+and+lattes&hl=en&ll=43.664876,-79.412795&spn=0.002262,0.004801&sll=49.891235,-97.15369&sspn=33.143537,78.662109&vpsrc=6&hq=snakes+and+lattes&t=h&z=18" target="_blank">See Full Map</a>';
  
  contentString += '</div>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('yellow', yellowMap);
  map.setMapTypeId('yellow');
}