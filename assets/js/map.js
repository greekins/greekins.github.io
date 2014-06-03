var map;
function initialize() {
	var myLatlng = new google.maps.LatLng(47.404505, 8.620196)
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel:false
  };
  var map = new google.maps.Map(document.getElementById('contactmap'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.BOUNCE
  });
}

google.maps.event.addDomListener(window, 'load', initialize);