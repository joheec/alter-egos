import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navigation() {
  return (
    <div className='navigation-container green-background'>
      <Link to='/'>
        <div className='navigation-button grey'>
          HOME
        </div>
      </Link>
      <Link to='/calendar'>
        <div className='navigation-button grey'>
          CALENDAR
        </div>
      </Link>
      <Link to='/clips'>
        <div className='navigation-button grey'>
          CLIPS
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
