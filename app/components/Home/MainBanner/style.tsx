import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainBannerWrapper = styled.section`
  width: 100%;
  padding: 150px 0 90px 0;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 120px 0 60px 0;
  }

  @media ${({ theme }) => theme.media.mobile1} {
    padding: 100px 0 50px 0;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BannerTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  width: 760px;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.1rem;
    color: #e4e4e4;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    h1 {
      font-size: 3rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.media.mobile1} {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
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

  @media ${({ theme }) => theme.media.mobile2} {
    margin-top: 40px;
    svg {
      width: 20px;
    }
  }
  @media ${({ theme }) => theme.media.mobile1} {
    margin-top: 30px;
    svg {
      width: 15px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 9px;
  overflow: hidden;

  picture {
    width: 100%;
    border-radius: 9px;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.15;
  }

  @media ${({ theme }) => theme.media.tablet} {
    height: 300px;
    picture {
      img {
        height: 300px;
      }
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    height: 200px;
    picture {
      img {
        height: 200px;
      }
    }
  }

  @media ${({ theme }) => theme.media.mobile1} {
    height: 150px;
    picture {
      img {
        height: 150px;
      }
    }
  }
`;
