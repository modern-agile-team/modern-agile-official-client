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
          모던 애자일이 추구하는 <span>가치와 방향성</span>을 공감 하고
          <span> 함께 성장</span>하고 싶은 사람을 찾습니다.
        </p>
        <ButtonContainer>
          <Button.Link
            href="https://ujins.notion.site/SW-5-97bf020acab54c56a405131f2fb2412f"
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
