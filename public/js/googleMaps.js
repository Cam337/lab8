function initMap() {
	// Create center marker
  // UCSD coords: 32.880, -117.236
  // SSC Coords: 32.8788033,-117.2359121
  var ltlng = {lat:32.8788033, lng:-117.2359121};

  // Create a map object and specify the DOM element for display
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: ltlng,
    map: map,
    title: "SSC"
  });

}
