import React from 'react';
import Popup from '../Popup';
import Photo1 from './2019-07-09-001.jpg';
import Photo2 from './2019-07-09-002.jpg';
import Photo3 from './2019-06-30.jpg';
import './styles.css';

const Photos = () => {
  return (
    <div className='photos-container'>
      <div className='photos-album'>
        <img src={Photo1} alt='July 2019 Team' />
        <img src={Photo2} alt='July 2019 Team' />
        <img src={Photo3} alt='June 2019 Team' />
      </div>
      <div className='photos-credit'>
        Photography Credit:
        <a
          href='https://www.regularmanphotography.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='purple'
        > Regularman Photography</a>
      </div>
    </div>
  );
};

export default Popup(Photos, '/photos');
