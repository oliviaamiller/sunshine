import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleLocation } from './services/fetch-utils';
import { getFiveDayWeather } from './services/api-utils';

export default function FavoriteDeatil() {
  const [locationDetails, setLocationDetails] = useState('');
  const [fiveDayForecast, setFiveDayForcast] = useState([]);
  const params = useParams();
  
  useEffect(() => {
    async function fetch() {
      const data = await getSingleLocation(params.id);
      setLocationDetails(data);

      console.log(locationDetails);

      const fiveDay = await getFiveDayWeather(locationDetails.lat, locationDetails.long);
      
      setFiveDayForcast(fiveDay);

      console.log(fiveDay);

    }
    if (!locationDetails.lat){
      fetch();
    }
   
  }, [params.id, locationDetails]);

  function currentTemp() {
    let f = 1.8 * (
      `${locationDetails.temp}` - 273) + 32;
    return Math.round(f);
  }
  function feelsLike() {
    let f = 1.8 * (
      `${locationDetails.feels_like}` - 273) + 32;
    return Math.round(f);
  }
  function tempmin() {
    let f = 1.8 * (
      `${locationDetails.temp_min}` - 273) + 32;
    return Math.round(f);
  }
  function tempmax() {
    let f = 1.8 * (
      `${locationDetails.temp_max}` - 273) + 32;
    return Math.round(f);
  }

  function date(dt) {
    return new Date(dt * 1000).toUTCString();
  }


  return (
    <div className='location'>
      <p>{locationDetails.city_name}</p>
      <p>{date(locationDetails.date)}</p>
      <p>Current Temperature: {currentTemp()} °F</p>
      <p>Feels Like: {feelsLike()} °F</p>
      <p>Max/min Temp: {tempmax()} °F / {tempmin()} °F</p>
      <p>Humidity: {locationDetails.humidity}%</p>
      <p>Wind Speed: {locationDetails.wind_speed}</p>

    </div>
  );
}