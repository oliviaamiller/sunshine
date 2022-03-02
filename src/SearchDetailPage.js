import React, { useState, useEffect } from 'react';


export default function SearchDetailPage({ location }) {


  return (
    <div>
      <p>{location.name}</p>
      <p>{location.weather[0].main && 'Sunny'}</p>
    </div>
  );
}
