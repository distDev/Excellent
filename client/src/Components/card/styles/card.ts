import styled from "styled-components/macro"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f7f5;
  border-radius: 10px;
  padding: 0px 12px 12px 12px;
  font-size: 12px;
  font-weight: 500;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    background: #f8f7f5;
    border-radius: 10px;
    padding: 0px 12px 12px 12px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const CardImage = styled.div`
  height: 170px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 479px) {
    height: 170px;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 65%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const CardContent = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 479px) {
    height: 70px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CardTitle = styled.h4`
  color: #555555;
`;

export const CardPrice = styled.h4`
  color: #9B9A98;
`;

export const CardButton = styled.button`
  width: 100%;
  margin-top: 15px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 15px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  }
`;

