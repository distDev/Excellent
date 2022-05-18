import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {}
interface IContainer {
  variant?: 'large';
}

const Container: FC<Props> = ({ children, ...props }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export const StyledContainer = styled.div<IContainer>`
  width: 100%;
  padding: ${({ variant }) => (variant === 'large' ? '0px' : '15px')};
`;

export default Container;
