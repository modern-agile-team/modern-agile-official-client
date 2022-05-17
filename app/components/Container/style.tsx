import styled from 'styled-components';

export const DefaultInnerContainer = styled.div`
  width: 1250px;
  padding: 15px 0;
  display: flex;
  margin: 0;

  @media ${({ theme }) => theme.media.desktop} {
    width: 100%;
  }
`;
