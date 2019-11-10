import React from 'react';
import auth0Client from '../../../Auth';
import { NavLink, withRouter } from 'react-router-dom';
import './styles.css';

class Navigation extends React.Component {
  logout() {
    auth0Client.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className='navigation-container'>
        <NavLink to='/merch'>
          <div className='navigation-button'>MERCH</div>
        </NavLink>
        <NavLink to='/calendar'>
          <div className='navigation-button'>CALENDAR</div>
        </NavLink>
        <NavLink to='/photos'>
          <div className='navigation-button'>PHOTOS</div>
        </NavLink>
        {!auth0Client.isAuthenticated() && (<div className='navigation-button' onClick={auth0Client.login}>LOGIN</div>)}
        {auth0Client.isAuthenticated() && (<div className='navigation-button' onClick={this.logout}>LOGOUT</div>)}
      </div>
    );
  }
}

export default withRouter(Navigation);
