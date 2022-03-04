import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleLocation } from './services/fetch-utils';
import { getFutureWeather } from './services/api-utils';

export default function FavoriteDeatil() {
  const [locationDetails, setLocationDetails] = useState('');
  const [futureForecast, setFutureForecast] = useState([]);
  const params = useParams();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  
  useEffect(() => {
    async function fetchSupabase() {
      const data = await getSingleLocation(params.id);
      setLocationDetails(data);
    }

   
    if (!locationDetails.lat){
      fetchSupabase();
    }
   
  }, [params.id, locationDetails.lat]);

  useEffect(() => {
    async function fetchFuture() {
      const fiveDay = await getFutureWeather(locationDetails.lat, locationDetails.long);
      
      setFutureForecast(fiveDay);
    }
    if (!futureForecast.current && locationDetails.lat){
      fetchFuture();
    }
  }, [futureForecast, locationDetails.lat, locationDetails.long]);


  // function currentTemp() {
  //   let f = 1.8 * (
  //     `${locationDetails.temp}` - 273) + 32;
  //   return Math.round(f);
  // }
  // function feelsLike() {
  //   let f = 1.8 * (
  //     `${locationDetails.feels_like}` - 273) + 32;
  //   return Math.round(f);
  // }
  // function tempmin() {
  //   let f = 1.8 * (
  //     `${locationDetails.temp_min}` - 273) + 32;
  //   return Math.round(f);
  // }
  // function tempmax() {
  //   let f = 1.8 * (
  //     `${locationDetails.temp_max}` - 273) + 32;
  //   return Math.round(f);
  // }

  // function date(dt) {
  //   return new Date(dt * 1000).toUTCString();
  // }

  function newDate(dt) {
    const date = new Date(dt * 1000);
    const month = months[date.getUTCMonth()];
    const day = days[date.getUTCDay()];
    const dayNum = [date.getUTCDate()];
    const year = [date.getUTCFullYear()];


    return `${day} ${month} ${dayNum}, ${year}`;
  }


  if (futureForecast.lat) {
    return (

      <div className='location'>
        <p>{locationDetails.city_name}</p>
        <p>{newDate(1646337600)}</p>
        <p>{futureForecast.daily[0].temp.day} °F</p>
  
      </div>
    );
  } else { return null; }
}