import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

class Navigation extends React.Component {
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
      </div>
    );
  }
}

export default Navigation;
