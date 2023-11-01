import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainActivityWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 0px;
  }
`;

export const TitleContainer = styled(DefaultInnerContainer)`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  opacity: 0;

  & + & {
    margin-top: 20px;
  }

  &:nth-child(2n - 1) {
    flex-direction: row-reverse;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;

    section + section {
      margin-top: 20px;
    }

    &:nth-child(2n - 1) {
      flex-direction: column;
    }
  }
`;

export const ContentsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main};

  img {
    width: 350px;
    height: 350px;
  }

  p {
    line-height: 1.3;
    padding: 0 20px;
    font-size: 1.35rem;
    font-weight: bold;
    text-align: left;
    margin: auto 0;
  }

  span {
    color: #996b41;
  }

  @media ${({ theme }) => theme.media.tablet} {
    p {
      font-size: 1.25rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    img {
      width: 250px;
      height: 250px;
    }
    p {
      padding: 0;
      font-size: 1rem;
    }
  }
`;
