import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import { getFavorites } from './services/fetch-utils';

export default function FavoritesPage() {
  const [locations, setLocations] = useState([]);

  async function fetchAndRefresh() {
    const favoriteList = await getFavorites();
    setLocations(favoriteList);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []); 

  return (
    <div>
      <h3>My Favorites</h3>
      <LocationList locations={locations} fetchAndRefresh={fetchAndRefresh} />
    </div>
  );
}
