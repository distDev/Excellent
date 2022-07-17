import { FC } from 'react';
import { IService } from '../../../../Types/serviceInterface';
import {
  ServicesCardsContainer,
  ServicesCardsTitle,
} from './styles/servicesCards';
import CardsGrid from '../../../../Components/cardsGrid';

type Props = {
  title?: string;
  data: IService[];
};

const ServicesCards: FC<Props> = ({ title, data }) => {
  // фильтрация данных по подкатегории
  const filteredData = data.filter((e) => e.subcategory === title);

  return (
    <ServicesCardsContainer>
      <ServicesCardsTitle>{title}</ServicesCardsTitle>
      <CardsGrid data={filteredData} />
    </ServicesCardsContainer>
  );
};

export default ServicesCards;
