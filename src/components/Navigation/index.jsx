import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navigation() {
  return (
    <div className='navigation-container green-background'>
      <Link to='/'>
        <div className='navigation-button white'>
          HOME
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
