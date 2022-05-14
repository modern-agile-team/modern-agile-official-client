import React, { useCallback, useEffect, useRef } from 'react';
import {
  ImageContainer,
  MainValuesWrapper,
  ContentsContainer,
  Title,
  InnerContainer,
} from './style';
import HumanImage from 'assets/lottie/human-move.gif';
import Box from 'components/Box';
import { mainValuesData } from './MainValuesData';

const MainValues = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);

  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      if (box1Ref.current && box2Ref.current) {
        box1Ref.current.style.animation = 'slideTop 1s 0.3s forwards';
        box2Ref.current.style.animation = 'slideTop 1s 0.7s forwards';
      }
    }
  }, []);

  useEffect(() => {
    const cachedRef = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.3,
    });

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref.current, onIntersect]);

  return (
    <MainValuesWrapper ref={ref}>
      <Title>핵심 가치</Title>
      <InnerContainer>
        <ContentsContainer ref={box1Ref}>
          {mainValuesData.slice(0, 3).map((item) => (
            <Box key={item.id} title={item.title} desc={item.desc} />
          ))}
        </ContentsContainer>
        <ImageContainer>
          <img src={HumanImage} alt="애니메이션" />
        </ImageContainer>
        <ContentsContainer ref={box2Ref}>
          {mainValuesData.slice(3, mainValuesData.length).map((item) => (
            <Box key={item.id} title={item.title} desc={item.desc} />
          ))}
        </ContentsContainer>
      </InnerContainer>
    </MainValuesWrapper>
  );
};

export default MainValues;