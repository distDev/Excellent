import styled from 'styled-components';

interface Props {
bg?: 'dark' | string;
}

export const StyledPopupButton = styled.div<Props>`
  width: 100%;
  position: fixed;
  bottom: 64px;
  width: calc(100% - 30px);
  left: 15px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: ${({ bg }) =>
    bg === 'dark' ? '#454545' : 'rgba(255, 255, 255, 0.95)'};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px;
`;
