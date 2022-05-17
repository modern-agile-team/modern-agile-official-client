import React from 'react';
import {
  InnerContainer,
  MainApplicationWrapper,
  ButtonContainer,
} from './style';
import logo from 'assets/logo/main-logo.png';
import Button from 'components/Button';

const MainApplication = () => {
  return (
    <MainApplicationWrapper>
      <InnerContainer>
        <img src={logo} alt="모던애자일 로고" />
        <p>
          모던 애자일이 추구하는 <span>가치와 방향성</span>을 <span>공감</span>
          하고 함께 <span>성장</span>하고 싶은 사람을 찾습니다.
        </p>
        <ButtonContainer>
          <Button.Link
            href="https://www.notion.so/SW-4-5c77fa1ec6a8459581388f4142458d24"
            target="_blank"
            rel="noreferrer"
            variant="primary">
            지원 하기
          </Button.Link>
        </ButtonContainer>
      </InnerContainer>
    </MainApplicationWrapper>
  );
};

export default MainApplication;
