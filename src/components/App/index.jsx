import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from '../Calendar';
import Clips from '../Clips';
import Homepage from '../Homepage';
import Merchandise from '../Merchandise';
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
      </div>
    </Router>
  );
};

export default App;
