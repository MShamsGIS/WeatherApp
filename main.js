navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  var sh = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4da71779e7a704e4f594d242b356be02`
  );
  sh.then(function (data) {
    data
      .json()
      .then(function (shams) {
        var city = shams.name;
        var country = shams.sys.country;
        var temp = Math.round(shams.main.temp);
        var description = shams.weather[0].description;
        document.getElementById("city").innerHTML = city;
        document.getElementById("country").innerHTML = country;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("description").innerHTML = description;
      })
      .catch(function error(error) {
        console.log(Error);
      });
  }).catch(function error(error) {
    console.log(Error);
  });
});
