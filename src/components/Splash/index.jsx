import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Events from '../Events';
import Logo from '../../assets/logo.png';
import { ViewContext, views } from '../../view-context';
import './styles.css';

function Splash() {
  return (
    <ViewContext.Consumer>
    {
      view => (
        <Fragment>
          <div className='splash-container'>
          {
            view === views.MOBILE
              ? (
                <Link to='/'>
                  <img
                    alt="Alter Ego Roller Derby logo"
                    className='splash-logo'
                    src={Logo}
                  />
                </Link>
              )
              : (
                <img
                  alt="Alter Ego Roller Derby logo"
                  className='desktop splash-logo'
                  src={Logo}
                />
              )
          }
            <div className='splash-location'>Oregon (Hood River/Cascade Locks)</div>
          </div>
          <div className='app-events'>
            <Events />
          </div>
        </Fragment>
      )
    }
    </ViewContext.Consumer>
  );
}

export default Splash;
