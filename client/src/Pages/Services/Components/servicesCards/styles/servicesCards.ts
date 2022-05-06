import styled from 'styled-components/macro';

export const ServicesCardsContainer = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const ServicesCardsTitle = styled.div`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.title.normal};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const ServicesCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 20px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
`;
