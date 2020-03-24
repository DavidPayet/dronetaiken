import React from 'react';
import About from '../components/About';
import Shop from '../components/Shop';
import BackToTopBtn from '../components/BackToTopBtn';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage" id="up-page">
      <div className="vidUp">
      <video autoPlay loop src="https://res.cloudinary.com/dq39faoo1/video/upload/v1585004145/Pexels_Videos_1409899_ua2ofj.mp4" alt="Drone Video" className="vid1" />
      </div>
      <About />
      
      <div className="vidCenter">
      <video autoPlay loop src="https://res.cloudinary.com/dq39faoo1/video/upload/v1585003863/video_drone_yt7ppf.mp4" alt="Drone Video" className="vid2" />
      </div>
      <Shop />
      <BackToTopBtn />
    </div>
  )
};

export default HomePage;
