export function processWeather(data) {
  return {
    address: data.address,
    resolvedAddress: data.resolvedAddress,
    condition: data.currentConditions.conditions,
    sunrise: data.currentConditions.sunrise,
    sunset: data.currentConditions.sunset,
    tempF: data.currentConditions.temp,
    tempC: fahrenToCelc(data.currentConditions.temp),
    timezone: data.timezone,
    description: data.description,
  };
}

function fahrenToCelc(fahrenheit) {
  return Math.round(((fahrenheit - 32) / (9 / 5)) * 10) / 10;
}
