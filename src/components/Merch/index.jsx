import React from 'react';
import Popup from '../Popup';
import inventory from './assets';
import './styles.css';

function Merch() {
  return (
    <div className='merch-container'>
      <h2 className='merch-title'>Available for Purchase at Practices, Scrimmages, and Bouts</h2>
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
