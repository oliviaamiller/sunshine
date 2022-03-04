export async function getLatLong(zip) {
//turn this into a function like getLatLong in api utils
  const response = await fetch(`/.netlify/functions/geocoding-endpoint?zip=${zip}`);
  const json = await response.json();
  return { lat: json.lat, long: json.lon };
}

export async function getWeather(lat, long) {
  const response = await fetch(`/.netlify/functions/current-weather-endpoint?lat=${lat}&long=${long}`);
  const responseJson = await response.json();
  return responseJson;
}

export async function getFutureWeather(lat, long) {
  const response = await fetch(`/.netlify/functions/future-weather-endpoint?lat=${lat}&long=${long}`);
  const responseJson = await response.json();
  return responseJson;
}