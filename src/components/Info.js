import React, { Component } from 'react';
import '../assets/styles/components/Info.scss';

import Forecasts from './Forecasts';
import Location from './Location';
import Visit from './Visit';
import Other from './Other';

class Info extends Component {
  render() {
    const { Bogota, Paris } = this.props;

    return (
      <article className='info'>
        <div className='info__forecast info__items'>
          <Forecasts Bogota={Bogota} />
        </div>
        <div className='info__locations info__items'>
          <Location Paris={Paris} />
        </div>
        <div className='info__visit info__items'>
          <Visit />
        </div>
        <div className='info__others info__items'>
          <Other />
        </div>
      </article>
    );
  }
}

export default Info;
