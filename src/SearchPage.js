import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import { buildCoordsByDistance } from './services/coordinate-utils';
import data from './data.js';
import { getLatLong, getWeather } from './services/api-utils';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('97215');
  const [userCoords, setUserCoords] = useState({});
  // distance is in meters 321869m = 200mi
  const [distance, setDistance] = useState(321869);
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {

    const latLongArray = buildCoordsByDistance(userCoords.lat, userCoords.long, 321869);

    console.log(userCoords);
    console.log(latLongArray);
    // const promises = latLongArray.map((latLong) => getWeather(latLong.lat, latLong.long)); 
    
    // setForecasts(Promise.all(promises));

    // console.log(forecasts);

  }, [userCoords]);
  

  async function handleSubmit(e) {
    e.preventDefault();
    // take user location convert it to coords
    // using our geocoding api and store it in state

    const latLong = await getLatLong(userZip);

    setUserCoords(latLong);
  
  }
 
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
