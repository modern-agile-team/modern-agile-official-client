import Accordion from 'components/Accordion';
import React from 'react';
import { InnerContainer, MainFAQWrapper } from './style';

const MainFAQ = () => {
  const mainFAQData = [
    {
      id: 1,
      title: 'Q. 지원 기간이 언제인가요?',
      content:
        'A. 하반기는 전년도 11월부터 지원받고 12월부터 8월까지 9개월간 활동합니다. 상반기는 해당년도 5월부터 지원받고 6월부터 2월까지 9개월간 활동합니다.',
    },
    {
      id: 2,
      title: 'Q. 멘토링 기간은 얼마인가요?',
      content:
        'A. 3개월 동안 선배기수에게 멘토링을 받게되며, 선배기수 수료 이후에도 역대 수료한 선배님들께 얼마든지 도움을 요청할 수 있는 시스템이 마련되어 있습니다.',
    },
    {
      id: 3,
      title: 'Q. 회비는 얼마이며, 어떻게 관리되나요?',
      content:
        'A. 회비는 월 별 1만 5천원입니다. 선배 기수는 관여하지 않으며, 각 기수별 선발된 회장이 집중적으로 관리합니다.카카오 오픈 통장을 활용하여 내역이 투명하게 공개됩니다.',
    },
    {
      id: 4,
      title: 'Q. 애자일이 무엇인가요?',
      content:
        'A. 애자일은 날렵한, 민첩한이라는 사전적 의미를 가졌으며, 소프트웨어 개발론에서 애자일은 짧은 주기의 개발 단위를 반복해 하나의 큰 프로젝트를 완성해 나가는 방식입니다. 애자일의 핵심은 협력과 피드백이고 일을 진행할 때 유연하고 변화에 빠르게 대응하는 것이 핵심입니다.',
    },
  ];
  return (
    <MainFAQWrapper>
      <InnerContainer>
        <h1>자주 묻는 질문</h1>
        {mainFAQData.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </InnerContainer>
    </MainFAQWrapper>
  );
};

export default MainFAQ;
