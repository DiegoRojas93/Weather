import React from 'react';

import '../assets/styles/components/Other.scss';

import images1 from '../assets/images/1.jpg';
import images2 from '../assets/images/2.jpg';
import images3 from '../assets/images/3.jpg';
import museum from '../assets/images/museum.jpg';
import rosa from '../assets/images/rosa.jpg';

const Other = () => (
  <section className='container__info'>
    <article className='reviews'>
      <p>+ top Reviews</p>
      <section className='users'>
        <div className='figure'><img src={images1} alt='user1' /></div>
        <div className='figure'><img src={images2} alt='user2' /></div>
        <div className='figure'><img src={images3} alt='user3' /></div>
        <div className='figure'><span>G+</span></div>
      </section>
    </article>

    <article className='museum'>
      <article className='box__left'>
        <div className='icon'>
          <i className='fas fa-map-marker-alt' />
        </div>
        <div className='text'>
          <span>Art science</span>
          <span>Museum</span>
        </div>
      </article>
      <img src={museum} alt='museum' />
    </article>

    <article className='images'>
      <article className='box__left'>
        <div className='icon'>
          <i className='fas fa-map-marker-alt' />
        </div>
        <div className='text'>
          <span>Foutain</span>
          <span>of healt</span>
        </div>
      </article>
      <img src={rosa} alt='rosa' />
      <div className='box'><h1>+</h1></div>
    </article>
  </section>
);

export default Other;
