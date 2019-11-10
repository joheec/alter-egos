import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../Calendar';
import Homepage from '../Homepage';
import Merch from '../Merch';
import Photos from '../Photos';

function PublicApp({ contentRef }) {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/merch' component={Merch} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/photos' component={Photos} />
      </Switch>
    </Fragment>
  );
};

export default PublicApp;
