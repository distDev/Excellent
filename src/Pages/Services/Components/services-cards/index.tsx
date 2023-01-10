import { FC } from 'react';
import { IService } from '../../../../Types/serviceInterface';
import styled from 'styled-components/macro';
import CardsGrid from '../../../../Components/cards-grid';

type Props = {
  title?: string;
  data: IService[];
};

const ServicesCards: FC<Props> = ({ title, data }) => {
  // фильтрация данных по подкатегории
  const filteredData = data.filter((e) => e.subcategory === title);

  return (
    <ServicesCardsContainer>
      <ServicesCardsTitle data-cy="services-cards-title">{title}</ServicesCardsTitle>
      <CardsGrid data={filteredData} />
    </ServicesCardsContainer>
  );
};

export default ServicesCards;

const ServicesCardsContainer = styled.div`
  margin-bottom: 100px;

  &:first-child {
    margin-top: 50px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 90px;
    &:first-child {
      margin-top: 0px;
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 60px;
    &:first-child {
      margin-top: 0px;
    }
  }
`;

const ServicesCardsTitle = styled.h4`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 480px) {
    font-weight: bold;
    font-size: ${({ theme: { size } }) => size.title.normal};
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (min-width: 320px) and (max-width: 380px) {
    font-weight: medium;
    font-size: 18px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
