import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainEmploymentWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 9px;
  padding: 30px;
  box-shadow: 1px 1px 10px #bdbdbd;

  & > a {
    display: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;

    & > a {
      display: block;
    }

    article + article {
      margin: 30px 0;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 25px;
  }
`;

export const ContentsContainer = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    color: #e4e4e4;
    font-size: 0.8rem;
  }

  div + div {
    margin-top: 20px;
  }

  &:first-child {
    padding: 0 40px 0 0;
  }

  @media ${({ theme }) => theme.media.desktop} {
    &:first-child {
      padding: 0 30px 0 0;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    &:first-child {
      padding: 0;
    }

    h2 {
      font-size: 1.75rem;
    }

    & > a {
      display: none;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.15rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;
