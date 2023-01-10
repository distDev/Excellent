import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import CarItem from './components/car-item/index';
import Modal from '../../Components/modal/index';
import Navbar from '../../Components/navbar/Navbar';
import GarageModalContent from './components/view-car/index';
import AddCarContent from './components/add-car/index';
import { db } from '../../Firebase/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Container } from '../../Components/ui-components/container';
import { ICar } from '../../Types/userInterfaces';
import Loader from '../../Components/loader';
import { useAppSelector } from '../../Hooks/useAppSelector';

const Garage = () => {
  const [show, setShow] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [selectedCar, setSelectedCar] = useState('');
  const [cars, setCars] = useState<ICar[]>([]);
  const [activeModal, setActiveModal] = useState<'AddCar' | 'CarInfo'>(
    'AddCar'
  );
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const pcView = window.innerWidth > 900;

  // открытие модального окна с информацией об автомобиле
  const handleGarageContentShow = (id: string) => {
    setShow((prev) => !prev);
    setActiveModal('CarInfo');
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
      setIsPending(false);
    };
    getCars();
  }, []);

  return (
    <Container>
      {!pcView && <Navbar title='Гараж' back={true} variant='bottomLine' />}

      {cars.length > 0 &&
        !isPending &&
        cars.map((e) => (
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

      {isPending && (
        <GarageLoader>
          <Loader />{' '}
        </GarageLoader>
      )}

      {!isPending && (
        <AddCarBox>
          <button onClick={handleAddCarShow} data-cy="add-car-btn"> Добавить автомобиль</button>
        </AddCarBox>
      )}

      <Modal show={show} setShow={setShow}>
        {activeModal === 'AddCar' && (
          <AddCarContent setShow={setShow} setCars={setCars} />
        )}
        {activeModal === 'CarInfo' && (
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

const AddCarBox = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.small};
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-weight: 600;

    &:hover {
      background: ${({ theme: { background } }) => background.primary};
      color: ${({ theme: { colors } }) => colors.white};
    }
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    bottom: 70px;
    left: 0;
    padding: 0px 15px;

    button {
      width: 100%;
      padding: 20px;
      border-radius: 10px;
      border: none;
      font-size: ${({ theme: { size } }) => size.text.normal};
      background: ${({ theme: { background } }) => background.button};
      color: ${({ theme: { colors } }) => colors.textSecond};
      font-weight: 600;
    }
  }
`;

const GarageLoader = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
