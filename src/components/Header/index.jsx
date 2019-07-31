import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import './index.css';

function Header() {
  return (
    <div className='red-background'>
      <div className='header-title'>
        <Logo />
        <div className='white header-title-text'>
          ROLLER DERBY
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
