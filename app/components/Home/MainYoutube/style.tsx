import { DefaultInnerContainer } from 'components/Container/style';
import styled from 'styled-components';

export const MainYoutubeWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 40px;

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 50px 20px;
  }
`;

export const InnerContainer = styled(DefaultInnerContainer)`
  flex-direction: column;
  padding: 0;
`;

export const ContentsContainer = styled.div`
  margin-top: 50px;
  gap: 20px;

  @media ${({ theme }) => theme.media.mobile2} {
    flex-direction: column;
  }
`;

export const IframeContainer = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 500px;
    border-radius: 8px;
    box-shadow: 1px 1px 3px #bdbdbd;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    iframe {
      height: 300px;
    }
  }
`;

export const YoutubeContainer = styled.div`
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll;
  padding: 5px 0;

  div + div {
    margin-left: 12px;
  }
`;

export const YoutubeItemContainer = styled.div`
  overflow: hidden;
  width: 200px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #f3f3f3;

  img {
    width: 100%;
  }

  h5,
  p {
    padding: 0 5px;
    text-align: center;
  }

  h5 {
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin: 5px 0;
    min-height: 40px;
    white-space: pre-wrap;
  }

  p {
    font-size: 0.7rem;
    color: #a3a3a3;
    margin-bottom: 5px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
