import React from 'react';
import Location from './Location';
import FavoriteItem from './FavoriteItem';
import { useLocation } from 'react-router-dom';
import './App.css';

export default function LocationList({ locations, fetchAndRefresh }) {
  const path = useLocation();

  if (path.pathname.includes('search')) {
    console.log('This is locations on search page', locations);
    const clearLocations = locations.filter(location => location.weather[0].main === 'Clear');

    return (
      <div className='locations'>
        {
          clearLocations.length
            ? clearLocations.map((location, i) => <Location key={`${location}-${i}`} location={location} />)
            : <p>its not sunny</p>
        }
      </div>
    );
  }

  if (path.pathname.includes('favorites')) {
    console.log('This is locations on favorites page', locations);

    return (
      locations.map((location, i) => <FavoriteItem key={`${location}-${i}`} location={location} fetchAndRefresh={fetchAndRefresh} />)
    );
  }


}
