import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

class Navigation extends React.Component {
  handleOnClick = event => {
    setTimeout(() => {
      if (this.props.scrollRef.current) {
        this.props.scrollRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 200);
  }

  render() {
    return (
      <div>
        <div className='desktop navigation-container'>
          <NavLink exact activeClassName='active-desktop' to='/'>
            <div
              onClick={this.handleOnClick}
              className='navigation-button'
            >
              HOME
            </div>
          </NavLink>
          <NavLink exact activeClassName='active-desktop' to='/merch'>
            <div
              className='navigation-button'
              onClick={this.handleOnClick}
            >
              MERCH
            </div>
          </NavLink>
          <NavLink exact activeClassName='active-desktop' to='/calendar'>
            <div
              className='navigation-button'
              onClick={this.handleOnClick}
            >
              CALENDAR
            </div>
          </NavLink>
          <NavLink exact activeClassName='active-desktop' to='/clips'>
            <div
              className='navigation-button'
              onClick={this.handleOnClick}
            >
              CLIPS
            </div>
          </NavLink>
        </div>
        <div className='mobile navigation-container'>
          <NavLink className='desktop' exact activeClassName='active-mobile' to='/'>
            <div className='navigation-button'>
              HOME
            </div>
          </NavLink>
          <NavLink exact activeClassName='active-mobile' to='/merch'>
            <div className='navigation-button'>
              MERCH
            </div>
          </NavLink>
          <NavLink exact activeClassName='active-mobile' to='/calendar'>
            <div className='navigation-button'>
              CALENDAR
            </div>
          </NavLink>
          <NavLink exact activeClassName='active-mobile' to='/clips'>
            <div className='navigation-button'>
              CLIPS
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
