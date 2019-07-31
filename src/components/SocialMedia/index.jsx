import React from 'react';
import {
  facebook,
  instagram,
  youtube,
} from '../../assets/socialMedia';
import './index.css';

function SocialMedia() {
  return (
    <div className='socialmedia-container'>
      <a
        href='https://www.facebook.com/AlterEgosRollerDerby/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          className='socialmedia-icon'
          src={facebook}
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
          src={instagram}
          alt='Instagram'
        />
      </a>
      <a
        href='https://www.youtube.com/channel/UCrPU80wexCpfgzx6QfGld_w'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          className='socialmedia-icon'
          src={youtube}
          alt='YouTube'
        />
      </a>
    </div>
  );
}

export default SocialMedia;
