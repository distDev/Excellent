import styled from 'styled-components';

interface Props {
  color?: 'white' | 'grey' | 'red';
  variant?: 'small' | 'large' | 'extraSmall';
  margin?: 'auto' | string;
  fw?: string;
}

export const Title = styled.h3<Props>`
  margin: ${({ margin }) => (margin === 'auto' ? '0px auto' : margin)};
  font-size: ${({ variant }) =>
    variant === 'extraSmall'
      ? '12px'
      : variant === 'small'
      ? '18px'
      : variant === 'large'
      ? '28px'
      : '20px'};
  color: ${({ color }) =>
    color === 'white'
      ? '#F2F2F2'
      : color === 'grey'
      ? '#CACACA'
      : color === 'red'
      ? '#D54068'
      : '#454545'};
  font-weight: ${({ fw }) =>
    fw === 'bold' ? '700' : fw === 'regular' ? '400' : fw === 'medium' ? '500' : 'bold'};
  
`;
