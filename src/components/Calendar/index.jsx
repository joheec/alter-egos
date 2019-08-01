import React from 'react';
import './index.css';

function Calendar() {
  return (
    <div className='calendar-container'>
      <iframe
        title='Alter Egos Roller Derby calendar'
        src='https://calendar.google.com/calendar/embed?src=alteregosrollerderby%40gmail.com&ctz=America%2FLos_Angeles'
      ></iframe>
    </div>
  );
}

export default Calendar;
