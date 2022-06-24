import styled from 'styled-components/macro';

export const OrderSuccessContent = styled.div`
  @media screen and (max-width: 479px) {
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

  }
`;

export const OrderSuccessImg = styled.img`
  @media screen and (max-width: 479px) {
    width: 100%;
    height: auto;
  }
`;

export const OrderSuccessButton = styled.button`
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { background } }) => background.green};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 600;
    margin-top: 140px;
  }
`;
