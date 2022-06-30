import { RiCheckFill } from 'react-icons/ri';
import {
  CardServiceCancelButton,
  ModalStatus,
  ModalStatusIcon,
  ModalStatusTitle,
} from './styles/cardsServiceModal';
import TotalCheck from '../../../../Components/TotalCheck/index';
import { Container } from '../../../../Components/uiComponents/container';
import { FC } from 'react';
import { IService, IServiceList } from '../../../../Types/serviceInterface';
import OrderCards from '../../../../Components/orderCards';
import { db } from '../../../../Firebase/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';

interface Props {
  data: IService[];
  status: string;
  date: string;
  time: string;
  amount: number;
  brand?: string;
  model?: string;
  phone?: string;
  id: string;
  setAppointments: React.Dispatch<React.SetStateAction<IServiceList[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardsServiceContent: FC<Props> = ({
  data,
  status,
  date,
  time,
  amount,
  brand,
  model,
  phone,
  id,
  setAppointments,
  setShow,
}) => {
  const appointmentsDocRef = doc(db, 'appointments', id);

  // отмена записи на ремонт
  const cancelAppointment = async () => {
    //  изменение статуса на сервере
    await updateDoc(appointmentsDocRef, {
      status: 'Запись отменена',
    });
    // изменение статуса записи в state
    setAppointments((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: 'Запись отменена',
            }
          : item
      )
    );
    // закрытие модального окна
    setShow(false);
  };

  return (
    <>
      <ModalStatus>
        <ModalStatusIcon color={status}>
          <RiCheckFill />
        </ModalStatusIcon>
        <ModalStatusTitle>{status}</ModalStatusTitle>
        {status === 'Заявка принята' && (
          <CardServiceCancelButton onClick={cancelAppointment}>
            Отменить запись
          </CardServiceCancelButton>
        )}
      </ModalStatus>
      <Container>
        <OrderCards del={false} data={data} />
      </Container>
      <TotalCheck
        date={date}
        time={time}
        amount={amount}
        model={model}
        brand={brand}
        phone={phone}
      />
    </>
  );
};

export default CardsServiceContent;
