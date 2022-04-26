import styled from 'styled-components/macro';

interface TButton {
  primary?: boolean;
}

export const ModalBackground = styled.div`
  @media screen and (max-width: 479px) {
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
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 13px;
    position: fixed;
    width: 100%;
    height: 90vh;
    bottom: 0;
    left: 0;
    background: white;
    border-radius: 20px 20px 0px 0px;
    overflow-y: scroll;
    z-index: 111;
  }
`;

export const ModalClose = styled.div`
  @media screen and (max-width: 479px) {
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

export const ModalSubtitle = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: 16px;
    color: #cacaca;
  }
`;

export const ModalTitle = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: 20px;
  }
`;

export const ModalFixButton = styled.button<TButton>`
  @media screen and (max-width: 479px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border: none;
    padding: 22px;
    color: ${({ primary }) => (primary ? 'white' : '#454545')};
    background: ${({ primary }) => (primary ? '#D54068' : '#F2F2F2;')};
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ModalInput = styled.input`
  @media screen and (max-width: 479px) {
    padding: 20px;
    border: 1px solid #454545;
    color: #454545;
    border-radius: 10px;
    width: 100%;
    font-size: 16px;
  }
`;