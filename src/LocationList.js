import React from 'react';
import Location from './Location';
import FavoriteItem from './FavoriteItem';
import { useLocation } from 'react-router-dom';
import SearchDetailPage from './SearchDetailPage';
import './App.css';

export default function LocationList({ locations, fetchAndRefresh }) {
  const path = useLocation(); 

  if (path.pathname.includes('search')) {
    
    const clearLocations = locations.filter(location => location.weather[0].main === 'Clear');
    console.log(locations);
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
  
    return (
      locations.map((location, i) => <FavoriteItem key={`${location}-${i}`} location={location} fetchAndRefresh={fetchAndRefresh} />)
    );
  }
  if (path.pathname.includes('searchdetail')) {
    return (
      locations.map((location, i) => <SearchDetailPage key={`${location}-${i}`} location={location} fetchAndRefresh={fetchAndRefresh} />)
    );
  }


}
