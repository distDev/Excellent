import styled from 'styled-components/macro';

export const ServicesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 50px;
  
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-top: 50px;
  }
`;
