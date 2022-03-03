import React from 'react';
import Location from './Location';
import FavoriteItem from './FavoriteItem';
import { useLocation } from 'react-router-dom';
import './App.css';

export default function LocationList({ locations, fetchAndRefresh, userCoords }) {
  const path = useLocation();

  if (path.pathname.includes('search')) {

    const clearLocations = locations.filter(location => location.weather[0].main === 'Clear');

    return (
      <div className='locations'>
        {
          clearLocations.length
            ? clearLocations.map((location, i) => <Location key={`${location}-${i}`} location={location} userCoords={userCoords} />)
            : <p>its not sunny</p>
        }
      </div>
    );
  }

  if (path.pathname.includes('favorites')) {
    return (
      <div className='locations'>
        {locations.map((location, i) => <FavoriteItem key={`${location}-${i}`} location={location} fetchAndRefresh={fetchAndRefresh} />)}
      </div>
    );
  }

}
