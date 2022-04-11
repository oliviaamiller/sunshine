import React from 'react';

export default function AboutCard({ 
  // some nested destructuring if you're interested
  person: {
    firstName, 
    lastName,
    bio, 
    favoriteSpot,
  } 
}) {
  return (
    <div className={`about-card ${firstName}`}>
      <p>{firstName} {lastName}</p>
      <p>{bio}</p>
      <p>{favoriteSpot}</p>
    </div>
  );
}
