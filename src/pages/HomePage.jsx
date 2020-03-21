import React from 'react';
import About from '../components/About';
import Products from '../components/Products'
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage">
      <video src="/medias/video_drone4.mp4" autoPlay loop className="vid" />
      <About />
      <Products />
    </div>
  )
};

export default HomePage;
