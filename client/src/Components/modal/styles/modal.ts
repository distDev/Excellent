import styled from "styled-components/macro";

export const ModalBackground = styled.div`
  @media screen and (max-width: 479px) {
    position: fixed;
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
    position: absolute;
    bottom: 0;
    height: 90%;
    width: 100%;
    background: #ffffff;
    border-radius: 20px 20px 0px 0px;
  }
`;
