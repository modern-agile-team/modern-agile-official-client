import React, { useCallback, useRef, useEffect } from 'react';
import { Title } from '../MainValues/style';
import { mainActivityData } from './mainActivityData';
import {
  MainActivityWrapper,
  InnerContainer,
  ContentsContainer,
  TitleContainer,
} from './style';

const MainActivity = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);
  const box3Ref = useRef<HTMLDivElement | null>(null);

  const insertRef = useCallback((idx: number) => {
    if (idx === 0) {
      return box1Ref;
    } else if (idx === 1) {
      return box2Ref;
    } else {
      return box3Ref;
    }
  }, []);
  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      if (box1Ref.current && box2Ref.current && box3Ref.current) {
        box1Ref.current.style.animation = 'slideTop 1s forwards';
        box2Ref.current.style.animation = 'slideTop 1s 0.5s forwards';
        box3Ref.current.style.animation = 'slideTop 1s 1s forwards';
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
  }, [onIntersect]);

  return (
    <MainActivityWrapper ref={ref}>
      <TitleContainer>
        <Title>핵심 역량을 키우기위한 다양한 활동을 합니다</Title>
      </TitleContainer>
      {mainActivityData.map((item, idx) => (
        <InnerContainer key={item.id} ref={insertRef(idx)}>
          <ContentsContainer>
            <img src={item.src} alt={item.alt} />
          </ContentsContainer>
          <ContentsContainer>{item.contentElement}</ContentsContainer>
        </InnerContainer>
      ))}
    </MainActivityWrapper>
  );
};

export default MainActivity;
