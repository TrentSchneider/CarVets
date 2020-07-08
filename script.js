var lati, long;

// pulling user latitude and longitude and assigning to variables
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    lati = position.coords.latitude;
    long = position.coords.longitude;
  }
}

// ajax call for pulling google place info
// leaving commented out until we implement it to avoid needless calls
// $.ajax({
//   url:
//     "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
//     lati +
//     "," +
//     long +
//     "&radius=1500&type=car_repair&key=AIzaSyD1SPf-ueMO6m5itNj_GSTabGu60sa7SeE",

//   method: "GET",
// }).then(function (response) {});
