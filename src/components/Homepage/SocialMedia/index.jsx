import React from 'react';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
import YouTube from './youtube.png';
import './styles.css';

function SocialMedia(props) {
  return (
    <>
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
    </>
  );
}

export default SocialMedia;
