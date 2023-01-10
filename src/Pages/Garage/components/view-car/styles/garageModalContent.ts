import styled from 'styled-components/macro';

export const GarageModalContentItem = styled.div`
  width: 100%;
  display: grid;
  padding: 15px 0px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};

  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    padding: 10px 0px;
    gap: 10px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

export const EditCarForm = styled.form`
  display: grid;
  gap: 20px;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 20px;
  }
  @media (min-width: 320px) and (max-width: 380px) {
    margin-bottom: 70px;
  }
`;
