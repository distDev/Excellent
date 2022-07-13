import { useEffect, useState } from 'react';
import { AddCarButton } from './components/styles/index';
import CarItem from './components/carItem/index';
import Modal from '../../Components/modal/index';
import Navbar from '../../Components/navbar/Navbar';
import GarageModalContent from './components/viewCar/index';

import AddCarContent from './components/addCar/index';
import { db } from '../../Firebase/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAppSelector } from '../../State/store';
import { Container } from '../../Components/uiComponents/container';

interface Props {}

const Garage = () => {
  const [show, setShow] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');
  const [cars, setCars] = useState<any>([]);
  const [activeModal, setActiveModal] = useState<'AddCar' | 'GarageContent'>(
    'AddCar'
  );
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const pcView = window.innerWidth > 900;

  // открытие модального окна с информацией об автомобиле
  const handleGarageContentShow = (id: string) => {
    setShow((prev) => !prev);
    setActiveModal('GarageContent');
    setSelectedCar(id);
  };

  // открытие модального окна с добавлением нового автомобиля
  const handleAddCarShow = () => {
    setShow((prev) => !prev);
    setActiveModal('AddCar');
  };

  // получение автомобилей пользователя
  useEffect(() => {
    const getCars = async () => {
      const carsCollectionRef = query(
        collection(db, 'cars'),
        where('user', '==', user)
      );
      const data = await getDocs(carsCollectionRef);
      const initialData: any = data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setCars(initialData);
    };

    getCars();
  }, []);

  return (
    <Container>
      {!pcView && <Navbar title='Гараж' back={true} variant='bottomLine' />}
      {cars.length > 0 &&
        cars.map((e: any) => (
          <CarItem
            key={e.id}
            id={e.id}
            brand={e.brand}
            model={e.model}
            year={e.year}
            onClick={() => handleGarageContentShow(e.id)}
            setCars={setCars}
          />
        ))}
      <AddCarButton onClick={handleAddCarShow}>
        Добавить автомобиль
      </AddCarButton>
      <Modal show={show} setShow={setShow}>
        {activeModal === 'AddCar' ? (
          <AddCarContent setShow={setShow} setCars={setCars} />
        ) : (
          <GarageModalContent
            cars={cars}
            selectedCar={selectedCar}
            setCars={setCars}
            setShow={setShow}
          />
        )}
      </Modal>
    </Container>
  );
};

export default Garage;
