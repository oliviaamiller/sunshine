import React from 'react';

// if they aren't state, arrays should live outside the component in case you want to export and reuse them elsewhere
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function WeatherDetails({ 
  // here's some fancy, deep destructuring if you're interested
  dayForecast: {
  dt,
    temp: {
      morn,
      day, 
      eve
    },
  weather: [ { main } ]
}, 
 }) {


  function getNewDate(dt) { // i like function names to be verbs
    const date = new Date(dt * 1000);
    const month = months[date.getUTCMonth()];
    const day = days[date.getUTCDay()];
    const dayNum = [date.getUTCDate()];
    const year = [date.getUTCFullYear()];


    return `${day} ${month} ${dayNum}, ${year}`;
  }

  return (
    <div className='daily-weather-card'>
      <p>{getNewDate(dt)}</p>
      <p>Temps:</p>
      <p>Morning {morn} °F</p>
      <p>Daytime {day} °F</p>
      <p>Evening {eve} °F</p>
      <p>{main === 'Clear' 
        ? 'Sunny!' 
        : main} with {description}</p>
      
    </div>
  );
}

// {
//   "dt": 1646337600,
//   "sunrise": 1646317072,
//   "sunset": 1646358573,
//   "moonrise": 1646320260,
//   "moonset": 1646363160,
//   "moon_phase": 0.04,
//   "temp": {
//       "day": 68.29,
//       "min": 56.77,
//       "max": 69.71,
//       "night": 56.77,
//       "eve": 57.87,
//       "morn": 59.85
//   },
//   "feels_like": {
//       "day": 66.56,
//       "night": 55.62,
//       "eve": 56.73,
//       "morn": 57.69
//   },
//   "pressure": 1013,
//   "humidity": 37,
//   "dew_point": 40.64,
//   "wind_speed": 12.64,
//   "wind_deg": 198,
//   "wind_gust": 14.41,
//   "weather": [
//       {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//       }
//   ],
//   "clouds": 100,
//   "pop": 0.19,
//   "uvi": 5.44
// }