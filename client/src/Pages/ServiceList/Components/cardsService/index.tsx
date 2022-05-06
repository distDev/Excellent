import React, { useState } from 'react';
import Modal from '../../../../Components/modal';
import { serviceListData } from '../../utils/data';
import { CardService } from '../cardService';
import CardsServiceContent from '../cardsServiceContent/index';
import { CardsServiceContainer } from './styles/cardsService';

type Props = {};

export const ServiceListCards = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <CardsServiceContainer>
        {serviceListData.map((e) => (
          <CardService
            amount={e.amount}
            date={e.date}
            key={e.id}
            id={e.id}
            services={e.services}
            status={e.status}
            onClick={handleShow}
          />
        ))}
      </CardsServiceContainer>
      <Modal show={show} setShow={setShow}>
        <CardsServiceContent />
      </Modal>
    </>
  );
};
