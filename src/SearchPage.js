import React, { useState } from 'react';
import LocationList from './LocationList';
import { buildCoordsByDistance } from './services/coordinate-utils';
import data from './data.js';
import { getLatLong } from './services/api-utils';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('97215');
  const [userCoords, setUserCoords] = useState({});
  

  async function handleSubmit(e) {
    e.preventDefault();
    // take user location convert it to coords
    // using our geocoding api and store it in state

    const latLong = await getLatLong(userZip);

    setUserCoords(latLong);
  
    //in useEffect that depends on userCoords changing
    const myArrayOfLatLongs = buildCoordsByDistance(userCoords);

    const promises = myArrayOfLatLongs.map((latLong) => getWeather(latLong));
    
    const weathers = Promise.all(promises);

    
    // const coordNResponse = await fetch(`/.netlify/functions/current-weather-endpoint?lat=${lat}&long=${long}`);
    // const coordJson = await coordNResponse.json();

    
    //setResults.push(coordJson);
    
    // using the user coords in state go find 8 location coords within 55miles
    
    //store locations in an array

    //pass location array as a prop to LocationList
  }
  console.log(userCoords);
  //promise.all  -> a function to use if you want to make more than one call
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder='Current Location' value={userZip} onChange={e => setUserZip(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div>
        <h3>Search Results</h3>
        <LocationList locations={data} />
      </div>
    </>
  );
}
