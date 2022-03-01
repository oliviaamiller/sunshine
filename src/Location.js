import React from 'react';
import './App.css';

export default function Location({ location }) {

  async function handleClick() {
    const response = await fetch(`/.netlify/functions/current-weather-endpoint?lat=${location.lat}&long=${location.long}`);
    const json = await response.json();
    console.log(json);
  }
  return (
    <div className='location'>
      <button onClick={handleClick}></button>
    </div>
  );
}
