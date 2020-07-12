// var lati, long;

// pulling user latitude and longitude and assigning to variables
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showPosition);
//   function showPosition(position) {
//     lati = position.coords.latitude;
//     long = position.coords.longitude;
//   }
// }

// // ajax call for pulling google place info
// // leaving commented out until we implement it to avoid needless calls
// $.ajax({
//   url:
//     "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
//     lati +
//     "," +
//     long +
//     "&radius=8100&type=car_repair&key=AIzaSyD1SPf-ueMO6m5itNj_GSTabGu60sa7SeE&pagetoken=5",
//   method: "GET",
// }).then(function (response) {
//   var locName = response.results.name,
//     locLong = response.results.location.lng,
//     locLat = response.results.location.lat;
//   $.ajax({
//     url:
//       "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?input=" +
//       locName +
//       "inputtype=textquery&point:" +
//       locLat +
//       "," +
//       locLong +
//       "&key=AIzaSyD1SPf-ueMO6m5itNj_GSTabGu60sa7SeE",
//     method: "GET",
//   }).then(function (response) {
//     for (let i = 0; i < response.candidates.length; i++) {
//       var liName = response[i].name,
//         liOpenHours = response.condidates[i].opening_hours.weekday_text,
//         liAddress = response.candidates[i].formatted_address;
//       var addLocation = $("li");
//       var liLocName = $("p").text(liName);
//       var liLocHours = $("p").text(liOpenHours);
//       var liLocAddress = $("p").text(liAddress);
//       addLocation.append(liLocName);
// addLocation.append(liLocAddress);
// addLocation.append(liLocHours);
//       $("#list").append(addLocation);
//     }
//   });
// });
// test function for loading the modal using foundation
// function loadModal() {
//   var locModal = $("div");
//   locModal.addClass("reveal");
//   locModal.attr("id", "modal1");
//   locModal.attr("data-reveal");
//   var textSpace = $("p");
//   textSpace.text("placeholder text");
//   var closeButton = $("button");
//   closeButton.addClass("close-button");
//   closeButton.attr("data-close");
//   closeButton.attr("aria-label", "Close modal");
//   closeButton.attr("type", "button");
//   var closeSpan = $("span");
//   closeSpan.attr("aria-hidden", true);
//   closeSpan.html("&times;");
//   closeButton.append(closeSpan);
//   locModal.append(textSpace);
//   locModal.append(closeButton);
//   $("modalAnchor").append(locModal);
// }
// $("#modalTrigger").on("click", loadModal());
