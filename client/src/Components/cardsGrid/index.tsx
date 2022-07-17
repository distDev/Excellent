import React, { FC } from 'react';
import { CardsGridContainer } from './styles/cardsGrid';
import { IService } from '../../Types/serviceInterface';
import Card from '../card';

type Props = {
  data: IService[];
};

const CardsGrid: FC<Props> = ({ data }) => {
  return (
    <CardsGridContainer>
      {data.map((e) => (
        <Card key={e.id} id={e.id} img={e.img} name={e.name} price={e.price} />
      ))}
    </CardsGridContainer>
  );
};

export default CardsGrid;
