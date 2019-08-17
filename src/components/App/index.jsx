import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SocialMedia from '../SocialMedia';
import PublicApp from '../PublicApp';
import MemberApp from '../MemberApp';
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
            <Switch>
              <Route path='/member' component={MemberApp} />
              <PublicApp contentRef={this.contentRef} />
            </Switch>
          </div>
        </ViewContext.Provider>
      </Router>
    );
  }
};

export default App;
