import React from 'react';
import Location from './Location';
import FavoriteItem from './FavoriteItem';
import './App.css';

export default function LocationList({ locations, fetchAndRefresh }) {
  
  return (
    <div className='locations'>
      Locations
      {
        locations.map((location, i) => location.pathname.includes('search')
          ? <Location key={`${location}-${i}`} location={location} />
          : <FavoriteItem key={`${location}-${i}`} location={location} fetchAndRefresh={fetchAndRefresh} />
        )
      }
    </div>
  );
}
