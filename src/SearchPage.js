import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import { buildCoordsByDistance } from './services/coordinate-utils';
import { getLatLong, getWeather } from './services/api-utils';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('');

  const [userCoords, setUserCoords] = useState({});

  const [distanceInkm, setDistanceInkm] = useState(200);
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    async function fetch() {
      const latLongArray = buildCoordsByDistance(userCoords.lat, userCoords.long, distanceInkm);
      const promises = latLongArray.map((latLong) => getWeather(latLong.lat, latLong.long));
      const weatherArray = await Promise.all(promises);
      setForecasts(weatherArray);
    }

    if (userCoords.lat) {
      fetch();
    }

  }, [userCoords, distanceInkm]);

  async function handleSubmit(e) {
    e.preventDefault();
    const latLong = await getLatLong(userZip);
    setUserCoords(latLong);
  }

  return (
    <>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input placeholder='Your Zipcode' value={userZip} onChange={e => setUserZip(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='results'>
        <LocationList locations={forecasts} userCoords={userCoords} />
      </div>
    </>
  );
}
