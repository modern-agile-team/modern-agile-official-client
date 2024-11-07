import React, { useCallback, useEffect, useRef } from 'react';
import {
  InnerContainer,
  MainDigitizationWrapper,
  Title,
  DigitBox,
  DigitBoxContainer,
} from './style';

const MainDigitization = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box1 = useRef<HTMLDivElement | null>(null);
  const box2 = useRef<HTMLDivElement | null>(null);
  const box3 = useRef<HTMLDivElement | null>(null);
  const box4 = useRef<HTMLDivElement | null>(null);

  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      if (box1.current && box2.current && box3.current && box4.current) {
        box1.current.style.animation = 'slideTop 1s forwards';
        box2.current.style.animation = 'slideTop 1s 0.2s forwards';
        box3.current.style.animation = 'slideTop 1s 0.4s forwards';
        box4.current.style.animation = 'slideTop 1s 0.6s forwards';
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
    <MainDigitizationWrapper ref={ref}>
      <InnerContainer>
        <Title>
          모던 애자일은 지속적으로 성장하고 있는 IT 개발 전문 동아리 입니다.
        </Title>
        <DigitBoxContainer>
          <DigitBox ref={box1}>
            <h3>활동 기간</h3>
            <p>총 4년</p>
            <span>현재 8기 진행중</span>
          </DigitBox>
          <DigitBox ref={box2}>
            <h3>누적 인원</h3>
            <p>45명+</p>
          </DigitBox>
          <DigitBox ref={box3}>
            <h3>IT 서비스 회사 합격</h3>
            <p>100%</p>
            <span>2024년 11월 1일 기준</span>
          </DigitBox>
          <DigitBox ref={box4}>
            <h3>상용화 서비스</h3>
            <p>7개+</p>
            <span>2024년 11월 1일 기준</span>
          </DigitBox>
        </DigitBoxContainer>
      </InnerContainer>
    </MainDigitizationWrapper>
  );
};

export default MainDigitization;
