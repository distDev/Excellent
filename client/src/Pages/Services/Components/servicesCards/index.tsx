import { FC } from 'react';
import Card from '../../../../Components/card';
import { IService } from '../../../../Types/serviceInterface';
import {
  ServicesCardsContainer,
  ServicesCardsGrid,
  ServicesCardsTitle,
} from './styles/servicesCards';

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
      <ServicesCardsGrid>
        {filteredData.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name}
            price={e.price}
          />
        ))}
      </ServicesCardsGrid>
    </ServicesCardsContainer>
  );
};

export default ServicesCards;
