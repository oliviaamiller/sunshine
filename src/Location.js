import React from 'react';
import './App.css';
import { addToFavorites, getFavorites } from './services/fetch-utils';
import { Link } from 'react-router-dom';
import { calculateDistanceAsCrowFlies } from './services/coordinate-utils';
import SearchDetailPage from './SearchDetailPage';



export default function Location({ location, userCoords }) {
  const distanceFromUser = calculateDistanceAsCrowFlies(userCoords.lat, userCoords.long, location.coord.lat, location.coord.lon);

  async function handleClick() {
    const favoriteObj = {
      city_name: location.name,
      lat: location.coord.lat,
      long: location.coord.lon,
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
    <>
      <Link to={`/searchdetail/${location.id}`}>
        <div title="location" className='location' onClick={handleClick} >
          <p>{location.name}</p>
          <p>{location.weather[0].main && 'Sunny'}</p>
          <p>{temp()} °F</p>
          <p>{`${Math.round(distanceFromUser)} km from you`}</p>
        </div>
      </Link>
      
    </>
  );
}
