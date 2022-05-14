import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Hamburger from 'assets/hamburger.svg';
import { HeaderWrapper, LogoContainer } from './style';
import NavMenu from '../NavMenu';
import { HeaderInnerContainer } from 'components/InnerContainer/style';

const wrappingNavData = [
  {
    id: 1,
    element: <Link href={'/news'}>뉴스룸</Link>,
  },
  {
    id: 2,
    element: <Link href={'/services'}>서비스</Link>,
  },
  {
    id: 3,
    element: <Link href={'/members'}>팀원 소개</Link>,
  },
  {
    id: 4,
    element: (
      <a
        href="https://www.notion.so/SW-4-5c77fa1ec6a8459581388f4142458d24"
        target={'_blank'}
        rel="noreferrer">
        동아리 모집
      </a>
    ),
  },
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <HeaderInnerContainer>
          <LogoContainer>
            <h2>
              <Link href={'/'}>Modern Agile</Link>
            </h2>
          </LogoContainer>

          <Hamburger onClick={handleOpenMenu} />

          <ul>
            {wrappingNavData.map((item) => (
              <li key={item.id}>{item.element}</li>
            ))}
          </ul>
        </HeaderInnerContainer>
      </HeaderWrapper>

      {isOpenMenu && <NavMenu />}
    </>
  );
};

export default Header;
