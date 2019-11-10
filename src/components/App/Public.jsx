import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Calendar from '../Calendar';
import Homepage from '../Homepage';
import Merch from '../Merch';
import Photos from '../Photos';

function PublicApp() {
  return (
    <>
      <Route path='/' exact>
      {
        ({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="splash"
            unmountOnExit
          >
            <Homepage />
          </CSSTransition>
        )
      }
      </Route>
      <Merch />
      <Calendar />
      <Photos />
    </>
  );
};

export default PublicApp;
