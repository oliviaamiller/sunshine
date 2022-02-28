import React, { useState } from 'react';
import LocationList from './LocationList';


export default function SearchPage() {
  const [userLocation, setUserLocation] = useState('Salem, Oregon');
  const [userCoords, setUserCoords] = useState({});
  const [results, setResults] = useState([]);
  const [locations, setLocations] = useState([]);



  function handleSubmit(e) {
    e.preventDefault();
    // take user location convert it to coords
    console.log('It works!!');
    // using our geocoding api and store it in state

    // using the user coords in state go find 8 location coords within 55miles
    
    //store locations in an array

    //pass location array as a prop to LocationList
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder='Current Location' value={userLocation} onChange={e => setUserLocation(e.target.value)}/>
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
