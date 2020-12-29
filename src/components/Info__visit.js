import React from 'react';

import '../assets/styles/components/Info__visit.scss';

import singopore from '../assets/images/singopore.jpg';

const Info__visit = () => (
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
          <i className='fas fa-map-marker-alt'></i>
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

export default Info__visit;
