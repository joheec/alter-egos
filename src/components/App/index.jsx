import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Events from '../Events';
import SocialMedia from '../SocialMedia';
import Splash from '../Splash';
import './styles.css';


import Calendar from '../Calendar';
import Clips from '../Clips';
import Homepage from '../Homepage';
import Merchandise from '../Merchandise';
import Navigation from '../Navigation';

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
      </div>
    </Router>
  );
};

export default App;
