import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import Homepage from '../Homepage';
import Merchandise from '../Merchandise';
import Calendar from '../Calendar';
import Clips from '../Clips';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Navigation />
          <div>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/merchandise' component={Merchandise} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/clips' component={Clips} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
