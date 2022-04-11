import React from 'react';
import './App.css';
import { addToFavorites, getFavorites } from './services/fetch-utils';
import { calculateDistanceAsCrowFlies } from './services/coordinate-utils';



export default function Location({ 
  location: { 
    name,
    coord, 
    id, 
    main: {
      temp,
      temp_max,
      temp_min,
      feels_like,
      humidity
    },
    wind, 
    dt,
  }, 
  userCoords 
}) {
  const distanceFromUser = calculateDistanceAsCrowFlies(userCoords.lat, userCoords.long, coord.lat, coord.lon);

  async function handleClick() {
    const favoriteObj = {
      city_name: name,
      lat: coord.lat,
      long: coord.lon,
      city_id: id,
      wind_speed: wind.speed,
      // when the key and variable name match, you can use this shorthand
      date: dt,
      temp,
      temp_min,
      temp_max,
      feels_like,
      humidity,
    };
    await addToFavorites(favoriteObj);
    await getFavorites(); 
  }
  
  function getTemp() {
    const f = 1.8 * (`${location.main.temp}` - 273) + 32;
    
    return Math.round(f);
  }

  return (

    <div title="location" className='location' onClick={handleClick} >
      <p>{location.name}</p>
      <p>{location.coord.lat}, {location.coord.lon}</p>
      <p>{location.weather[0].main && 'Sunny'}</p>
      <p>{getTemp()} °F</p>
      <p>{`${Math.round(distanceFromUser)} km from you`}</p>
    </div>
  );
}
