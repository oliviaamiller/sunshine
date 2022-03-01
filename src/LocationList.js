import React from 'react';
import Location from './Location';
import './App.css';

export default function LocationList({ results }) {
  return (
    <div className='locations'>
      Locations
      {
        results.map((location, i) => <Location key={`${location}-${i}`} location={location}/>)
      }
    </div>
  );
}
