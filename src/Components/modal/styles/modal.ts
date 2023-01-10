import styled from 'styled-components/macro';

interface TButton {
  primary?: boolean;
}

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 111;
  @media screen and (max-width: 480px) {
    position: fixed;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 111;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 700px;
  height: 600px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: ${({ theme }) => theme.background.white};
  border-radius: 20px;
  z-index: 111;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    position: fixed;
    width: 100%;
    height: 90vh;
    bottom: 0;
    left: 0;
    right: auto;
    top: auto;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    z-index: 111;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 0px 0px;
  gap: 30px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 40px 0px 0px 0px;
    gap: 30px;
    width: 100%;
    height: 90vh;
    overflow-y: scroll;
  }
`;

export const ModalClose = styled.div`
  position: fixed;
  top: 13px;
  right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  svg {
    height: 24px;
    width: 24px;
  }
  @media screen and (max-width: 480px) {
    position: fixed;
    top: 13px;
    right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: white;
    background: rgba(0, 0, 0, 0.1);
    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

export const ModalSubtitle = styled.h4`
  font-size: ${({ theme: { size } }) => size.title.extraSmall};
  color: ${({ theme: { colors } }) => colors.textSecond};
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: ${({ theme: { size } }) => size.title.extraSmall};
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;

export const ModalTitle = styled.h3`
  font-size: ${({ theme: { size } }) => size.title.normal};
  color: ${({ theme: { colors } }) => colors.textMain};
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: ${({ theme: { size } }) => size.title.normal};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const ModalFixButton = styled.button<TButton>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: none;
  padding: 22px;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.textMain};
  background: ${({ primary, theme }) =>
    primary ? theme.background.primary : theme.background.button};
  font-size: ${({ theme: { size } }) => size.text.normal};
  font-weight: bold;
  @media screen and (max-width: 480px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border: none;
    padding: 22px;
    color: ${({ primary, theme }) =>
      primary ? theme.colors.white : theme.colors.textMain};
    background: ${({ primary, theme }) =>
      primary ? theme.background.primary : theme.background.button};
    font-size: ${({ theme: { size } }) => size.text.normal};
    font-weight: bold;
  }
`;

export const ModalInput = styled.input`
  @media screen and (max-width: 480px) {
    padding: 20px;
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
    color: ${({ theme: { colors } }) => colors.textMain};
    border-radius: 10px;
    width: 100%;
    font-size: ${({ theme: { size } }) => size.text.normal};
    font-weight: 600;
    &::placeholder {
      color: ${({ theme: { colors } }) => colors.lightGrey};
    }
  }
`;

export const ModalSelect = styled.select`
  @media screen and (max-width: 480px) {
    padding: 20px;
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
    color: ${({ theme: { colors } }) => colors.textMain};
    border-radius: 10px;
    width: 100%;
    font-size: ${({ theme: { size } }) => size.text.normal};
    font-weight: 600;
  }
`;

export const ModalForm = styled.form`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
