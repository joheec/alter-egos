import React from 'react';
import './index.css';

const Homepage = () => {
  return (
    <div>
      <div className='homepage-event-container red-background'>
        <div className='homepage-event'>
          SCRIMMAGE<br />AE vs Air Raid vs Tillamook<br />Aug 18, 2019 @ 10:30AM
        </div>
      </div>
      <div className='green-background'>green</div>
      <div className='grey-background'>grey</div>
      <div className='purple-background'>purple</div>
      <div className='red-background'>red</div>
      <div className='white-background'>white</div>
    </div>
  );
};

export default Homepage;
