import React from 'react';
import Tshirt1 from '../../assets/merchandise-tshirt-001.jpeg';
import './index.css';

function Merchandise() {
  return (
    <div className='merchandise-container'>
      <h2 className='white'>Available for Purchase at Practices, Scrimmages, and Bouts</h2>
      <div className='merchandise-item-container'>
        <a
          href='https://www.bonfire.com/alteregos/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='merchandise-item-image'>
            <img src={Tshirt1} alt='t-shirt' />
          </div>
          <div className='merchandise-item-price'>
            $21.99
          </div>
        </a>
      </div>
    </div>
  );
}

export default Merchandise;
