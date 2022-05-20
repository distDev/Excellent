
import styled from 'styled-components/macro';


interface ISelect {
  variant?: string;
}


export const Select = styled.select<ISelect>`
  @media screen and (max-width: 479px) {
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    background: ${({ theme, variant }) =>
      variant === 'complited'
        ? theme.background.white
        : theme.background.secondBg};
    border: ${({ theme, variant }) =>
      variant === 'error'
        ? theme.colors.primary
        : variant === 'complited'
        ? theme.colors.border
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


