import React, { Component } from 'react';
import '../assets/styles/components/Forecasts.scss';

class Forecasts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      climates: [],
      days: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    };
  };

  componentDidMount() {

    const CORS = 'https://cors-anywhere.herokuapp.com';

    const API = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/?id=3688685&cnt=3&units=metric&lang=es&appid=52978de41634d1b3bf8b7651bbf071b3';

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (e) => {

      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {

        const data = JSON.parse(xhr.responseText);

        this.setState({ climates: data.list });

      } else {
        console.log('error');
      }
    });

    xhr.open('GET', `${CORS}/${API}`);

    xhr.send();

  };

  obtenerDia(info) {
    const { days } = this.state;

    const date = new Date(info);
    const day = date.getDay();

    return days[day];
  };

  render() {

    const { climates } = this.state;

    const BOXS = climates.map((climate, index) => {
      return (
        <article className='box' key={index}>
          <div className='box__day'>
            <div className='box__day-information'>
              <div className='image'>
                <img src={`http://openweathermap.org/img/wn/${climate.weather[0].icon}@2x.png`} alt='icon' />
              </div>
              <div className='day'>
                <div className='title'><h3>{this.obtenerDia(climate.dt_txt)}</h3></div>
                <p>{climate.weather[0].description}</p>
              </div>
            </div>
          </div>
          <div className={index === 0 ? 'box__average-temperature box__differentiator' : 'box__average-temperature'}>
            <h1>{`${Math.round(climate.main.temp_max)}° / ${Math.round(climate.main.temp_min)}°`}</h1>
          </div>
        </article>
      );
    });

    return (
      <>
        <div className='title'>
          <h2>
            3 Days
            <span>Forecast</span>
          </h2>
        </div>
        <div className='info__forecast-container'>
          {BOXS}
        </div>
      </>
    );
  }
}

export default Forecasts;
