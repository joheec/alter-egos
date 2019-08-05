import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from '../Calendar';
import Clips from '../Clips';
import Homepage from '../Homepage';
import Navigation from '../Navigation';
import Merch from '../Merch';
import SocialMedia from '../SocialMedia';
import Splash from '../Splash';
import  { ViewContext, views } from '../../view-context';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.contentRef = React.createRef();
    this.state = { view: views.MOBILE };
  }
  componentDidMount() {
    this.checkView();
    window.addEventListener('resize', this.checkView);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.checkView);
  }
  checkView = () => {
    this.setState({ view:
      window.innerWidth < 415
      ? views.MOBILE
      : views.DESKTOP
    });
  }
  render() {
    return (
      <Router>
        <ViewContext.Provider value={this.state.view}>
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
        </ViewContext.Provider>
      </Router>
    );
  }
};

export default App;
