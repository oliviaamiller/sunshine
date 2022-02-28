import React from 'react';
import './App.css';

export default function Location({ location }) {
  return (
    <div className='location'>{location.long}</div>
  );
}
