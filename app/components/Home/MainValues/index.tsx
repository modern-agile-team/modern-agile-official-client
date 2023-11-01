import React, { useCallback, useEffect, useRef } from 'react';
import {
  MainValuesWrapper,
  ContentsContainer,
  Title,
  InnerContainer,
} from './style';
import Box from 'components/Box';
import { mainValuesData } from './mainValuesData';

const MainValues = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box1Ref = useRef<HTMLDivElement | null>(null);

  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      if (box1Ref.current) {
        if (window.innerWidth <= 480) {
          box1Ref.current.style.animation = 'none';
          return;
        }
        box1Ref.current.style.animation = 'slideDown 1.2s forwards';
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
    <MainValuesWrapper ref={ref}>
      <InnerContainer>
        <Title>지향하는 방향성을 통해 체계적이고 효율적으로 운영됩니다</Title>
        <ContentsContainer ref={box1Ref}>
          {mainValuesData.map((item) => (
            <Box key={item.id} title={item.title} desc={item.desc} />
          ))}
        </ContentsContainer>
      </InnerContainer>
    </MainValuesWrapper>
  );
};

export default MainValues;
