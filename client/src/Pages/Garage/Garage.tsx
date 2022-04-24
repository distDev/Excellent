import { Container } from '../../Components/StyledComponents/Container';
import Modal from '../../Components/modal/index';
import { IoCarSportOutline } from 'react-icons/io5';
import MobileTab from '../../Components/mobileTab';
import Navbar from '../../Components/navbar/Navbar';
import { useState } from 'react';

type Props = {};

const Garage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <Container>
      <Navbar title='Гараж' back={true} variant='bottomLine' />
      <MobileTab
        icon={<IoCarSportOutline />}
        title='Reno Logan'
        onClick={handleShow}
      />
      <Modal show={show} setShow={setShow} />
    </Container>
  );
};

export default Garage;
