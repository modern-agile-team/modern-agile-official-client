import styled from 'styled-components';

export const AccordionWrapper = styled.div``;

export const AccordionButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: 0.3s;

  p {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: start;
    font-size: 1.3rem;
    color: #fff;
  }

  span {
    font-size: 1.2rem;
    color: #fff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }

  @media ${({ theme }) => theme.media.mobile2} {
    padding: 10px 15px;

    p {
      font-size: 1rem;
    }
  }
`;

export const AccordionPanelContainer = styled.div`
  background-color: #fff;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;

  p {
    color: ${({ theme }) => theme.colors.main};
    padding: 20px 40px;
    font-size: 1.15rem;
  }

  &.active {
    max-height: 200px;
  }

  @media ${({ theme }) => theme.media.mobile2} {
    p {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  }
`;
