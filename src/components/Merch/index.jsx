import React from 'react';
import Popup from '../Popup';
import inventory from './assets';
import './styles.css';

function Merch() {
  return (
    <div className='merch-container'>
      <h2 className='merch-title'>Available for Purchase at...</h2>
      <div className="merch-sales">
        <div className="merch-sales-row merch-sales-header">
          <div className="merch-sales-date">date</div>
          <div className="merch-sales-event">event</div>
          <div className="merch-sales-location">location</div>
        </div>
        <div className="merch-sales-row">
          <div className="merch-sales-date">Thurs Nov 14, 2019 @ 8:30pm</div>
          <div>
            <a
              href="https://www.facebook.com/events/1458067034340378/"
              target='_blank'
              rel='noreferrer noopener'
            >Alter Egos Scrimmage</a>
          </div>
          <div className="merch-sales-location">
            <a
              href="https://goo.gl/maps/AZbSCNFLxfUT8GHCA"
              target='_blank'
              rel='noreferrer noopener'
            >R A Brown Middle School</a>
          </div>
        </div>
        <div className="merch-sales-row">
          <div className="merch-sales-date">Fri Nov 22, 2019 @ 7am-5pm</div>
          <div className="merch-sales-event">
            <a
              href="https://www.facebook.com/events/466858470599664/"
              target='_blank'
              rel='noreferrer noopener'
            >Holiday Craft Sale</a>
          </div>
          <div className="merch-sales-location">
            <a
              href="https://goo.gl/maps/pzebdGqiMsm9QZJa9"
              target='_blank'
              rel='noreferrer noopener'
            >Legacy Salmon Creek Medical Center</a>
          </div>
        </div>
        <div className="merch-sales-row">
          <div className="merch-sales-date">Sat Dec 7, 2019 @ 9am-4pm</div>
          <div className="merch-sales-event">Wahtonka Holiday Bazaar</div>
          <div className="merch-sales-location">
            <a
              href="https://goo.gl/maps/d1nkge8w34tAKBta8"
              target='_blank'
              rel='noreferrer noopener'
            >Wahtonka Community School</a>
          </div>
        </div>
      </div>
      <div className='merch-items'>
      {
        inventory.map(({ alt, image, link, price }) => (
          <div className='merch-item' key={alt}>
            <a
              href={link}
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className='merch-item-image'>
                <img src={image} alt={alt} />
              </div>
              <div className='merch-item-price'>
                {price}
              </div>
            </a>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Popup(Merch, '/merch');
