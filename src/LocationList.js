import React from 'react';
import Location from './Location';
import FavoriteItem from './FavoriteItem';
import { useLocation } from 'react-router-dom';
import './App.css';

export default function LocationList({ locations, fetchAndRefresh, userCoords }) {
  const path = useLocation();

  // nice way to interrogate the path for a conditional render. i do wonder if there's a way to do this just with <Route  /> components, but this looks nice and readable to me
  if (path.pathname.includes('search')) {

    const clearLocations = locations.filter(({weather: [main]}) => main === 'Clear');

    return (
      <div className='locations'>
        {
          clearLocations.length
            ? clearLocations.map((location, i) => <Location key={`${location}-${i}`} location={location} userCoords={userCoords} />)
            : <p className='shorten'>It does not look like any locations within 200 km of you are sunny at the moment. May we recommmend <a href="https://nymag.com/strategist/article/best-sad-lamps.html" target="_blank" rel="noreferrer">An At-Home Sunshine Device</a>.
            </p>
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
