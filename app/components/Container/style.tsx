import styled from 'styled-components';

export const DefaultInnerContainer = styled.div`
  width: 768px;
  display: flex;
  margin: 0;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 0 40px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 0 25px;
  }
`;
