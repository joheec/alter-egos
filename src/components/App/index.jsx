import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Public from './Public';
import Member from './Member';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app-container'>
          <Switch>
            <Route path='/member' component={Member} />
            <Public />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
