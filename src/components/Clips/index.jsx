import React from 'react';
import './index.css';

function Clips() {
  return (
    <div className='clips-container'>
      <h2>Check Out Moments from Our Bouts!</h2>
      <div className='photo-credit'>
        Photography Credit:
        <a
          href='https://www.regularmanphotography.com/'
          target='_blank'
          rel='noreferrer noopener'
          className='purple'
        > Regularman Photography</a>
      </div>
      <div className='clip-link-container'>
        <a
          href='https://www.regularmanphotography.com/RollerDerby/2019/20119-06-29-Storm-City-v-Alter-Egos'
          target='_blank'
          rel='noreferrer noopener'
        >
          June 29th, 2019: Alter Egos vs Storm City
        </a>
      </div>
      <div className='clip-link-container'>
        <a
          href='https://www.regularmanphotography.com/RollerDerby/2019/2019-04-12-Gorge-v-Alter-Egos'
          target='_blank'
          rel='noreferrer noopener'
        >
          April 12th, 2019: Alter Egos vs Gorge
        </a>
      </div>
      <div className='clip-link-container'>
        <a
          href='https://www.regularmanphotography.com/RollerDerby/2019/2019-03-30-Rainy-City-v-Alter-Egos'
          target='_blank'
          rel='noreferrer noopener'
        >
          March 30th, 2019: Alter Egos vs Rainy City
        </a>
      </div>
    </div>
  );
}

export default Clips;
