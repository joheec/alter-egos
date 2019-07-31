import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';
import './index.css';

function Header() {
  return (
    <div className='red-background'>
      <div className='header-title'>
        <Logo />
        <div className='header-title-right'>
          <SocialMedia />
          <div className='white header-title-text'>
            ROLLER DERBY
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
