import React from 'react';
import './styles.css';

const Events = () => {
  return (
    <a
      className='events-container'
      href='https://www.facebook.com/events/349932092610228'
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className='events-details'>
        <div><b>CHECK OUT OUR NEXT SCRIMMAGE</b></div>
        <div>Alter Egos vs Air Raid vs Tillamook</div>
        <div>Aug 18, 2019 @ 10:30AM</div>
      </div>
    </a>
  );
};

export default Events;
