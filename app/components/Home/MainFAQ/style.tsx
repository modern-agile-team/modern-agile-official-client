import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainFAQWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 40px 100px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 25px 20px 50px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 9px;
  padding: 40px;
  box-shadow: 1px 1px 10px #bdbdbd;
  flex-direction: column;

  & > div + div {
    margin-top: 20px;
  }

  h1 {
    color: #fff;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: 1.75rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 25px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;
