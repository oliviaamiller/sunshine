import React from 'react';

export default function FavoriteItem({ location }) {
  return (
    <div className='location'>
      <p>{location.city_name}</p>
      <p>{location.lat}, {location.long}</p>
      {/* <p>{location.weather[0].main && 'Sunny'}</p> */}
      {/* <p>{temp()} °F</p>
      <p>{`${Math.round(distanceFromUser)} km from you`}</p> */}
    </div>
  );
}
