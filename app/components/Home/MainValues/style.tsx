import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainValuesWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 40px 50px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 20px 25px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;

    section + section {
      margin-top: 20px;
    }
  }
`;

export const ImageContainer = styled.section`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 0 40px;
  flex: 1;
  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const ContentsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1.5;
  opacity: 0;

  div + div {
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  padding: 20px;
  color: ${({ theme }) => theme.colors.main};
  border-radius: 6px;
  margin-bottom: 50px;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    font-size: 1.5rem;
    padding: 10px;
  }

  @media ${({ theme }) => theme.media.mobile1} {
    font-size: 1.3rem;
    padding: 10px;
  }
`;
