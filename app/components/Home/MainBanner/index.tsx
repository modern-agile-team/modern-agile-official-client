import React from 'react';
import Carousel from 'components/Carousel';
import {
  MainBannerWrapper,
  BannerTitleContainer,
  InnerContainer,
  ImageContainer,
} from './style';
import { BannerCarouselData } from './bannerCarouselData';

const MainBanner = () => {
  const CarouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1,
    arrows: false,
    draggable: true,
  };

  return (
    <MainBannerWrapper>
      <InnerContainer>
        <BannerTitleContainer>
          <h1>MODERN AGILE</h1>
          <p>
            모던 애자일은 개발자로서 핵심 역량을 기르고
            <br />
            IT 산업의 미래 인재로 성장합니다.
          </p>
        </BannerTitleContainer>
        <Carousel settings={CarouselSettings}>
          {BannerCarouselData.map((item) => (
            <ImageContainer key={item.id}>
              <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img src={item.src} alt={item.alt} />
              </picture>
            </ImageContainer>
          ))}
        </Carousel>
      </InnerContainer>
    </MainBannerWrapper>
  );
};

export default MainBanner;
