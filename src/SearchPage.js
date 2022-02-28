import React from 'react';
import LocationList from './LocationList';

export default function SearchPage() {

  function handleSubmit() {

  }
  return (
    <>
      <div>
        <form>
          <input placeholder='Current Location'/>
          <button>Search</button>
        </form>
      </div>
      <div>
        <h3>Search Results</h3>
        <LocationList />
      </div>
    </>
  );
}
