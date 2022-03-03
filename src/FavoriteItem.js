import React from 'react';
import { Link } from 'react-router-dom';

export default function FavoriteItem({ location }) {
  return (
    <Link to={`/favoritedetail/${location.id}`}>
      <div className='location'>
        <p>{location.city_name}</p>
        <p>{location.lat}, {location.long}</p>
      </div>
    </Link>
    
  );
}
