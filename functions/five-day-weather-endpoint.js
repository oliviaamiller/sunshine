const fetch = require('node-fetch');
require('dotenv').config();
// eslint-disable-next-line
exports.handler = async (event, context) => {
  try {
    const fiveDayWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${event.queryStringParameters.lat}&lon=${event.queryStringParameters.long}&appid=${process.env.WEATHER_API_KEY}
    `);

    const fiveDayWeatherJson = await fiveDayWeather.json();

    return {
      statusCode: 200,
      body: JSON.stringify(fiveDayWeatherJson),
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