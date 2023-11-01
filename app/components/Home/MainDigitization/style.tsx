import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainDigitizationWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 150px 40px;
  background-color: ${({ theme }) => theme.colors.main};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 100px 40px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  flex-direction: column;
  width: 1024px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
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

export const DigitBoxContainer = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 30px;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
    gap: 15px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    gap: 10px;
  }
`;

export const DigitBox = styled.div`
  position: relative;
  background-color: #665a4f;
  border-radius: 6px;
  padding: 16px;
  width: 25%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;

  h3 {
    color: #e4e4e4;
    font-weight: 500;
    margin-bottom: 12px;
    font-size: 1.1rem;
  }

  p {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
  }

  span {
    position: absolute;
    bottom: 15px;
    font-size: 0.8rem;
    color: #aeaeae;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 47%;

    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 2.25rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    height: 200px;

    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 2.25rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile1} {
    height: 150px;

    h3 {
      font-size: 0.7rem;
    }
    p {
      font-size: 1.85rem;
    }
    span {
      font-size: 0.5rem;
    }
  }
`;
