import React from 'react';

import '../assets/styles/components/Info__locations.scss';

import cloud from '../assets/images/cloud.png';
import location from '../assets/images/Location.jpg';

const Info__locations = () => (
  <section className='info__locations-container'>
    <article className='box' id='francia'>
      <div className='data__important'>
        <section className='icon'>
          <img src={cloud} alt='icon' />
        </section>
        <section className='general'>
          <article className='title'><h1>12 C°</h1></article>
          <article className='country'>
            <h3>Paris</h3>
            <p>Francia</p>
          </article>
        </section>
      </div>
      <div className='data'>
        <span>humedad</span>
        <span>viento</span>
        <span>direccion</span>
      </div>

    </article>

    <article className='box'>
      <div className='data__important'>
        <section className='icon'>
          <img src={cloud} alt='icon' />
        </section>
        <section className='general'>
          <article className='title'><h1>12 C°</h1></article>
          <article className='country'>
            <h3>Paris</h3>
            <p>Francia</p>
          </article>
        </section>
      </div>
      <div className='data'>
        <span>humedad</span>
        <span>viento</span>
        <span>direccion</span>
      </div>
    </article>

    <article className='box'>
      <img src={location} alt='Location' />
    </article>
  </section>
);

export default Info__locations;
