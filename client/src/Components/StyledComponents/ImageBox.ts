import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  background?: 'light-grey' | string;
  borderRadius?: string;
}

export const ImageBox = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) =>
    background === 'light-grey' ? '#F5F6FB' : background};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 50px;
    object-fit: cover;
  }
`;
