import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

export default function Location({ location }) {
  console.log(location);

  return (
    <div className='location'>
      <p>{location.name}</p>
    </div>
  );
}
