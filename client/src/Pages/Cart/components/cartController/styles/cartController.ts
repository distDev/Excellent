import styled from 'styled-components/macro';

export const CartControllerContainer = styled.div`
  max-height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px;
  gap: 20px;
  box-shadow: 0px 6px 37px 9px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  background: ${({ theme: { background } }) => background.mainBg};

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

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  height: auto;
  gap: 100px;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CartControllerTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const CartControllerButton = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { background } }) => background.secondBg};
  font-weight: 500;
  cursor: pointer;

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
