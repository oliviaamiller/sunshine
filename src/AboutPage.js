import React from 'react';
import AboutCard from './AboutCard';
import devs from './aboutdata';
export default function AboutPage() {

  return ( 
    <div className='aboutpage'>
      {
        // again, nice work figuring out that this is a use case for mapping :)
        devs.map((person, i) => <AboutCard key={`${person.name} + ${i}`} person={person}/>)
      }
    </div>
  );
}
