import React from 'react';

export default function AboutCard({ person }) {
  return (
    <div className={`about-card ${person.firstName}`}>
      <p>{person.firstName} {person.lastName}</p>
      <p>{person.bio}</p>
      <p>{person.favoriteSpot}</p>
      <p>{person.image}</p>
    </div>
  );
}
