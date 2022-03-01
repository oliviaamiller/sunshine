import React, { useState } from 'react';
import LocationList from './LocationList';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('97215');
  const [userCoords, setUserCoords] = useState({});
  const [results, setResults] = useState([]);
  const [locations, setLocations] = useState([]);

  

  const fakeData = [
    { lat: 37.773972, long: -122.431297 }, 
    { lat: 42.331944, long: -122.861944 }, 
    { lat:47.608013, long: -122.335167 }, 
    { lat: 51.50853, long: -0.12574 }
  ];


  async function handleSubmit(e) {
    e.preventDefault();
    // take user location convert it to coords
    // using our geocoding api and store it in state
    const response = await fetch(`/.netlify/functions/geocoding-endpoint?zip=${userZip}`);
    const json = await response.json();

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
        <LocationList locations={fakeData}/>
      </div>
    </>
  );
}
