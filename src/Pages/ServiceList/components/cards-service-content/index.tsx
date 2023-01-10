import styled from 'styled-components/macro';
import TotalCheck from '../../../../Components/total-check/index';
import { Container } from '../../../../Components/ui-components/container';
import { FC } from 'react';
import { IService, IServiceList } from '../../../../Types/serviceInterface';
import OrderCards from '../../../../Components/order-cards';
import { db } from '../../../../Firebase/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { Title } from '../../../../Components/ui-components/title';
import { BiCheck, BiCubeAlt, BiTimeFive, BiX } from 'react-icons/bi';

interface Props {
  data: IService[];
  status: string;
  date: string;
  start: string;
  end: string;
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
  start,
  end,
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
          {status === 'Заявка принята' && <BiCubeAlt />}
          {status === 'Выполнено' && <BiCheck />}
          {status === 'В процессе' && <BiTimeFive />}
          {status === 'Запись отменена' && <BiX />}
        </ModalStatusIcon>
        <div className='status-title'>
          <Title color='textMain' variant='normal'>
            {status}
          </Title>
        </div>
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
        start={start}
        end={end}
        amount={amount}
        model={model}
        brand={brand}
        phone={phone}
      />
    </>
  );
};

export default CardsServiceContent;

interface IIndicator {
  color: string;
}

const ModalStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  .status-title {
    margin: 13px 0px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0px auto;
  }
`;

const ModalStatusIcon = styled.div<IIndicator>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  background: ${({ theme, color }) =>
    color === 'Выполнено'
      ? theme.background.green
      : color === 'В процессе'
      ? theme.background.purple
      : color === 'Заявка принята'
      ? '#DEE21A'
      : theme.background.primary};

  svg {
    width: 60%;
    height: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme, color }) =>
      color === 'Выполнено'
        ? theme.background.green
        : color === 'В процессе'
        ? theme.background.purple
        : color === 'Заявка принята'
        ? '#DEE21A'
        : theme.background.primary};

    svg {
      width: 70%;
      height: 70%;
    }
  }
`;

const CardServiceCancelButton = styled.button`
  padding: 20px 40px;
  border-radius: 30px;
  margin-top: 25px;
  border: none;
  background: ${({ theme: { background } }) => background.button};
  color: ${({ theme: { colors } }) => colors.textSecond};
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 20px 40px;
    border-radius: 30px;
    margin-top: 25px;
    border: none;
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textSecond};
    cursor: pointer;
  }
`;
