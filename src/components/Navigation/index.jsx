import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navigation() {
  return (
    <div className='navigation-container green-background'>
      <Link to='/merchandise'>
        <div className='navigation-button purple'>
          MERCH
        </div>
      </Link>
      <Link to='/calendar'>
        <div className='navigation-button purple'>
          CALENDAR
        </div>
      </Link>
      <Link to='/clips'>
        <div className='navigation-button purple'>
          CLIPS
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
