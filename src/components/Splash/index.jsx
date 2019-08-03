import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Events from '../Events';
import Logo from './logo.png';
import './styles.css';

function Splash() {
  return (
    <Fragment>
      <div className='splash-container'>
        <Link to='/' className='mobile'>
          <img
            alt="Alter Ego Roller Derby logo"
            className='splash-logo'
            src={Logo}
          />
        </Link>
        <img
          alt="Alter Ego Roller Derby logo"
          className='desktop splash-logo'
          src={Logo}
        />
        <div className='splash-location'>Oregon (Hood River/Cascade Locks)</div>
      </div>
      <div className='app-events'>
        <Events />
      </div>
    </Fragment>
  );
}

export default Splash;
