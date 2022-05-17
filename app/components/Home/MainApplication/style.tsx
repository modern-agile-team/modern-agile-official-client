import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainApplicationWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 25px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    width: 250px;
    border-radius: 9px;
    box-shadow: 1px 1px 10px #bdbdbd;
  }

  p {
    text-align: center;
    margin: 30px 0;
    font-size: 1.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.main};
  }

  span {
    color: ${({ theme }) => theme.colors.sub};
  }

  @media ${({ theme }) => theme.media.mobile2} {
    p {
      font-size: 1.3rem;
    }

    img {
      width: 180px;
      border-radius: 9px;
      box-shadow: 1px 1px 10px #bdbdbd;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 500px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    width: 100%;
  }
`;
