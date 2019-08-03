import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from '../Calendar';
import Clips from '../Clips';
import Events from '../Events';
import Homepage from '../Homepage';
import Merch from '../Merch';
import Navigation from '../Navigation';
import SocialMedia from '../SocialMedia';
import Splash from '../Splash';
import './styles.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='app-socialmedia'>
          <SocialMedia />
        </div>
        <div className='app-splash'>
          <Splash />
        </div>
        <div className='desktop app-events'>
          <Events />
        </div>
        <div className='mobile app-events'>
          <Events />
        </div>
        <div className='app-navigation'>
          <Navigation />
        </div>
        <div className='mobile'>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/merch' component={Merch} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/clips' component={Clips} />
        </div>
      </div>
    </Router>
  );
};

export default App;
