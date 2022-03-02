import React from 'react';
import Location from './Location';
import './App.css';

export default function LocationList({ locations }) {
  console.log(locations);
  const clearLocations = locations.filter(location => location.weather[0].main === 'Clear');
  console.log('these are clear', clearLocations);
  return (
    <div className='locations'>
      { 
        clearLocations.length 
          ? clearLocations.map((location, i) =>  
            <Location key={`${location}-${i}`} location={location}/>)
          : <p>its not sunny</p> 
      }
    </div>
  );
}
