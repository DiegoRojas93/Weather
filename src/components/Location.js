import React, { Component } from 'react';

import '@styles/components/Location.scss';

import location from '@images/Location.jpg';

class Location extends Component {

  render() {
    const { Paris } = this.props;

    const list = [1, 2];

    const BOXS = list.map((number) => {
      return (
        <article className='box' id={number.toString === '0' ? 'francia' : ''} key={number.toString()}>
          <div className='data__important'>
            <section className='icon'>
              <img src={`http://openweathermap.org/img/wn/${Paris.weather[0].icon}@2x.png`} alt='icon' />
            </section>
            <section className='general'>
              <article className='title'><h3>{`${Math.round(Paris.main.temp)} C°`}</h3></article>
              <article className='country'>
                <h3>Paris</h3>
                <p>Francia</p>
              </article>
            </section>
          </div>
          <div className='data'>
            <span>{`Humedad: ${Paris.main.humidity}%`}</span>
            <span>{`Viento: ${Paris.wind.speed} m/s`}</span>
            <span>{`Direccion: ${Paris.wind.deg}°`}</span>
          </div>
        </article>
      );
    });

    return (
      <section className='info__locations-container'>

        {BOXS}

        <article className='box'>
          <img src={location} alt='Location' />
        </article>
      </section>
    );
  }
}

export default Location;
