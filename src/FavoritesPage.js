import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import { getFavorites, getUser } from './services/fetch-utils';

export default function FavoritesPage() {
  const [locations, setLocations] = useState([]);

  async function fetchAndRefresh() {
    const user = await getUser();
    console.log(user);
    const favoriteList = await getFavorites(user);
    setLocations(favoriteList);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []); 

  return (
    <div className='favorites-page'>
      <LocationList locations={locations} fetchAndRefresh={fetchAndRefresh} />
    </div>
  );
}
