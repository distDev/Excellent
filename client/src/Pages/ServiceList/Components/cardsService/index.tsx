import React from 'react';
import { serviceListData } from '../../utils/data';
import { CardService } from '../cardService';
import { CardsServiceContainer } from './styles/cardService';

type Props = {};

export const ServiceListCards = (props: Props) => {
  return (
    <CardsServiceContainer>
      {serviceListData.map((e) => (
        <CardService
          amount={e.amount}
          date={e.date}
          key={e.id}
          id={e.id}
          services={e.services}
          status={e.status}
        />
      ))}
    </CardsServiceContainer>
  );
};


