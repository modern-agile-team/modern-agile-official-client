import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  padding: 40px 40px 60px 40px;
  justify-content: center;
  background-color: #f7f7f7;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 40px 20px 60px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  justify-content: space-between;

  @media ${({ theme }) => theme.media.mobile2} {
    align-items: center;
    flex-direction: column;
  }
`;

export const ContentsContainer = styled.section`
  color: #838383;
  font-size: 0.9rem;

  p {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
  }

  li + li {
    margin-left: 20px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    p {
      text-align: center;
      margin-bottom: 5px;
    }

    b {
      font-size: 0.5rem;
    }

    ul {
      margin-top: 20px;
    }
  }
`;
