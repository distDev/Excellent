import styled from 'styled-components/macro';

interface IContainer {
  variant?: 'large';
  bg?: 'secondBg';
}

export const Container = styled.div<IContainer>`
  width: 100%;
  padding: ${({ variant }) => (variant === 'large' ? '0px' : '15px')};
  background: ${({ theme: { background }, bg }) =>
    bg === 'secondBg' ? background.secondBg : background.mainBg};
`;
