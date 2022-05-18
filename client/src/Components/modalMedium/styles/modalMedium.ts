import styled from 'styled-components/macro';

export const ModalMediumContainer = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: fixed;
    width: 100%;
    height: 66vh;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    z-index: 111;
  }
`;

export const ModalMediumContent = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding: 40px 13px;
    gap: 30px;
    width: 100%;
    height: 100%;
  }
`;

export const ModalBackgroundImage = styled.div`
  @media screen and (max-width: 479px) {
    position: fixed;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('/122.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 111;
  }
`;