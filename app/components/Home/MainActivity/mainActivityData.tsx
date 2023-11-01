import React from 'react';
import service from 'assets/lottie/service.gif';
import cooperation from 'assets/lottie/cooperation.gif';
import rocket from 'assets/lottie/rocket.gif';

export const mainActivityData = [
  {
    id: 1,
    src: service,
    alt: '서비스',
    contentElement: (
      <p>
        애자일 방법론을 기반으로 <span> 소프트웨어 개발 주기</span>를
        경험합니다.
      </p>
    ),
  },
  {
    id: 2,
    src: cooperation,
    alt: '협업',
    contentElement: (
      <p>
        프론트, 백엔드 개발자 각자 다른 분야와의 협업을 통해
        <span> 커뮤니케이션 능력</span>을 기릅니다.
      </p>
    ),
  },
  {
    id: 3,
    src: rocket,
    alt: '로켓',
    contentElement: (
      <p>
        테크톡, 멘토/멘티 시스템, 동아리 커뮤니티를 기반으로
        <span> 로켓 성장</span> 할 수 있는 기반을 다집니다.
      </p>
    ),
  },
];
