// используется вместо div внутри родительских блоков, задать gap для отступов и другие
// изменяемые свойства flex-direcrion .

import styled from 'styled-components';

interface Props {
  display?: 'flex' | 'block';
  flexDirection?: 'column' | 'row';
  justifyContent?: 'space-between' | 'space-around' | 'center' | 'flex-start';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  padding?: string;
  margin?: string;
  borderBottom?: string;
  gap?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
}

export const Box = styled.div<Props>`
  display: ${({ display }) => (display === 'flex' ? 'flex' : 'block')};
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row'
      ? 'row'
      : flexDirection === 'column'
      ? 'column'
      : ''};
  padding: ${({ padding }) => padding || '0px'};
  margin: ${({ margin }) => margin || '0px'};
  border-bottom: ${({ borderBottom }) => borderBottom || ''};
  gap: ${({ gap }) => gap || '0px'};
  justify-content: ${({ justifyContent }) =>
    justifyContent === 'center'
      ? 'center'
      : justifyContent === 'flex-start'
      ? 'flex-start'
      : justifyContent === 'space-around'
      ? 'space-around'
      : justifyContent === 'space-between'
      ? 'space-between'
      : ''};
  align-items: ${({ alignItems }) =>
    alignItems === 'center'
      ? 'center'
      : alignItems === 'flex-end'
      ? 'flex-end'
      : alignItems === 'flex-start'
      ? 'flex-start'
      : ''};
  height: ${({ height }) => height || ''};
  width: ${({ width }) => width || ''};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  border: ${({ border }) => border || ''};
  background: ${({ background }) => background};
`;
