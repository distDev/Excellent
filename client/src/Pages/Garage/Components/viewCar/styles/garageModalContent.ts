import styled from 'styled-components/macro';

export const GarageModalContentItem = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    gap: 7px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

export const EditCarForm = styled.form`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
