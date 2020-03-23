import React from 'react';
import About from '../components/About';
import Shop from '../components/Shop';
import BackToTopBtn from '../components/BackToTopBtn';
import SliderVideo from '../components/SliderVideo';

const HomePage = () => {
  return (
    <div id="up-page">
      <SliderVideo />
      <About />
      <Shop />
      <BackToTopBtn />
    </div>
  )
};

export default HomePage;
