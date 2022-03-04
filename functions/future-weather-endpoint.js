const fetch = require('node-fetch');
require('dotenv').config();
// eslint-disable-next-line
exports.handler = async (event, context) => {
  try {
    const futureWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${event.queryStringParameters.lat}&lon=${event.queryStringParameters.long}&units=imperial&appid=${process.env.WEATHER_API_KEY}
    `);


    const futureWeatherJson = await futureWeather.json();

    return {
      statusCode: 200,
      body: JSON.stringify(futureWeatherJson),
    };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching five day data' }),
    };
  }
};