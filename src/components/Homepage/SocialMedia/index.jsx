import React from 'react';
import Facebook from './assets/facebook.png';
import Instagram from './assets/instagram.png';
import YouTube from './assets/youtube.png';
import './styles.css';

function SocialMedia(props) {
  return (
    <>
      <a
        className="socialmedia-link"
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
        className="socialmedia-link"
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
        className="socialmedia-link"
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
    </>
  );
}

export default SocialMedia;
