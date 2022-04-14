import styled from 'styled-components';

interface Props {
  display?: 'flex' | 'block';
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  background?: 'dark' | 'light' | 'danger' | string;
  border?: string;
}

export const Button = styled.button<Props>`
  display: ${({ display }) => (display === 'flex' ? 'flex' : 'inline-block')};
  font-size: 16px;
  font-weight: 500;
  padding: ${({ padding }) => padding || '18px 0px'};
  margin: ${({ margin }) => margin || '0px'};
  height: ${({ height }) => height || ''};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border: ${({ border }) => border || 'none'};
  background: ${({ background }) =>
    background === 'dark'
      ? '#454545'
      : background === 'light'
      ? '#F2F2F2'
      : background === 'danger'
      ? 'D54068'
      : background};
  color: ${({ background }) =>
    background === 'light' ? '#454545' : '#F2F2F2'};
`;

