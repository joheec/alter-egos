import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../../../Auth';
import noAccess from './no-access.jpg';
import './styles.css';

class MemberApp extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/member');
  }

  render() {
    if (auth0Client.isAuthenticated()) {
      return <div>Member</div>;
    }

    return (
      <Fragment>
        <div className='member-no-access-container'>
          <img src={noAccess} alt='no-access' />
          <div className='message'>Members ONLY! Get out (or log in)!</div>
        </div>
        <div className='member-no-access-footer'></div>
      </Fragment>
    );
  }
}

export default withRouter(MemberApp);
