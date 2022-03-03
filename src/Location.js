import React from 'react';
import './App.css';
import { addToFavorites, getFavorites } from './services/fetch-utils';
import { calculateDistanceAsCrowFlies } from './services/coordinate-utils';



export default function Location({ location, userCoords }) {
  const distanceFromUser = calculateDistanceAsCrowFlies(userCoords.lat, userCoords.long, location.coord.lat, location.coord.lon);

  async function handleClick() {
    const favoriteObj = {
      city_name: location.name,
      lat: location.coord.lat,
      long: location.coord.lon,
      city_id: location.id,
      temp: location.main.temp,
      temp_min: location.main.temp_min,
      temp_max: location.main.temp_max,
      feels_like: location.main.feels_like,
      humidity: location.main.humidity,
      wind_speed: location.wind.speed,
      date: location.dt,
    };
    await addToFavorites(favoriteObj);
    await getFavorites(); 
  }
  
  function temp() {
    let f = 1.8 * (
      `${location.main.temp}` - 273) + 32;
    return Math.round(f);
  }

  return (

    <div title="location" className='location' onClick={handleClick} >
      <p>{location.name}</p>
      <p>{location.coord.lat}, {location.coord.lon}</p>
      <p>{location.weather[0].main && 'Sunny'}</p>
      <p>{temp()} °F</p>
      <p>{`${Math.round(distanceFromUser)} km from you`}</p>
    </div>
  );
}
