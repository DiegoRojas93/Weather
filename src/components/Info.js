import React from 'react';
import '../assets/styles/components/Info.scss';
import Info__forecast from './Info__forecast.js';

const Info = () => (
  <article className='info'>
    <div className='info__forecast info__items'>
      <Info__forecast/>
    </div>
    <div className='info__locations info__items'>
    </div>
    <div className='info__visit info__items'>

    </div>
    <div className='info__others info__items'>

    </div>
  </article>
);

export default Info;
