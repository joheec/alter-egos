import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import Homepage from '../Homepage';
import './index.css';

function App() {
  return (
    <div className='page grey-background'>
      <Header />
      <Router>
        <div>
          <Navigation />
          <Route exact path='/' component={Homepage} />
        </div>
      </Router>
    </div>
  );
};

export default App;
