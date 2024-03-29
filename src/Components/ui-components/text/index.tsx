import styled from 'styled-components/macro';

interface IText {
  variant?: 'extraSmall' | 'small' | 'normal' | 'large';
  color?: 'white' | 'textSecond' | 'textMain' | 'primary' | 'green';
}

export const Text = styled.p<IText>`
  font-size: ${({ theme: { size }, variant }) =>
    variant === 'extraSmall'
      ? size.text.extraSmall
      : variant === 'large'
      ? size.text.large
      : variant === 'small'
      ? size.text.small
      : size.text.normal};

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
