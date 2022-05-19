import React, { FC } from 'react';
import styled from 'styled-components/macro';
interface Props {
  placeholder?: string;
  type: 'text' | 'date' | 'checkbox' | 'email' | 'number';
}

interface IInput {
  variant?: string;
}

const Input: FC<Props> = ({ children, type, placeholder, ...props }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} {...props}>
      {children}
    </StyledInput>
  );
};

export const StyledInput = styled.input<IInput>`
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background: ${({ theme, variant }) =>
    variant === 'complited'
      ? theme.background.white
      : theme.background.secondBg};
  color: ${({ theme: colors, variant }) =>
    variant === 'error'
      ? colors.primary
      : variant === 'complited'
      ? colors.textMain
      : colors.textSecond};
  border: ${({ theme, variant }) =>
    variant === 'error'
      ? theme.colors.primary
      : variant === 'complited'
      ? theme.colors.border
      : 'none'};
  font-size: ${({ theme: { size } }) => size.text.normal};
  font-weight: 600;

  &::placeholder {
    color: ${({ theme: {colors} }) => colors.textSecond};
  }
`;

export default Input;
