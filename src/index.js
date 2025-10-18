import { getWeather } from "./weatherService";
import { processWeather } from "./weatherAdapter";

const data = await getWeather('Indonesia');
const weather = processWeather(data);
console.log(weather);