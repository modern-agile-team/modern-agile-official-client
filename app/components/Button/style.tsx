import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export const StyledLinkButton = styled.a<{ variant: string }>`
  width: 100%;
  text-align: center;
  padding: 15px 0;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? `${theme.colors.main}` : '#fff'};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? `#fff` : `${theme.colors.main}`};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'primary' ? `${theme.colors.light}` : '#e4e4e4'};
  }
`;
