import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../Calendar';
import Clips from '../Clips';
import Homepage from '../Homepage';
import Navigation from '../Navigation';
import Merch from '../Merch';
import Splash from '../Splash';
import { useAuth0 } from '../../auth0-wrapper';
import './styles.css';

function PublicApp({ contentRef }) {
  const { loading } = useAuth0();

  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <Fragment>
      <Splash />
      <div className='app-navigation'>
        <Navigation scrollRef={contentRef} />
      </div>
      <div className='app-content' ref={contentRef}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/merch' component={Merch} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/clips' component={Clips} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default PublicApp;
