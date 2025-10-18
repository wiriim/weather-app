let location = document.querySelector("#location");
let address = document.querySelector("#address");
let resolvedAddress = document.querySelector("#resolvedAddress");
let condition = document.querySelector("#condition");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let temp = document.querySelector("#temp");
let timezone = document.querySelector("#timezone");
let description = document.querySelector("#description");
let gif = document.querySelector("#gif");

function getLocation() {
  return location.value;
}

function showWeather(weather) {
  address.value = weather.address;
  resolvedAddress.value = weather.resolvedAddress;
  condition.value = weather.condition;
  sunrise.value = weather.sunrise;
  sunset.value = weather.sunset;
  temp.value = `${weather.tempF}°F / ${weather.tempC}°C`;
  timezone.value = weather.timezone;
  description.textContent = weather.description;
}

function showGif(url) {
  gif.src = url;
}

export { getLocation, showWeather, showGif };
