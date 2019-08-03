import React from 'react';
import './styles.css';

function Calendar() {
  return (
    <div className='calendar-container'>
      <iframe
        title='Alter Egos Roller Derby calendar'
        src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=am9oZWUuY2h1bmdAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%239E69AF&amp;color=%23616161&amp;showPrint=0&amp;showDate=1&amp;showCalendars=0&amp;showTitle=0&amp;showNav=1&amp;mode=WEEK'
      ></iframe>
    </div>
  );
}

export default Calendar;
