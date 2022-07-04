import styled from 'styled-components';

export const ThemeSwitcherBox = styled.header`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  svg {
    height: 30px;
    width: 30px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
