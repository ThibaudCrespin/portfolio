import React from 'react';
import { Link } from 'react-router-dom';
import './tile.css';

export default ({ name, color }) => {
  const style = {
    backgroundColor: 'navy',
    color: 'white'
  };

  return (
    <Link to={`/${name.toLowerCase()}`}>
      <div className='tile'>
        <h1>{name}</h1>
      </div>
    </Link>
  )
};