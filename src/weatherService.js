const API_KEY = 'E26J4YQJD9NELL93AM3BHPQE9';
const ENDPOINT = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

export async function getWeather(location){
    try {
        const uri = `${location}?key=${API_KEY}`;
        const response = await fetch(ENDPOINT + uri);
        return await response.json();
    } catch (error) {
        console.error(error);
    }    
}
