import React from 'react';
import Logo from './logo.png';
import './styles.css';

function Splash() {
  return (
    <img
      alt="Alter Ego Roller Derby logo"
      className='splash-logo'
      src={Logo}
    />
  );
}

export default Splash;
