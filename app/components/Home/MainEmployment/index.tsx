import React from 'react';
import {
  MainEmploymentWrapper,
  InnerContainer,
  ContentsContainer,
} from './style';
import Box from 'components/Box';
import { mainEmploymentData } from './mainEmploymentData';
import Button from 'components/Button';

const MainEmployment = () => {
  return (
    <MainEmploymentWrapper>
      <InnerContainer>
        <ContentsContainer>
          <h1>
            모던 애자일 수료생들은 현재 주요 IT 서비스 기업에서 활동하고
            있습니다.
          </h1>

          <Button.Link
            href="https://www.notion.so/e2fbcb54728d4ecf9014b246173f8d28"
            target={'_blank'}
            rel="noopener noreferrer">
            자세히 보기
          </Button.Link>
        </ContentsContainer>
        <ContentsContainer>
          {mainEmploymentData.map((item) => (
            <Box.Employment key={item.id} title={item.title} desc={item.desc} />
          ))}
        </ContentsContainer>
        <Button.Link
          href="https://www.notion.so/e2fbcb54728d4ecf9014b246173f8d28"
          target="_blank"
          rel="noreferrer">
          자세히 보기
        </Button.Link>
      </InnerContainer>
    </MainEmploymentWrapper>
  );
};

export default MainEmployment;
