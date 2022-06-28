import React, { useMemo } from 'react';
import ArrowBottom from 'assets/arrow_bottom.svg';
import Carousel from 'components/Carousel';
import {
  MainBannerWrapper,
  BannerTitleContainer,
  IconContainer,
} from './style';
import { BannerCarouselData } from './bannerCarouselData';

const MainBanner = () => {
  const showCount = useMemo(() => {
    if (window.innerWidth < 768) {
      return 2;
    }
    return 4;
  }, []);

  const CarouselSettings = useMemo(() => {
    return {
      infinite: true,
      slidesToShow: showCount,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: -1,
      cssEase: 'linear',
      arrows: false,
      draggable: false,
    };
  }, [showCount]);

  return (
    <MainBannerWrapper>
      <BannerTitleContainer>
        <h1>MODERN AGILE</h1>
        <p>모던 애자일은 개발자로서 핵심 역량을 기르고</p>
        <p>IT 산업의 미래 인재로 성장합니다.</p>
      </BannerTitleContainer>
      <Carousel settings={CarouselSettings} list={BannerCarouselData} />

      <IconContainer>
        <ArrowBottom />
      </IconContainer>
    </MainBannerWrapper>
  );
};

export default MainBanner;
