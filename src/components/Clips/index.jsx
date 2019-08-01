import React from 'react';
import IssIcon from '../../assets/iss-corner.png';
import RegularmanIcon from '../../assets/regularman.png';
import './index.css';

function Clips() {
  return (
    <div className='clips-container'>
      <h1>Check Out Moments from Our Bouts!</h1>
      <div className='photo-credit'>
        Photography Credit:
        <a
          href='https://www.regularmanphotography.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='purple'
        > Regularman Photography</a>
      </div>
      <div className='clips-event-container'>
        <h2>June 29th, 2019: Alter Egos vs Storm City</h2>
        <div className='clips-links-container'>
          <a
            href='https://www.regularmanphotography.com/RollerDerby/2019/20119-06-29-Storm-City-v-Alter-Egos'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              alt='Regularman Photography'
              src={RegularmanIcon}
              className='clip-img'
            />
            Photos
          </a>
          <a
            href='https://www.youtube.com/playlist?list=PLoMcY-NcwMAuSF2h-kVVRe97hsWnYQgY4'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              alt={'Is\'s Corner'}
              src={IssIcon}
              className='clip-img'
            />
            Is's Announcer Corner!
          </a>
        </div>
      </div>
      <div className='clips-event-container'>
        <h2>April 12th, 2019: Alter Egos vs Gorge</h2>
        <a
          href='https://www.regularmanphotography.com/RollerDerby/2019/2019-04-12-Gorge-v-Alter-Egos'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            alt='Regularman Photography'
            src={RegularmanIcon}
            className='clip-img'
          />
          Photos
        </a>
      </div>
      <div className='clips-event-container'>
        <h2>March 30th, 2019: Alter Egos vs Rainy City</h2>
        <a
          href='https://www.regularmanphotography.com/RollerDerby/2019/2019-03-30-Rainy-City-v-Alter-Egos'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            alt='Regularman Photography'
            src={RegularmanIcon}
            className='clip-img'
          />
          Photos
        </a>
      </div>
    </div>
  );
}

export default Clips;
