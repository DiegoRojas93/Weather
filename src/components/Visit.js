import React from 'react';

import '../assets/styles/components/Visit.scss';

import singopore from '../assets/images/singopore.jpg';

const Visit = () => (
  <>
    <div className='title'>
      <h2>
        Place to
        <span>Visit</span>
      </h2>
    </div>
    <div className='image'>
      <article className='box__left'>
        <div className='icon'>
          <i className='fas fa-map-marker-alt' />
        </div>
        <div className='text'>
          <span>Arab street</span>
          <span>singapure</span>
        </div>
      </article>
      <img src={singopore} alt='singopore' />
    </div>
  </>
);

export default Visit;
