import React, { useState, useEffect } from 'react';
import LocationList from './LocationList';
import { getFavorites, getUser } from './services/fetch-utils';
import Spinner from './Spinner';

export default function FavoritesPage() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAndRefresh() {
    setIsLoading(true);
    const user = await getUser();
    const favoriteList = await getFavorites(user);
    setLocations(favoriteList);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []); 

  return (
    <div className='favorites-page'>
      {isLoading 
        ? <Spinner />
        : <LocationList locations={locations} fetchAndRefresh={fetchAndRefresh} />
      }
    </div>
  );
}
