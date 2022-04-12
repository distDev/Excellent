import styled from "styled-components";

interface Props {
  color?: 'white' | 'grey' | 'red';
  variant?: 'small' | 'large';
}

export const Typography = styled.h3<Props>`
  font-size: ${(props) =>
    props.variant === 'small' ? '18px' : props.variant === 'large' ? '28px' : '20px'};
  color: ${(props) =>
    props.color === 'white'
      ? '#F2F2F2'
      : props.color === 'grey'
      ? '#CACACA'
      : props.color === 'red'
      ? '#D54068'
      : '#454545'};
`;