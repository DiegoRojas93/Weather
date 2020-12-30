import React, { Component } from 'react';
import '../assets/styles/components/Forecasts.scss';

class Forecasts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      climates: [],
      isFetch: false,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    };
  };

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast/?id=3688685&cnt=3&units=metric&lang=es&appid=52978de41634d1b3bf8b7651bbf071b3')
      .then((response) => response.json())
      .then((data) => this.setState({ climates: data.list, isFetch: true }));
  };

  obtenerDia(info) {
    const { days } = this.state;

    const date = new Date(info);
    const day = date.getDay();

    console.log(days[day]);

    return days[day];
  };

  render() {

    const { isFetch, climates } = this.state;

    if (isFetch === true) {
      console.log(climates);
    }

    const BOXS = climates.map((climate, index) => {
      return (
        <article className='box' key={index}>
          <div className='box__day'>
            <div className='box__day-information'>
              <div className='image'>
                <img src={`http://openweathermap.org/img/wn/${climate.weather[0].icon}@2x.png`} alt='icon' />
              </div>
              <div className='day'>
                <div className='title'><h2>{this.obtenerDia(climate.dt_txt)}</h2></div>
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
