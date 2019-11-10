import React from 'react';
import Events from './Events';
import Navigation from '../Navigation';
import './styles.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-location">
        Oregon (Hood River/Cascade Locks)
      </div>
      <div className="homepage-navigation">
        <div className="homepage-navigation-buttons">
          <Navigation />
        </div>
      </div>
      <div className="homepage-events">
        <Events />
      </div>
    </div>
  );
}

export default Homepage;
