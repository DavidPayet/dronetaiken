import React from 'react';
import ReactPlayer from 'react-player';
import About from '../components/About';
import Shop from '../components/Shop';
import BackToTopBtn from '../components/BackToTopBtn';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage" id="up-page" onClick={window.scrollTo(0, 0)}>
      <ReactPlayer
        playing
        loop
        url={"https://res.cloudinary.com/dq39faoo1/video/upload/v1585004145/Pexels_Videos_1409899_ua2ofj.mp4"}
        alt="Drone Video"
        className="vid1"
        width='100%'
        height='auto'
      />
      <About />
      <ReactPlayer
        playing
        loop
        url={"https://res.cloudinary.com/dq39faoo1/video/upload/v1585003863/video_drone_yt7ppf.mp4"}
        alt="Drone Video"
        className="vid2"
        width='100%'
        height='auto'
      />
      <Shop />
      <BackToTopBtn />
    </div>
  )
};

export default HomePage;
