// Inicializando funciones de google maps.
function initMap() {
  // Agregando el gmap 
  var center = {
    lat: -34.397,
    lng: 150.644
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15
  });

  var pin = 'assets/images/icon-pin.png';
  var marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    icon: pin,
    map: map,
    position: center
  });

  // geolocalización de HTML5
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      marker.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, marker, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, map.getCenter());
  }

  // agregando input
  var startInput = document.getElementById('start-input');
  var finishingInput = document.getElementById('finishing-input');
  new google.maps.places.Autocomplete(startInput);
  new google.maps.places.Autocomplete(finishingInput);

  // trazando ruta
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
    directionsService.route({
      origin: startInput.value,
      destination: finishingInput.value,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        console.log(response);
        console.log(response.routes[0].legs[0].distance.text);
        console.log(response.routes[0].legs[0].duration.text);
        var fareCard = '';
        var tripDistance = parseInt(response.routes[0].legs[0].distance.text);
        var tripDuration = parseInt(response.routes[0].legs[0].duration.text);
        console.log(tripDistance);
        console.log(tripDuration);

        var estimatedFareX = 3.5 + tripDistance * 0.73 + tripDuration * 0.15;
        var estimatedFareBlack = 6 + tripDistance * 1.7 + tripDuration * 0.25;
        
        fareCard = `
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Uber X <span>${estimatedFareX}</span></li>
            <li class="list-group-item">Uber Black <span>${estimatedFareBlack}</span></li>
          </ul>
        </div>
        `;
        
        document.querySelector('.position2').innerHTML = fareCard;

      } else {
        window.alert('No encontramos una ruta');
      }
    });
  };

  directionsDisplay.setMap(map);

  var drawRoute = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    console.log(directionsService);
    console.log(directionsDisplay);
  };

  document.getElementById('finder-btn').addEventListener('click', drawRoute);
  console.log('click');
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}