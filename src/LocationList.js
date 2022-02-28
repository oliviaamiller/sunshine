import React from 'react';
import Location from './Location';
import './App.css';

export default function LocationList({ locations }) {
  return (
    <div className='locations'>
      Locations
      {
        locations.map((location, i) => <Location key={`${location}-${i}`} location={location}/>)
      }
    </div>
  );
}
