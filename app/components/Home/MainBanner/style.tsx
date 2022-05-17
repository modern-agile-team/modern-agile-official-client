import styled from 'styled-components';

export const MainBannerWrapper = styled.section`
  width: 100%;
  padding: 115px 0;
  background-color: ${({ theme }) => theme.colors.main};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.media.mobile1} {
    padding: 60px 0;
  }
`;

export const BannerTitleContainer = styled.div`
  padding: 180px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 8rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 150px 0 50px 0;
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.media.mobile1} {
    h1 {
      font-size: 2.75rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  svg {
    width: 30px;
  }
`;
