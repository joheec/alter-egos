import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Homepage from '../Homepage';
import './index.css';

function App() {
  return (
    <div className='page grey-background'>
      <Header />
      <Router>
        <div>
          <Route exact path='/' component={Homepage} />
        </div>
      </Router>
    </div>
  );
};

export default App;
