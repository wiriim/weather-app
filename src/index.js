import "./style.css";
import { getWeather } from "./weatherService";
import { processWeather } from "./weatherAdapter";
import { getLocation, showWeather, showGif, showLoading, hideLoading } from "./domService";
import { getGifUrl } from "./giphyService";

const form = document.querySelector("form");
let location;
let data;
let weather;
form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    location = getLocation();
    showLoading();
    data = await getWeather(location);
    weather = processWeather(data);
    showWeather(weather);
    hideLoading();

    const gifUrl = await getGifUrl(weather.condition);
    showGif(gifUrl);

    console.log(weather);
  } catch (error) {
    console.error(error);
  }
});
