import React, { useState } from 'react';
import LocationList from './LocationList';
import { buildCoordsByDistance } from './services/coordinate-utils';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('97215');
  const [userCoords, setUserCoords] = useState({});
  const [results, setResults] = useState([]);
  const [locations, setLocations] = useState([]);
  const [coordsN, setCoordsN] = useState({ lat: 37.773972, long: -122.431297 });

  async function handleSubmit(e) {
    e.preventDefault();
    // take user location convert it to coords
    // using our geocoding api and store it in state
    const response = await fetch(`/.netlify/functions/geocoding-endpoint?zip=${userZip}`);
    const json = await response.json();


    const coordNResponse = await fetch(`/.netlify/functions/current-weather-endpoint?lat=${coordsN.lat}&long=${coordsN.long}`);
    const coordJson = await coordNResponse.json();

    //setResults.push(coordJson);
    
    // using the user coords in state go find 8 location coords within 55miles
    
    //store locations in an array

    //pass location array as a prop to LocationList
  }
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
        <LocationList results={results}/>
      </div>
    </>
  );
}
