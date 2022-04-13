import styled from 'styled-components';

interface Props {
  color?: 'white' | 'grey' | 'red';
  variant?: 'small' | 'large';
  margin?: 'auto'| string;
}

export const Title = styled.h3<Props>`
  margin: ${({ margin }) => margin === 'auto' ? '0px auto' : margin};
  font-size: ${(props) =>
    props.variant === 'small'
      ? '18px'
      : props.variant === 'large'
      ? '28px'
      : '20px'};
  color: ${(props) =>
    props.color === 'white'
      ? '#F2F2F2'
      : props.color === 'grey'
      ? '#CACACA'
      : props.color === 'red'
      ? '#D54068'
      : '#454545'};
`;
