import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <div className='spinner'>
      <img src={spinner} style={{ width: '300px' }} />
    </div>
  );
}