import React, { Component } from 'react';

import '../assets/styles/App.scss';
// import banner from '../assets/images/banner__image.jpg';
import banner from '../assets/images/Banner2.jpg';

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

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (e) => {

      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {

        const data = JSON.parse(xhr.responseText);

        this.setState({ BogotaWeather: data.list[0], ParisWeather: data.list[1], isFetch: true });

      } else {
        console.log('error');
      }
    });

    xhr.open('GET', `${CORS}/${URL}`);

    xhr.send();
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

                  <figure>
                    <img src={`http://openweathermap.org/img/wn/${BogotaWeather.weather[0].icon}@2x.png`} alt='icon' />
                    <figcaption>{`${BogotaWeather.weather[0].description}`}</figcaption>
                  </figure>
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
