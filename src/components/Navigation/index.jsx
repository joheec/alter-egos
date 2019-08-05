import React from 'react';
import { NavLink } from 'react-router-dom';
import { ViewContext, views } from '../../view-context';
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
      <ViewContext.Consumer>
      {
        view => (
          <div className='navigation-container'>
          {
            view === views.DESKTOP && (
              <NavLink
                exact
                activeClassName='active-desktop'
                to='/'
              >
                <div
                  onClick={this.handleOnClick}
                  className='navigation-button'
                >
                  HOME
                </div>
              </NavLink>
            )
          }
            <NavLink
              exact
              activeClassName={view === views.MOBILE ? 'active-mobile': 'active-desktop'}
              to='/merch'
            >
              <div
                className='navigation-button'
                onClick={this.handleOnClick}
              >
                MERCH
              </div>
            </NavLink>
            <NavLink
              exact
              activeClassName={view === views.MOBILE ? 'active-mobile': 'active-desktop'}
              to='/calendar'
            >
              <div
                className='navigation-button'
                onClick={this.handleOnClick}
              >
                CALENDAR
              </div>
            </NavLink>
            <NavLink
              exact
              activeClassName={view === views.MOBILE ? 'active-mobile': 'active-desktop'}
              to='/clips'
            >
              <div
                className='navigation-button'
                onClick={this.handleOnClick}
              >
                CLIPS
              </div>
            </NavLink>
          </div>
        )
      }
      </ViewContext.Consumer>
    );
  }
}

export default Navigation;
