import React from 'react';
import './App.css';
import { addToFavorites, getFavorites } from './services/fetch-utils';
import { Link } from 'react-router-dom';
import SearchDetailPage from './SearchDetailPage';



export default function Location({ location }) {
  // const favorite = isFavorite(location.id);
  // console.log(favorite);
  async function handleClick() {
    
    const favoriteObj = {
      city_name: location.name,
      lat: location.coord.lat,
      long: location.coord.lon,
      // city_id: location.id
    };
    await addToFavorites(favoriteObj);
    await getFavorites(); 
    
  }
  

  function temp() {
    let f = 1.8 * (
      `${location.main.temp}` - 273) + 32;
    return Math.round(f);
  }
  // <SearchDetailPage location={location}/>;
  return (
    <>
      <Link to={`/searchdetail/${location.id}`}>
        <div title="location" className='location' onClick={handleClick} >
          <p>{location.name}</p>
          <p>{location.weather[0].main && 'Sunny'}</p>
          <p>{temp()} °F</p>
        </div>
      </Link>
      
    </>
    
    
          
        

      
    
  );
}
