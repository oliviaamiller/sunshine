import React from 'react';
import Location from './Location';

export default function LocationList({ locations }) {
  return (
    <div>
      Locations
      {/* {
        locations.map((location, i) => <Location key={`${location}-${i}`} location={location}/>)
      } */}
    </div>
  );
}
