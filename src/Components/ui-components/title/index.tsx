import styled from 'styled-components/macro';

interface IText {
  variant: 'extraSmall' | 'small' | 'normal' | 'medium';
  color: 'white' | 'textSecond' | 'textMain' | 'primary' | 'green';
}

export const Title = styled.h2<IText>`
  font-size: ${({ theme: { size }, variant }) =>
    variant === 'extraSmall'
      ? size.title.extraSmall
      : variant === 'small'
      ? size.title.small
      : variant === 'medium'
      ? size.title.medium
      : size.title.normal};

  color: ${({ theme: { colors }, color }) =>
    color === 'green'
      ? colors.green
      : color === 'primary'
      ? colors.primary
      : color === 'white'
      ? colors.white
      : color === 'textSecond'
      ? colors.textSecond
      : colors.textMain};

  @media screen and (max-width: 480px) {
    font-size: ${({ theme: { size }, variant }) =>
      variant === 'extraSmall'
        ? size.extraSmall
        : variant === 'small'
        ? size.small
        : size.normal};

    color: ${({ theme: { colors }, color }) =>
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
