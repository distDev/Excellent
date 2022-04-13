// использовать для небольших карточек и табов

import styled from 'styled-components';

interface Props {
  display?: 'flex' | 'block';
  flexDirection?: 'column' | 'row';
  justifyContent?: 'space-between' | 'space-around' | 'center' | 'flex-start';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  padding?: string;
  borderBottom?: string;
  gap?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

export const SmallCardContainer = styled.div<Props>`
  display: ${({ display }) => (display === 'block' ? 'block' : 'flex')};
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  padding: ${({ padding }) => padding || '20px 0px'};
  border-bottom: ${({ borderBottom }) => borderBottom || '1px solid #f2f2f2'};
  gap: ${({ gap }) => gap || '20px'};
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
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  position: relative;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;
