import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

export default function Location({ location }) {
  console.log(location);
 
  return (
    <> 
      {
        location.weather[0].main === 'Clear' &&
        <div className='location'>
          <p>{location.name}</p>
          <p>{location.weather[0].main}</p>
        </div>
        

      
      }
     
    </>
  );
}
