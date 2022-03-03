import React from 'react';
import './App.css';
import { addToFavorites, getFavorites } from './services/fetch-utils';

export default function Location({ location }) {
  // const favorite = isFavorite(location.id);
  // console.log(favorite);
  async function handleClick() {
    
    const favoriteObj = {
      city_name: location.name,
      lat: location.coord.lat,
      long: location.coord.lon,
      city_id: location.id
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
    </div>
          
        

      
    
  );
}
