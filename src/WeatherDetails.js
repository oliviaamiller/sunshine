import React from 'react';

export default function WeatherDetails({ dayForecast, months, days }) {


  function newDate(dt) {
    const date = new Date(dt * 1000);
    const month = months[date.getUTCMonth()];
    const day = days[date.getUTCDay()];
    const dayNum = [date.getUTCDate()];
    const year = [date.getUTCFullYear()];


    return `${day} ${month} ${dayNum}, ${year}`;
  }
  return (
    <div className='daily-weather-card'>
      <p>{newDate(dayForecast.dt)}</p>
      <p>Temps:</p>
      <p>Morning {dayForecast.temp.morn} °F</p>
      <p>Daytime {dayForecast.temp.day} °F</p>
      <p>Evening {dayForecast.temp.eve} °F</p>
      <p>{dayForecast.weather[0].main === 'Clear' 
        ? 'Sunny!' 
        : dayForecast.weather[0].main} with {dayForecast.weather[0].description}</p>
      
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