import React from 'react';
import Slider from 'react-slick';
import { CarouselWrapper } from './style';

interface Props {
  children: React.ReactNode;
  settings: any;
}

const Carousel = ({ settings, children }: Props) => {
  return (
    <CarouselWrapper>
      <Slider {...settings}>{children}</Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
