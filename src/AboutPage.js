import React from 'react';
import AboutCard from './AboutCard';
import devs from './aboutdata';
export default function AboutPage() {

  return ( 
    <div className='aboutpage'>
      {
        devs.map((person, i) => <AboutCard key={person.name + i} person={person}/>)
      }
    </div>
  );
}
