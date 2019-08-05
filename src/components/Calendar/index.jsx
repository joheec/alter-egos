import React from 'react';
import { ViewContext, views } from '../../view-context';
import './styles.css';

function Calendar() {
  return (
    <ViewContext.Consumer>
    {
      view => (
        <div className='calendar-container'>
        {
          view === views.MOBILE
            ? <iframe
                title='Alter Egos Roller Derby calendar'
                src='https://calendar.google.com/calendar/embed?src=alteregosrollerderby%40gmail.com&ctz=America%2FLos_Angeles;showPrint=0&amp;showDate=1&amp;showCalendars=0&amp;showTitle=0&amp;showNav=1&amp;mode=AGENDA'
            ></iframe>
            : <iframe
              title='Alter Egos Roller Derby calendar'
              src='https://calendar.google.com/calendar/embed?src=alteregosrollerderby%40gmail.com&ctz=America%2FLos_Angeles;showPrint=0&amp;showDate=1&amp;showCalendars=0&amp;showTitle=0&amp;showNav=1&amp;mode=MONTH'
            ></iframe>
        }
        </div>
      )
    }
    </ViewContext.Consumer>
  );
}

export default Calendar;
