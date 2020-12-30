import React, { Component } from 'react';

import '../assets/styles/components/Location.scss';

import location from '../assets/images/Location.jpg';

class Location extends Component {

  render() {
    const { Paris } = this.props;

    return (
      <section className='info__locations-container'>
        <article className='box' id='francia'>
          <div className='data__important'>
            <section className='icon'>
              <img src={`http://openweathermap.org/img/wn/${Paris.weather[0].icon}@2x.png`} alt='icon' />
            </section>
            <section className='general'>
              <article className='title'><h3>{`${Paris.main.temp} C°`}</h3></article>
              <article className='country'>
                <h3>Paris</h3>
                <p>Francia</p>
              </article>
            </section>
          </div>
          <div className='data'>
            <span>{`humedad: ${Paris.main.humidity}`}</span>
            <span>{`viento: ${Paris.wind.speed}`}</span>
            <span>{`direccion: ${Paris.wind.deg}°`}</span>
          </div>

        </article>

        <article className='box'>
          <div className='data__important'>
            <section className='icon'>
              <img src={`http://openweathermap.org/img/wn/${Paris.weather[0].icon}@2x.png`} alt='icon' />
            </section>
            <section className='general'>
              <article className='title'><h3>{`${Paris.main.temp} C°`}</h3></article>
              <article className='country'>
                <h3>Paris</h3>
                <p>Francia</p>
              </article>
            </section>
          </div>
          <div className='data'>
            <span>{`humedad: ${Paris.main.humidity}`}</span>
            <span>{`viento: ${Paris.wind.speed}`}</span>
            <span>{`direccion: ${Paris.wind.deg}°`}</span>
          </div>
        </article>

        <article className='box'>
          <img src={location} alt='Location' />
        </article>
      </section>
    );
  }
}

export default Location;
