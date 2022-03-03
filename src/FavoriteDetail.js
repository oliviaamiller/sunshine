import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleLocation } from './services/fetch-utils';

export default function SearchDetailPage() {
  const [locationDetails, setLocationDetails] = useState('');
  const params = useParams();
  
  useEffect(() => {
    async function fetch() {
      const data = await getSingleLocation(params.id);
      setLocationDetails(data);
    }
    fetch();
  }, [params.id]);

  function temp1() {
    let f = 1.8 * (
      `${locationDetails.temp}` - 273) + 32;
    return Math.round(f);
  }
  function temp2() {
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
    <div>
      <h3>{locationDetails.city_name}</h3>
      <p>{date(locationDetails.date)}</p>
      <p>Current temperature: {temp1()} °F</p>
      <p>Feels like: {temp2()} °F</p>
      <p>Max/min temps: {tempmax()} °F / {tempmin()} °F</p>
      <p>Humidity: {locationDetails.humidity}%</p>
      <p>Wind Speed: {locationDetails.wind_speed}</p>

    </div>
  );
}
