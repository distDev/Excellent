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

export const ViewContent: FC<Props> = ({ data, setEditing }) => {
  return (
    <>
      {data.map((e) => (
        <Container key={e.id}>
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
            <ModalTitle>{e.vin || 'Пусто'}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Год</ModalSubtitle>
            <ModalTitle>{e.year || 'Пусто'}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Пробег</ModalSubtitle>
            <ModalTitle>{e.milleage || 'Пусто'}</ModalTitle>
          </GarageModalContentItem>
          <ModalFixButton onClick={() => setEditing(true)}>
            Изменить
          </ModalFixButton>
        </Container>
      ))}{' '}
    </>
  );
};
