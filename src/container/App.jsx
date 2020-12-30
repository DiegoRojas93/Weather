import React, { Component } from 'react';

import '../assets/styles/App.scss';
import banner from '../assets/images/banner__image.jpg';

import Info from '../components/Info';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      BogotaWeather: {},
      ParisWeather: {},
      isFetch: false,
    };
  };

  componentDidMount() {

    const URL = 'api.openweathermap.org/data/2.5/group?id=3688685,6269531&units=metric&lang=es&appid=35810155ee96c6e88a98b4d0f6c47ee7';
    const CORS = 'https://cors-anywhere.herokuapp.com';

    fetch(`${CORS}/${URL}`)
      .then((response) => response.json())
      .then((data) => this.setState({ BogotaWeather: data.list[0], ParisWeather: data.list[1], isFetch: true }));
  }

  render() {
    const { isFetch, BogotaWeather, ParisWeather } = this.state;

    return (
      <section className='container'>
        { isFetch === true ?
          (
            <>
              <article className='banner'>
                <img src={banner} alt='banner' />
              </article>

              <Info Bogota={BogotaWeather} Paris={ParisWeather} />

              <section className='main__information'>
                <article className='main__information-icon'>

                  <img src={`http://openweathermap.org/img/wn/${BogotaWeather.weather[0].icon}@2x.png`} alt='icon' />
                </article>
                <article className='main__information-temperature'>
                  <h1>{`${BogotaWeather.main.temp} C°`}</h1>
                </article>
              </section>
            </>
          ) :
          (
            <h1>Loading ...</h1>
          )
        }
      </section>
    );
  }
};

export default App;
