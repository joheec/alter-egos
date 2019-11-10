import React from 'react';
import './styles.css';

const Events = () => {
  return (
    <a
      className='events-container'
      href='https://www.facebook.com/events/1458067034340378/'
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className='events-details'>
        <div><b>CHECK OUT OUR NEXT SCRIMMAGE</b></div>
        <div>Alter Egos vs Air Raid vs Tillamook</div>
        <div>Nov 14, 2019 @ 8:30PM</div>
      </div>
    </a>
  );
};

export default Events;
