import styled from 'styled-components/macro';

export const ModalSmallContainer = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 13px;
    position: fixed;
    width: 100%;
    height: 43vh;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    overflow-y: scroll;
    z-index: 111;
  }
`;
