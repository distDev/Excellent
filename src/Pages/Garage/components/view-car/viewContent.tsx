import { FC } from 'react';
import {
  ModalFixButton,
  ModalSubtitle,
  ModalTitle,
} from '../../../../Components/modal/styles/modal';
import { ICar } from '../../../../Types/userInterfaces';
import { GarageModalContentItem } from './styles/garageModalContent';
import styled from 'styled-components/macro';

interface Props {
  data: ICar[];
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ViewContent: FC<Props> = ({ data, setEditing }) => {

  const {id, brand, model, vin, year, milleage} = data[0]

  return (
    <>
      {
        <Container key={id}>
          <GarageModalContentItem>
            <ModalSubtitle>Бренд</ModalSubtitle>
            <ModalTitle>{brand}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Модель</ModalSubtitle>
            <ModalTitle>{model}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>VIN номер</ModalSubtitle>
            <ModalTitle>{vin || 'Пусто'}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Год</ModalSubtitle>
            <ModalTitle>{year || 'Пусто'}</ModalTitle>
          </GarageModalContentItem>
          <GarageModalContentItem>
            <ModalSubtitle>Пробег</ModalSubtitle>
            <ModalTitle>{milleage || 'Пусто'}</ModalTitle>
          </GarageModalContentItem>
          <ModalFixButton onClick={() => setEditing(true)}>
            Изменить
          </ModalFixButton>
        </Container>
      }
    </>
  );
};

const Container = styled.div`
  padding: 15px;
  @media (min-width: 320px) and (max-width: 380px) {
    margin-bottom: 70px;
  }
`;
