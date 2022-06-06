import styled from 'styled-components';

interface Props {
bg?: 'dark' | string;
}

export const StyledPopupButton = styled.div<Props>`
  position: fixed;
  bottom: 64px;
  right: 15px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme: { background } }) => background.primary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 13px 25px;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { size } }) => size.title.extraSmall};
`;
