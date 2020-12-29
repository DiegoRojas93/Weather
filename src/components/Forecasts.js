import React, { Component } from 'react';
import '../assets/styles/components/Forecasts.scss';
import cloud from '../assets/images/cloud.png';

class Forecasts extends Component {
  render() {

    return (
      <>
        <div className='title'>
          <h2>
            3 Days
            <span>Forecast</span>
          </h2>
        </div>
        <div className='info__forecast-container'>
          <section className='box'>
            <div className='box__day'>
              <div className='box__day-information'>
                <div className='image'>
                  <img src={cloud} alt='icon' />
                </div>
                <div className='day'>
                  <div className='title'><h1>day</h1></div>
                  <p>weather</p>
                </div>
              </div>
            </div>
            <div className='box__average-temperature box__differentiator'>
              <h1>32° / 23°</h1>
            </div>
          </section>

          <article className='box'>
            <div className='box__day'>
              <div className='box__day-information'>
                <div className='image'>
                  <img src={cloud} alt='icon' />
                </div>
                <div className='day'>
                  <div className='title'><h1>day</h1></div>
                  <p>weather</p>
                </div>
              </div>
            </div>
            <div className='box__average-temperature'>
              <h1>32° / 23°</h1>
            </div>
          </article>

          <article className='box'>
            <div className='box__day'>
              <div className='box__day-information'>
                <div className='image'>
                  <img src={cloud} alt='icon' />
                </div>
                <div className='day'>
                  <div className='title'><h1>day</h1></div>
                  <p>weather</p>
                </div>
              </div>
            </div>
            <div className='box__average-temperature'>
              <h1>32° / 23°</h1>
            </div>
          </article>
        </div>
      </>
    );
  }
}

export default Forecasts;
