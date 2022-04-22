import styled from 'styled-components/macro';

export const CardServiceContainer = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
  }
`;

export const CardServiceBody = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const CardServiceHeader = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }
`;

export const CardServiceStatus = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const CardServiceIndicator = styled.div`
  @media screen and (max-width: 479px) {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #41d3a0;
  }
`;

export const CardServiceInfo = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    gap: 15px;
  }
`;

export const CardServiceSlider = styled.div`
  @media screen and (max-width: 479px) {
    
  }
`;

export const CardServiceTitle = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: 18px;

  }
`;

export const CardServiceSubtitle = styled.h4`
  @media screen and (max-width: 479px) {
    font-size: 16px;
    color: #cacaca;
  }
`;
