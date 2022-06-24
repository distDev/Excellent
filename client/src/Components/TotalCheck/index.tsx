import moment from 'moment';
import { FC } from 'react';
import { useAppSelector } from '../../State/store';
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

type Props = {
  date: string;
  time: string;
  amount: number;
};

const TotalCheck: FC<Props> = ({ date, time, amount }) => {
  return (
    <TotalCheckContainer>
      <TotalCheckTotal>
        <TotalCheckTotalSubtitle>Итого</TotalCheckTotalSubtitle>
        <TotalCheckTotalTitle>~{amount} ₽</TotalCheckTotalTitle>
      </TotalCheckTotal>
      <TotalCheckInfo>
        <TotalCheckInfoItem>
          <TotalCheckInfoTitle>Дата записи</TotalCheckInfoTitle>
          <TotalCheckInfoSubtitle>
            {date} в {time}
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
