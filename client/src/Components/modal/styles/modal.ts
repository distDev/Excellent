import styled from 'styled-components/macro';

export const ModalBackground = styled.div`
  @media screen and (max-width: 479px) {
    position: fixed;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 111;
  }
`;

export const ModalContainer = styled.div`
  @media screen and (max-width: 479px) {
    position: relative;
    height: 90vh;
    width: 100vw;
    background: #ffffff;
    border-radius: 20px 20px 0px 0px;
    overflow-y: scroll;
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
