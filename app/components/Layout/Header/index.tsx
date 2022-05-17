import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Hamburger from 'assets/hamburger.svg';
import { HeaderWrapper, MainLogoContainer, InnerContainer } from './style';
import NavMenu from '../NavMenu';
import CloseLogo from 'assets/logo/close.svg';

const wrappingNavData = [
  // {
  //   id: 1,
  //   element: <Link href={'/news'}>뉴스룸</Link>,
  // },
  // {
  //   id: 2,
  //   element: <Link href={'/services'}>서비스</Link>,
  // },
  {
    id: 3,
    element: (
      <a
        href="https://www.notion.so/5b898f34e1b145c9bac93070f2806eaf?v=863e6923166f4661a340e3bdc12eb6aa"
        target={'_blank'}
        rel="noreferrer">
        팀원 소개
      </a>
    ),
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

  const handleClose = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenMenu]);

  return (
    <>
      <HeaderWrapper>
        <InnerContainer>
          <MainLogoContainer>
            <h2>
              <Link href={'/'}>Modern Agile</Link>
            </h2>
          </MainLogoContainer>

          {!isOpenMenu ? (
            <Hamburger className="hamburger" onClick={handleOpenMenu} />
          ) : (
            <CloseLogo className="close" onClick={handleClose} />
          )}

          <ul>
            {wrappingNavData.map((item) => (
              <li key={item.id}>{item.element}</li>
            ))}
          </ul>
        </InnerContainer>
      </HeaderWrapper>

      {isOpenMenu && <NavMenu list={wrappingNavData} onClose={handleClose} />}
    </>
  );
};

export default Header;
