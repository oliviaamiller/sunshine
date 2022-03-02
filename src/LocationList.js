import React from 'react';
import Location from './Location';
import FavoriteItem from './FavoriteItem';
import { useLocation } from 'react-router-dom';
import './App.css';

export default function LocationList({ locations, fetchAndRefresh }) {
  const Path = useLocation();
  return (
    <div className='locations'>
      Locations
      {
        locations.map((location, i) => Path.pathname.includes('search')
          ? <Location key={`${location}-${i}`} location={location} />
          : <FavoriteItem key={`${location}-${i}`} location={location} fetchAndRefresh={fetchAndRefresh} />
        )
      }
    </div>
  );
}
