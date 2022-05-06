import { FC } from 'react';
import Card from '../../../../Components/card';
import {
  ServicesCardsContainer,
  ServicesCardsGrid,
  ServicesCardsTitle,
} from './styles/servicesCards';

type Props = {
  title?: string;
};

const ServicesCards: FC<Props> = ({ title }) => {
  return (
    <ServicesCardsContainer>
      <ServicesCardsTitle>{title}</ServicesCardsTitle>
      <ServicesCardsGrid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ServicesCardsGrid>
    </ServicesCardsContainer>
  );
};

export default ServicesCards;
