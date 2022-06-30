import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Modal from '../../../../Components/modal';
import { db } from '../../../../Firebase/firebase-config';
import { useAppSelector } from '../../../../State/store';
import { IServiceList } from '../../../../Types/serviceInterface';
import { CardService } from '../cardService';
import CardsServiceContent from '../cardsServiceContent/index';
import { CardsServiceContainer } from './styles/cardsService';

type Props = {};

export const ServiceListCards = (props: Props) => {
  const [show, setShow] = useState(false);
  const [appointments, setAppointments] = useState<IServiceList[] | []>([]);
  const [selectedAppointment, setSelectedAppointment] = useState('');
  const user = useAppSelector((state) => state.user?.phoneNumber);

  // получени id выбранной записи и открытие окна
  const handleSelectedAppointment = (id: string) => {
    setSelectedAppointment(id);
    setShow((prev) => !prev);
  };

  // поиск выбранной записи
  const filteredAppointment = appointments.filter(
    (e) => e.id === selectedAppointment
  );

  console.log(filteredAppointment);

  // получение истории записей на ремонт
  useEffect(() => {
    const fetchAppointments = async () => {
      const carsCollectionRef = query(
        collection(db, 'appointments'),
        where('phone', '==', user)
      );
      const data = await getDocs(carsCollectionRef);
      const initialData: any = data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAppointments(initialData);
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <CardsServiceContainer>
        {appointments.map((e) => (
          <CardService
            amount={e.amount}
            date={e.date}
            time={e.time}
            key={e.id}
            id={e.id}
            services={e.services}
            status={e.status}
            onClick={() => handleSelectedAppointment(e.id)}
          />
        ))}
      </CardsServiceContainer>
      <Modal show={show} setShow={setShow}>
        {filteredAppointment.map((e) => (
          <CardsServiceContent
            key={e.id}
            id={e.id}
            date={e.date}
            time={e.time}
            amount={e.amount}
            data={e.services}
            status={e.status}
            brand={e.brand}
            model={e.model}
            phone={e.phone}
            setShow={setShow}
            setAppointments={setAppointments}
          />
        ))}
      </Modal>
    </>
  );
};
