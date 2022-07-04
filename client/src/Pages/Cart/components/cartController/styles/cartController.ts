import styled from 'styled-components/macro';

export const CartControllerContainer = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    position: fixed;
    bottom: 49px;
    padding: 15px;
    background: ${({ theme: { background } }) => background.white};
    border-top: 1px solid ${({ theme: { colors } }) => colors.border};
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
    color: ${({ theme: { background } }) => background.secondBg};
    font-weight: 500;
  }
`;

export const ClearCartButton = styled.button`
  @media screen and (max-width: 479px) {
    position: absolute;
    top: 8px;
    right: 15px;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    border: none;
    background: ${({ theme: { background } }) => background.button};
    cursor: pointer;

    svg {
      width: 60%;
      height: 60%;
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
  }
`;
