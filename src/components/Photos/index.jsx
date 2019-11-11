import React from 'react';
import Popup from '../Popup';
import Photo1 from './2019-06-30.jpg';
import Photo2 from './2019-07-09-002.jpg';
import Photo3 from './2019-07-09-001.jpg';
import Photo4 from './2019-09-07.jpg';
import Photo5 from './2019-10-06.jpg';
import './styles.css';

const Credit = ({ link, name }) => (
  <div className='photos-credit'>
    Photography Credit:
    <a
      href={link}
      target='_blank'
      rel='noreferrer noopener'
    >{' ' + name}</a>
  </div>
);

const Photos = () => {
  return (
    <div className='photos-container'>
      <div>October 2019 Team</div>
      <div>Alter Egos vs Cherry City</div>
      <Credit
        link="https://www.facebook.com/FactorKites/"
        name="Factor Kites Photography"
      />
      <img src={Photo5} alt='October 2019 Team' />
      <div>September 2019 Team</div>
      <div>Alter Egos vs Northwest Derby Company</div>
      <Credit
        link="https://www.facebook.com/events/298119950914311/"
        name="Steve Chibluesteve"
      />
      <img src={Photo4} alt='September 2019 Team' />
      <div>July 2019 Team</div>
      <div>Alter Egos vs Walla Walla & Atomic City</div>
      <Credit
        link="https://www.regularmanphotography.com/"
        name="Regularman Photography"
      />
      <img src={Photo3} alt='July 2019 Team' />
      <div>June 2019 Team</div>
      <div>Alter Egos vs Storm City</div>
      <Credit
        link="https://www.regularmanphotography.com/"
        name="Regularman Photography"
      />
      <img src={Photo2} alt='July 2019 Team' />
      <div>June 2019 Team</div>
      <div>Alter Egos vs Storm City</div>
      <Credit
        link="https://www.regularmanphotography.com/"
        name="Regularman Photography"
      />
      <img src={Photo1} alt='June 2019 Team' />
    </div>
  );
};

export default Popup(Photos, '/photos');
