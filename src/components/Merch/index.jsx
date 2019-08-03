import React from 'react';
import Tshirt1 from './inventory/tshirt-001.jpeg';
import './styles.css';

function Merch() {
  return (
    <div className='merch-container'>
      <h2 className='merch-title'>Available for Purchase at Practices, Scrimmages, and Bouts</h2>
      <div className='merch-items'>
        <div className='merch-item'>
          <a
            href='https://www.bonfire.com/alteregos/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='merch-item-image'>
              <img src={Tshirt1} alt='t-shirt' />
            </div>
            <div className='merch-item-price'>
              $21.99
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Merch;
