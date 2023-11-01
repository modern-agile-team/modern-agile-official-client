import styled from 'styled-components';

export const NavMenuWrapper = styled.section`
  position: fixed;
  padding: 50px 20px;
  top: 68.5px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  animation: fadeInOut 0.3s;
  z-index: 10;

  ul {
  }

  li {
    width: 100%;
    font-size: 1.25rem;
    font-weight: bold;
  }

  a {
    display: block;
    color: #111;

    &:hover {
      color: #5f5e5e;
    }
  }

  li + li {
    margin-top: 30px;
  }
`;
