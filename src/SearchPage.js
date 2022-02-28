import React, { useState } from 'react';
import LocationList from './LocationList';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('97215');
  const [userCoords, setUserCoords] = useState({});
  const [results, setResults] = useState([]);
  const [locations, setLocations] = useState([]);



  async function handleSubmit(e) {
    e.preventDefault();
    // take user location convert it to coords
    console.log('It works!!');
    // using our geocoding api and store it in state
    const response = await fetch(`/.netlify/functions/geocoding-endpoint?zip=${userZip}`);
    const json = await response.json();
    console.log(json);
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
        <LocationList />
      </div>
    </>
  );
}
