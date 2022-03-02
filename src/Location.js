import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

export default function Location({ location }) {
  console.log(location);

  function temp() {
    let f = 1.8 * (
      `${location.main.temp}` - 273) + 32;
    return Math.round(f);
  }
 
  return (
   
    <div className='location'>
      <p>{location.name}</p>
      <p>{location.weather[0].main && 'Sunny'}</p>
      <p>{temp()} °F</p>
    </div>
          
        

      
    
  );
}
