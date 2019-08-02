import React, { Fragment } from 'react';
import Logo from './logo.png';
import './styles.css';

function Splash() {
  return (
    <Fragment>
      <img
        alt="Alter Ego Roller Derby logo"
        className='splash-logo'
        src={Logo}
      />
      <div className='splash-location'>Oregon (Hood River/Cascade Locks)</div>
    </Fragment>
  );
}

export default Splash;
