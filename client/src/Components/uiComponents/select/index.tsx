
import styled from 'styled-components/macro';


interface ISelect {
  variant?: 'complited' | 'error' | null;
}


export const Select = styled.select<ISelect>`
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: ${({ theme, variant }) =>
    variant === 'complited'
      ? theme.background.white
      : theme.background.secondBg};
  box-shadow: ${({ theme: { colors }, variant }) =>
    variant === 'error'
      ? `0px 0px 0px 1px ${colors.primary}`
      : variant === 'complited'
      ? `0px 0px 0px 1px ${colors.textSecond}`
      : 'none'};
  color: ${({ theme, variant }) =>
    variant === 'error'
      ? theme.colors.primary
      : variant === 'complited'
      ? theme.colors.textMain
      : theme.colors.textSecond};
  border-right: 21px solid transparent;
  font-size: ${({ theme: { size } }) => size.text.small};
  outline: none;
  font-weight: 600;
  
  @media screen and (max-width: 479px) {
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    border: none;
    background: ${({ theme, variant }) =>
      variant === 'complited'
        ? theme.background.white
        : theme.background.secondBg};
    box-shadow: ${({ theme: { colors }, variant }) =>
      variant === 'error'
        ? `0px 0px 0px 1px ${colors.primary}`
        : variant === 'complited'
        ? `0px 0px 0px 1px ${colors.textSecond}`
        : 'none'};
    color: ${({ theme, variant }) =>
      variant === 'error'
        ? theme.colors.primary
        : variant === 'complited'
        ? theme.colors.textMain
        : theme.colors.textSecond};
    border-right: 21px solid transparent;
    font-size: ${({ theme: { size } }) => size.text.normal};
    outline: none;
    font-weight: 600;
  }
`;


