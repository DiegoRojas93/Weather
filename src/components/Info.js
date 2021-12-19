import React, { Component } from 'react';
import '@styles/components/Info.scss';

import Forecasts from '@components/Forecasts';
import Location from '@components/Location';
import Visit from '@components/Visit';
import Other from '@components/Other';

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
