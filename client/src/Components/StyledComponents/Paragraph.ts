import styled from 'styled-components';

interface Props {
  variant?: 'small' | 'large'
  color?: 'white' | 'grey' | 'red';
}

export const Paragraph = styled.p<Props>`
  font-size: ${(props) =>
    props.variant === 'small' ? '12px' : props.variant === 'large' ? '20px' : '16px'};
  color: ${(props) =>
    props.color === 'white'
      ? '#F2F2F2'
      : props.color === 'grey'
      ? '#CACACA'
      : props.color === 'red'
      ? '#D54068'
      : '#454545'};
`;
