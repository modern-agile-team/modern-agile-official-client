import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainValuesWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 50px 0;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  flex-direction: column;

  section {
    margin-top: 50px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    section + section {
      margin-top: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
  margin: 10px 0;
  flex: 1;

  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 200px;
    img {
      width: 260px;
    }
  }
  @media ${({ theme }) => theme.media.mobile2} {
    padding: 0 100px;

    img {
      width: 200px;
    }
  }
  @media ${({ theme }) => theme.media.mobile1} {
    img {
      width: 150px;
    }
  }
`;

export const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  gap: 20px;

  div {
    width: 48%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    div {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main};
  border-radius: 6px;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 1.75rem;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.media.mobile1} {
    font-size: 1.25rem;
  }
`;
