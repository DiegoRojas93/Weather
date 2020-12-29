import React from 'react';

import '../assets/styles/App.scss';
import cloud from '../assets/images/cloud.png';
import banner from '../assets/images/banner__image.jpg';

import Info from '../components/Info'

const App = () => (
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

export default App;
