import { RiCheckFill } from 'react-icons/ri';
import {
  ModalStatus,
  ModalStatusIcon,
  ModalStatusTitle,
} from './styles/cardsServiceModal';
import TotalCheck from '../../../../Components/TotalCheck/index';
import { Container } from '../../../../Components/uiComponents/container';
import { FC } from 'react';
import { IService } from '../../../../Types/serviceInterface';
import OrderCards from '../../../../Components/orderCards';

interface Props {
  data: IService[];
  status: string;
  date: string;
  time: string;
  amount: number;
}

const CardsServiceContent: FC<Props> = ({
  data,
  status,
  date,
  time,
  amount,
}) => {
  return (
    <>
      <ModalStatus>
        <ModalStatusIcon color={status}>
          <RiCheckFill />
        </ModalStatusIcon>
        <ModalStatusTitle>{status}</ModalStatusTitle>
      </ModalStatus>
      <Container>
        <OrderCards del={false} data={data} />
      </Container>
      <TotalCheck date={date} time={time} amount={amount} />
    </>
  );
};

export default CardsServiceContent;
