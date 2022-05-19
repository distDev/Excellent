import styled from 'styled-components/macro';

interface IText {
  variant: 'extraSmall' | 'small' | 'normal';
  color: 'white' | 'textSecond' | 'textMain' | 'primary' | 'green';
}

export const Title = styled.h2<IText>`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: size, variant }) =>
      variant === 'extraSmall'
        ? size.extraSmall
        : variant === 'small'
        ? size.small
        : size.normal};

    color: ${({ theme: colors, color }) =>
      color === 'green'
        ? colors.green
        : color === 'primary'
        ? colors.primary
        : color === 'white'
        ? colors.white
        : color === 'textSecond'
        ? colors.textSecond
        : colors.textMain};
  }
`;
