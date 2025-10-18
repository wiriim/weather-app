export function processWeather(data){
    return {
        address: data.address,
        resolvedAddress: data.resolvedAddress,
        condition: data.currentConditions.conditions,
        sunrise: data.currentConditions.sunrise,
        sunset: data.currentConditions.sunset,
        temp: data.currentConditions.temp,
        timezone: data.timezone
    }
}