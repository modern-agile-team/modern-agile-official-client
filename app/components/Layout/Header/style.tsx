import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
  position: fixed;
  top: 0;
  border-bottom: 1px solid #3b3b3b;
  z-index: 20;

  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 35px;
    }
  }

  li {
    font-size: 1rem;
    font-weight: bold;
  }

  a {
    color: #fff;

    &:hover {
      color: #d1d1d1;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
    border: none;
    font-size: 1.5rem;
    display: none;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    display: none;

    &.close {
      width: 18px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    ul {
      display: none;
    }
    svg {
      display: block;
    }
    button {
      display: block;
    }
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0 30px;
`;

export const MainLogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;
