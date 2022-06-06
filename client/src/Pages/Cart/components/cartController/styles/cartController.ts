import styled from 'styled-components/macro';

export const CartControllerContainer = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    position: fixed;
    bottom: 49px;
    padding: 15px;
    background: ${({ theme: { background } }) => background.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
  }
`;

export const CartControllerTotal = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const CartControllerButton = styled.button`
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors } }) => colors.textMain};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 500;
  }
`;
