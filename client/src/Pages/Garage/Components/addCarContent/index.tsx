import React from 'react';
import {
  ModalFixButton,
  ModalInput,
  ModalSubtitle,
} from '../../../../Components/modal/styles/modal';
import { GarageModalContentItem } from '../garageModalContent/styles/garageModalContent';

type Props = {};

const AddCarContent = (props: Props) => {
  return (
    <>
      <GarageModalContentItem>
        <ModalSubtitle>Бренд</ModalSubtitle>
        <ModalInput name='brand' />
      </GarageModalContentItem>
      <GarageModalContentItem>
        <ModalSubtitle>Модель</ModalSubtitle>
        <ModalInput name='model' />
      </GarageModalContentItem>
      <GarageModalContentItem>
        <ModalSubtitle>VIN номер</ModalSubtitle>
        <ModalInput name='vin' />
      </GarageModalContentItem>
      <GarageModalContentItem>
        <ModalSubtitle>Год</ModalSubtitle>
        <ModalInput name='year' />
      </GarageModalContentItem>
      <GarageModalContentItem>
        <ModalSubtitle>Пробег</ModalSubtitle>
        <ModalInput />
      </GarageModalContentItem>
      
      <ModalFixButton primary>Добавить</ModalFixButton>
    </>
  );
};

export default AddCarContent;
