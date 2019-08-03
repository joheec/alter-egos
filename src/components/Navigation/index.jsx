import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navigation() {
  return (
    <div className='navigation-container'>
      <Link to='/merch'>
        <div className='navigation-button'>
          MERCH
        </div>
      </Link>
      <Link to='/calendar'>
        <div className='navigation-button'>
          CALENDAR
        </div>
      </Link>
      <Link to='/clips'>
        <div className='navigation-button'>
          CLIPS
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
