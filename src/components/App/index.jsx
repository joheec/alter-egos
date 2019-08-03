import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from '../Calendar';
import Clips from '../Clips';
import Homepage from '../Homepage';
import Merch from '../Merch';
import Navigation from '../Navigation';
import SocialMedia from '../SocialMedia';
import Splash from '../Splash';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.contentRef = React.createRef();
  }

  render() {
    return (
      <Router>
        <div className='app-container'>
          <div className='app-socialmedia'>
            <SocialMedia />
          </div>
          <Splash />
          <div className='app-navigation'>
            <Navigation scrollRef={this.contentRef} />
          </div>
          <div className='app-content' ref={this.contentRef}>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/merch' component={Merch} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/clips' component={Clips} />
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
