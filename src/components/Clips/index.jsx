import React from 'react';
import Photo from './photo-icon.png';
import Video from './video-icon.png';
import './styles.css';

function Clips() {
  return (
    <div className='clips-container'>
      <div className='clips-title'>Check Out Moments from Our Bouts!</div>
      <div className='photo-credit'>
        Photography Credit:
        <a
          href='https://www.regularmanphotography.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='purple'
        > Regularman Photography</a>
      </div>
      <div className='clips-event'>
        <div className='clips-event-title'>June 29th, 2019:<br />Alter Egos vs Storm City</div>
        <div className='clips-event-links'>
          <a
            href='https://www.regularmanphotography.com/RollerDerby/2019/20119-06-29-Storm-City-v-Alter-Egos'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              alt='Regularman Photography'
              src={Video}
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
              alt={'Bob & Tom\'s Who\'s Who of Derby'}
              src={Photo}
              className='clip-img'
            />
            Bob & Tom's Who's Who of Derby
          </a>
        </div>
      </div>
      <div className='clips-event'>
        <div className='clips-event-title'>April 12th, 2019<br />Alter Egos vs Gorge</div>
        <div className='clips-event-links'>
          <a
            href='https://www.regularmanphotography.com/RollerDerby/2019/2019-04-12-Gorge-v-Alter-Egos'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              alt='Regularman Photography'
              src={Video}
              className='clip-img'
            />
            Photos
          </a>
        </div>
      </div>
      <div className='clips-event'>
        <div className='clips-event-title'>March 30th, 2019<br />Alter Egos vs Rainy City</div>
        <div className='clips-event-links'>
          <a
            href='https://www.regularmanphotography.com/RollerDerby/2019/2019-03-30-Rainy-City-v-Alter-Egos'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              alt='Regularman Photography'
              src={Video}
              className='clip-img'
            />
            Photos
          </a>
        </div>
      </div>
    </div>
  );
}

export default Clips;
