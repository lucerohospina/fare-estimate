$(document).ready(function() {
  // function findLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var location = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //       console.log(location.lat);
  //       console.log(location.lng);
  //       var proxy = 'https://cors-anywhere.herokuapp.com/';
  //       var apiUber = `https://api.uber.com/v1.2/products?${location.lat},${location.lng}`;
  //       console.log(apiUber);
  //       $.ajax({
  //         url: proxy + apiUber,
  //         success: addEstimate,
  //         headers: {Authorization: 'Token + 8NyroHkJwDzxNIXn99wOey792-2YLGmvFyAlcXa-'}
  //       });
  //     });
  //   } else {
  //     handleError;
  //   }
  // }

  // $.ajax({
  //   dataType: 'application/json',
  //   url: 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075',
  //   headers: {Authorization: 'Token 8NyroHkJwDzxNIXn99wOey792-2YLGmvFyAlcXa-'}
  //   // Authorization: 'Bearer 8NyroHkJwDzxNIXn99wOey792-2YLGmvFyAlcXa-' 
  // }).done(addEstimate)
  //   .fail(handleError);
   
  // function addEstimate(data) {
  //   console.log(data);
  // }

  // function handleError() {
  //   console.log('something went wrong');
  // }
});