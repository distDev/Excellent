import styled from 'styled-components';

interface Props {
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  flex?: string;
}

export const Input = styled.input<Props>`
  padding: ${({ padding }) => padding || '10px'};
  box-sizing: border-box;
  margin: ${({ margin }) => margin || '0px'};
  height: ${({ height }) => height || '50px'};
  width: ${({ width }) => width || ''};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border: ${({ border }) => border || 'none'};
  background: ${({ background }) => background || '#F5F5F5'};
  flex: ${({ flex }) => flex};

  &::placeholder {
    color: #6e6E70;
  }
`;
