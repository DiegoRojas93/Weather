import React, { Component } from 'react';

import '../assets/styles/App.scss';
import cloud from '../assets/images/cloud.png';
import banner from '../assets/images/banner__image.jpg';

import Info from '../components/Info';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      isFetch: false,
    };
  };

  componentDidMount() {

    const URL = 'api.openweathermap.org/data/2.5/group?id=3688685,6269531&units=metric&lang=es&appid=35810155ee96c6e88a98b4d0f6c47ee7';
    const CORS = 'https://cors-anywhere.herokuapp.com';

    fetch(`${CORS}/${URL}`)
      .then((response) => response.json())
      .then((data) => this.setState({ weather: data.list, isFetch: true }));
  }

  render() {
    const { isFetch, weather } = this.state;
    if (isFetch === true) {
      console.log('data:', weather);
    };

    return (
      <section className='container'>
        <article className='banner'>
          <img src={banner} alt='banner' />
        </article>

        <Info />

        <section className='main__information'>
          <article className='main__information-icon'>

            <img src={cloud} alt='icon' />
          </article>
          <article className='main__information-temperature'>
            <h1>30 C°</h1>
          </article>
        </section>
      </section>
    );
  }
};

export default App;
