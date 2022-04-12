import styled from 'styled-components';

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  border-bottom: 1px solid #f2f2f2;
  gap: 20px;
`;

export const ServiceCardDescriprion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
`;

export const ServiceCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ServiceCardStatus = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  div {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #41d3a0;
  }
`;

export const ServiceCardInfo = styled.div`
  display: flex;
  gap: 15px;

  
`;

export const ServiceCardSlider = styled.div`
  .test-slider-item {
    height: 100px;
    border-radius: 10px;
    background: #f5f6fb;
  }
`;
