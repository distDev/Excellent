import styled from 'styled-components/macro';

interface IContainer {
  variant?: 'large';
  bg?: 'secondBg';
  gap?: string;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ variant }) => (variant === 'large' ? '0px' : '15px')};
  background: ${({ theme: { background }, bg }) =>
    bg === 'secondBg' ? background.secondBg : background.white};
  gap: ${({ gap }) => gap || '0px'};
`;
