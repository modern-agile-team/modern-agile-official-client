import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  margin-top: 40px;
  padding: 0 40px;
  width: 100%;
  max-width: 70%;

  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-dots {
    button:before {
      color: #ffffff;
      opacity: 0.3;
    }

    & > .slick-active {
      button:before {
        opacity: 1;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0;
    max-width: 100%;

    .slick-list {
      margin: 0;
    }
    .slick-slide > div {
      padding: 0 5px;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    margin-top: 30px;

    .slick-dots {
      & > li {
        margin: 0 2px;
      }
    }
  }

  @media ${({ theme }) => theme.media.mobile1} {
    margin-top: 20px;
  }
`;
