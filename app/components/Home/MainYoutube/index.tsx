import React from 'react';
import { Title } from '../MainValues/style';
import {
  InnerContainer,
  MainYoutubeWrapper,
  IframeContainer,
  ContentsContainer,
  YoutubeContainer,
  YoutubeItemContainer,
} from './style';
import { techTalkData } from './techTalkData';

const MainYoutube = () => {
  return (
    <MainYoutubeWrapper>
      <InnerContainer>
        <Title>다양한 활동 자료는 모던 애자일 유튜브를 통해 공유됩니다</Title>
        <ContentsContainer>
          <IframeContainer>
            <iframe
              src="https://www.youtube.com/embed/4yK_KyNdMIE"
              title="[모던 애자일팀] Git Flow - 장준영(5기)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </IframeContainer>
          <YoutubeContainer>
            {techTalkData.map((item) => (
              <YoutubeItemContainer key={item.id}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.src} alt="" />
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.presenter}</p>
                  </div>
                </a>
              </YoutubeItemContainer>
            ))}
          </YoutubeContainer>
        </ContentsContainer>
      </InnerContainer>
    </MainYoutubeWrapper>
  );
};

export default MainYoutube;
