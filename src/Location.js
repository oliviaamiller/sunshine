import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

export default function Location({ location }) {
 

  return (
    <div className='location'>
      <p>weather: {location.temp.min}</p>
    </div>
  );
}
