const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const geocodeResponse = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${event.queryStringParameters.zip}&appid=${process.env.WEATHER_API_KEY}`);
    const geoJson = await geocodeResponse.json();
    return {
      statusCode: 200,
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the weather data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify(geoJson),
    };
  } catch (error) {
  // eslint-disable-next-line
  console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
