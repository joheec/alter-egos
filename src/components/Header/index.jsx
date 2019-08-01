import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';
import './index.css';

function Header() {
  return (
    <div className='header-container red-background'>
      <div>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='header-title'>
        <SocialMedia />
        <div className='white header-title-text'>
          ROLLER DERBY
        </div>
        <div className='header-location green'>in Oregon (Hood River/Cascade Locks)</div>
      </div>
    </div>
  );
}

export default Header;
