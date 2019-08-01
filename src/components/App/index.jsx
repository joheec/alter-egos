import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import Homepage from '../Homepage';
import Calendar from '../Calendar';
import Clips from '../Clips';
import './index.css';

function App() {
  return (
    <div className='app-container grey-background'>
      <Header />
      <Router>
        <div className='app-content'>
          <Navigation />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/clips' component={Clips} />
        </div>
      </Router>
    </div>
  );
};

export default App;
