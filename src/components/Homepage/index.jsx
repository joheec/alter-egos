import React from 'react';
import Photo1 from '../../assets/2019-07-09-001.jpg';
import Photo2 from '../../assets/2019-07-09-002.jpg';
import Photo3 from '../../assets/2019-06-30.jpg';
import './index.css';

const Homepage = () => {
  return (
    <div className='homepage-container'>
      <div className='homepage-event-container'>
        <a
          href='https://www.facebook.com/events/349932092610228'
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='homepage-event green-background'>
            <b>SCRIMMAGE</b><br />AE vs Air Raid vs Tillamook<br />Aug 18, 2019 @ 10:30AM
          </div>
        </a>
      </div>
      <div className='homepage-photos-container'>
        <img src={Photo1} alt='July 2019 Team Photo1' />
        <img src={Photo2} alt='July 2019 Team Photo2' />
        <img src={Photo3} alt='June 2019 Team Photo' />
      </div>
      <div className='photo-credit'>
        Photography Credit:
        <a
          href='https://www.facebook.com/Regularman-Photography-424506950971470'
          target='_blank'
          rel='noreferrer noopener'
          className='purple'
        > Regularman Photography</a>
      </div>
    </div>
  );
};

export default Homepage;
