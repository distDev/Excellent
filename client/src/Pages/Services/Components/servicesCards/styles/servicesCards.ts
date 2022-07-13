import styled from 'styled-components/macro';

export const ServicesCardsContainer = styled.div`
  &:first-child {
    margin-top: 50px;
  }
  margin-top: 30px;
  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 0px;
    &:first-child {
      margin-top: 0px;
    }
  }
`;

export const ServicesCardsTitle = styled.h4`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 479px) {
    font-weight: bold;
    font-size: ${({ theme: { size } }) => size.title.normal};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const ServicesCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;

  @media screen and (max-width: 479px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 20px;
  }
`;
