import React from 'react';
import '../assets/styles/components/Info.scss';

import Forecasts from './Forecasts';
import LocationInformation from './Location';
import Visit from './Visit';
import Other from './Other';

const Info = () => (
  <article className='info'>
    <div className='info__forecast info__items'>
      <Forecasts />
    </div>
    <div className='info__locations info__items'>
      <LocationInformation />
    </div>
    <div className='info__visit info__items'>
      <Visit />
    </div>
    <div className='info__others info__items'>
      <Other />
    </div>
  </article>
);

export default Info;
