import { FC } from 'react';
import {
  ModalFixButton,
  ModalSubtitle,
  ModalTitle,
} from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/uiComponents/container';
import { ICar } from '../../../../Types/userInterfaces';
import { GarageModalContentItem } from './styles/garageModalContent';

interface Props {
  data: ICar[];
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainContent: FC<Props> = ({ data, setEditing }) => {
  return (
    <>
      {data.map((e) => (
        <Container gap='20px'>
          <GarageModalContentItem>
            <ModalSubtitle>Бренд</ModalSubtitle>
            <ModalTitle>{e.brand}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Модель</ModalSubtitle>
            <ModalTitle>{e.model}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>VIN номер</ModalSubtitle>
            <ModalTitle>{e.vin}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Год</ModalSubtitle>
            <ModalTitle>{e.year}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Пробег</ModalSubtitle>
            <ModalTitle>{e.milleage} км</ModalTitle>
          </GarageModalContentItem>
          <ModalFixButton onClick={() => setEditing(true)}>
            Изменить
          </ModalFixButton>
        </Container>
      ))}{' '}
    </>
  );
};
