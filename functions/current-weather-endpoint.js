const fetch = require('node-fetch');
require('dotenv').config();
// eslint-disable-next-line
exports.handler = async (event, context) => {
  try {
    console.log('LAT', event.queryStringParameters.lat);
    console.log('LONG', event.queryStringParameters.long);
    const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${event.queryStringParameters.lat}&lon=${event.queryStringParameters.long}&appid=${process.env.WEATHER_API_KEY}`);

    const currentWeatherJson = await currentWeather.json();
    console.log('SHFASHDSFHDHFKHJDEFIJOWEIOFJHEO', currentWeatherJson);

    return {
      statusCode: 200,
      body: JSON.stringify(currentWeatherJson),
    };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data you big dumb dumb' }),
    };
  }
};

// api.openweathermap.org/data/2.5/weather?lat=37.7743&lon=-122.4258&appid=118eb59392ee42039d5a63de869ffd16