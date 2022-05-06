import {
  ModalCheckContainer,
  ModalCheckInfo,
  ModalCheckInfoItem,
  ModalCheckInfoSubtitle,
  ModalCheckInfoTitle,
  ModalCheckTotal,
  ModalCheckTotalSubtitle,
  ModalCheckTotalTitle,
} from './styles/modalCheck';

type Props = {};

const ModalCheck = (props: Props) => {
  return (
    <ModalCheckContainer>
      <ModalCheckTotal>
        <ModalCheckTotalSubtitle>Итого</ModalCheckTotalSubtitle>
        <ModalCheckTotalTitle>1500 ₽</ModalCheckTotalTitle>
      </ModalCheckTotal>
      <ModalCheckInfo>
        <ModalCheckInfoItem>
          <ModalCheckInfoTitle>Номер записи</ModalCheckInfoTitle>
          <ModalCheckInfoSubtitle>532326</ModalCheckInfoSubtitle>
        </ModalCheckInfoItem>
        <ModalCheckInfoItem>
          <ModalCheckInfoTitle>Дата записи</ModalCheckInfoTitle>
          <ModalCheckInfoSubtitle>
            12 февраля 2022 в 12:30
          </ModalCheckInfoSubtitle>
        </ModalCheckInfoItem>
        <ModalCheckInfoItem>
          <ModalCheckInfoTitle>Адрес автосервиса</ModalCheckInfoTitle>
          <ModalCheckInfoSubtitle>
            Балашиха, обьездное шоссе, вл. 4
          </ModalCheckInfoSubtitle>
        </ModalCheckInfoItem>
      </ModalCheckInfo>
    </ModalCheckContainer>
  );
};

export default ModalCheck;
