import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  margin-top: 40px;

  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-dots {
    button:before {
      color: #e0e0e0;
      opacity: 0.3;
    }

    & > .slick-active {
      button:before {
        opacity: 1;
      }
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
