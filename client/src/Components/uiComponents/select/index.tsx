import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {}
interface ISelect {
  variant?: string;
}

const Select: FC<Props> = ({ children, ...props }) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};

export const StyledSelect = styled.select<ISelect>`
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

    font-size: 16px;
    font-weight: 600;

    option {
      color: ${({ theme: colors, variant }) =>
        variant === 'error'
          ? colors.primary
          : variant === 'complited'
          ? colors.textMain
          : colors.textSecond};
    }
  }
`;

export default Select;
