import {
  TotalCheckContainer,
  TotalCheckInfo,
  TotalCheckInfoItem,
  TotalCheckInfoSubtitle,
  TotalCheckInfoTitle,
  TotalCheckTotal,
  TotalCheckTotalSubtitle,
  TotalCheckTotalTitle,
} from './styles/totalCheck';

type Props = {};

const TotalCheck = (props: Props) => {
  return (
    <TotalCheckContainer>
      <TotalCheckTotal>
        <TotalCheckTotalSubtitle>Итого</TotalCheckTotalSubtitle>
        <TotalCheckTotalTitle>1500 ₽</TotalCheckTotalTitle>
      </TotalCheckTotal>
      <TotalCheckInfo>
        <TotalCheckInfoItem>
          <TotalCheckInfoTitle>Номер записи</TotalCheckInfoTitle>
          <TotalCheckInfoSubtitle>532326</TotalCheckInfoSubtitle>
        </TotalCheckInfoItem>
        <TotalCheckInfoItem>
          <TotalCheckInfoTitle>Дата записи</TotalCheckInfoTitle>
          <TotalCheckInfoSubtitle>
            12 февраля 2022 в 12:30
          </TotalCheckInfoSubtitle>
        </TotalCheckInfoItem>
        <TotalCheckInfoItem>
          <TotalCheckInfoTitle>Адрес автосервиса</TotalCheckInfoTitle>
          <TotalCheckInfoSubtitle>
            Балашиха, обьездное шоссе, вл. 4
          </TotalCheckInfoSubtitle>
        </TotalCheckInfoItem>
      </TotalCheckInfo>
    </TotalCheckContainer>
  );
};

export default TotalCheck;
