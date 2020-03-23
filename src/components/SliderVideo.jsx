import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';
import '../styles/SliderVideo.scss';

const items = [
  {
    src: 'https://res.cloudinary.com/dq39faoo1/video/upload/v1584977023/video_drone1_hb5dtm.mp4'
  },
  {
    src: 'https://res.cloudinary.com/dq39faoo1/video/upload/v1584977031/video_drone4_ceekyg.mp4'
  },
  {
    src: 'https://res.cloudinary.com/dq39faoo1/video/upload/v1584976799/video_drone2_mh4d19.mp4'
  }
];

const SliderVideo = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <video autoPlay loop src={item.src} alt={item.altText} className="vid" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
};

Carousel.defaultProps = {
  interval: 12000,
  ride: 'carousel',
  pause: false,
  keyboard: true,
  slide: true,
};

export default SliderVideo;