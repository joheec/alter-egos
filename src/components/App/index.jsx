import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SocialMedia from '../SocialMedia';
import PublicApp from '../PublicApp';
import MemberApp from '../MemberApp';
import  { ViewContext, views } from '../../view-context';
import './styles.css';

import { Auth0Provider } from '../../auth0-wrapper';
import config from '../../auth_config.json';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

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
            <Auth0Provider
              domain={config.domain}
              client_id={config.clientId}
              redirect_uri={window.location.origin}
              onRedirectCallback={onRedirectCallback}
            >
              <div className='app-socialmedia'>
                <SocialMedia />
              </div>
              <Switch>
                <Route path='/member' component={MemberApp} />
                <PublicApp contentRef={this.contentRef} />
              </Switch>
            </Auth0Provider>
          </div>
        </ViewContext.Provider>
      </Router>
    );
  }
};

export default App;
