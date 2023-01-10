import styled from 'styled-components/macro';

interface IInput {
  variant?: 'complited' | 'error' | null;
}

export const Input = styled.input<IInput>`
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: ${({ theme, variant }) =>
    variant === 'complited'
      ? theme.background.white
      : variant === 'error'
      ? theme.background.white
      : theme.background.secondBg};
  color: ${({ theme: { colors }, variant }) =>
    variant === 'error'
      ? colors.primary
      : variant === 'complited'
      ? colors.textMain
      : colors.textMain};
  box-shadow: ${({ theme: { colors }, variant }) =>
    variant === 'error'
      ? `0px 0px 0px 1px ${colors.primary}`
      : variant === 'complited'
      ? `0px 0px 0px 1px ${colors.textSecond}`
      : 'none'};
  font-size: ${({ theme: { size } }) => size.text.normal};
  font-weight: 600;

  &::placeholder {
    color: ${({ theme: { colors }, variant }) =>
      variant === 'error' ? colors.primary : colors.textSecond};
  }

  @media (min-width: 320px) and (max-width: 390px) {
    padding: 17px;
    width: 100%;
    border-radius: 8px;
    font-weight: 400;
    
  }
`;
