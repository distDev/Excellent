import { useState } from 'react';
import { Container } from '../../Components/StyledComponents/Container';
import { IoCarSportOutline } from 'react-icons/io5';
import { AddCarButton } from './components/styles/index';
import Modal from '../../Components/modal/index';
import MobileTab from '../../Components/mobileTab';
import Navbar from '../../Components/navbar/Navbar';
import GarageModalContent from './components/garageModalContent/index';


import AddCarContent from './components/addCarContent/index';

interface Props {};


const Garage = () => {
  const [show, setShow] = useState(false);
  const [activeModal, setActiveModal] = useState<'AddCar' | 'GarageContent'>(
    'AddCar'
  );

  // открытие модального окна с информацией об автомобиле
  const handleGarageContentShow = () => {
    setShow((prev) => !prev);
    setActiveModal('GarageContent');
  };

  // открытие модального окна с добавлением нового автомобиля
  const handleAddCarShow = () => {
    setShow((prev) => !prev);
    setActiveModal('AddCar');
  };

  return (
    <Container>
      <Navbar title='Гараж' back={true} variant='bottomLine' />
      <MobileTab
        icon={<IoCarSportOutline />}
        title='Reno Logan'
        onClick={handleGarageContentShow}
      />
      <AddCarButton onClick={handleAddCarShow}>
        Добавить автомобиль
      </AddCarButton>
      <Modal show={show} setShow={setShow}>
        {activeModal === 'AddCar' ? <AddCarContent /> : <GarageModalContent />}
      </Modal>
    </Container>
  );
};

export default Garage;
