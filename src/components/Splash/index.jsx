import React from 'react';
import Logo from './logo.png';
import './styles.css';

function Splash() {
  return (
    <div>
      <img
        alt="Alter Ego Roller Derby logo"
        className='splash-logo'
        src={Logo}
      />
    </div>
  );
}

export default Splash;
