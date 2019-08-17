import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import auth0Client from '../../Auth';
import Logo from '../../assets/logo.png';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
import YouTube from './youtube.png';
import './styles.css';

function SocialMedia(props) {
  const logout = () => {
    auth0Client.logout();
    props.history.replace('/');
  };

  return (
    <div className='socialmedia-container'>
      <NavLink
        exact
        to='/'
      >
        <img
          className='socialmedia-logo'
          src={Logo}
          alt='Navigate to Homepage'
        />
      </NavLink>
      <div className='socialmedia-icons'>
        <a
          href='https://www.facebook.com/AlterEgosRollerDerby/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='socialmedia-icon'
            src={Facebook}
            alt='Facebook'
          />
        </a>
        <a
          href='https://www.instagram.com/alteregosrollerderby/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='socialmedia-icon'
            src={Instagram}
            alt='Instagram'
          />
        </a>
        <a
          href='https://www.youtube.com/channel/UCrPU80wexCpfgzx6QfGld_w'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            id='youtube'
            className='socialmedia-icon'
            src={YouTube}
            alt='YouTube'
          />
        </a>
        {!auth0Client.isAuthenticated() && (<div className='account' onClick={auth0Client.login}>login</div>)}
        {auth0Client.isAuthenticated() && (<div className='account' onClick={logout}>logout</div>)}
      </div>
    </div>
  );
}

export default withRouter(SocialMedia);
