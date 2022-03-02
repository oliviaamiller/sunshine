import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import { buildCoordsByDistance } from './services/coordinate-utils';
import { getFavorites } from './services/fetch-utils';
import { getLatLong, getWeather } from './services/api-utils';


export default function SearchPage() {
  const [userZip, setUserZip] = useState('97215');
  const [userCoords, setUserCoords] = useState({});

  const [distanceInkm, setDistanceInkm] = useState(200);
  const [forecasts, setForecasts] = useState([]);
  const [locations, setLocations] = useState([]);

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

  async function fetchAndRefresh() {
    const favoriteList = await getFavorites();
    setLocations(favoriteList);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []); 

  // function isFavorite(id) {
  //   const match = forecasts.find(item => Number(item.id) === Number(id));
  //   return Boolean(match);
  // }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder='Current Location' value={userZip} onChange={e => setUserZip(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div>
        <h3>Search Results</h3>
        <LocationList locations={forecasts} />
      </div>
    </>
  );
}
