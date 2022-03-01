export async function getLatLong(zip) {

//turn this into a function like getLatLong in api utils
  const response = await fetch(`/.netlify/functions/geocoding-endpoint?zip=${zip}`);
  const json = await response.json();
  
  return { lat: json.lat, long: json.lon };
}