import React from 'react';
import About from '../components/About';
import Shop from '../components/Shop';
import BackToTopBtn from '../components/BackToTopBtn';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage" id="up-page">
      <video src="/medias/video_drone4.mp4" autoPlay loop className="vid" />
      <About />
      <Shop />
      <BackToTopBtn />
    </div>
  )
};

export default HomePage;
