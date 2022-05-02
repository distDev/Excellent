import { RiUser3Line } from 'react-icons/ri';
import { CgSmartphone } from 'react-icons/cg';
import { Container } from '../../Components/StyledComponents/Container';
import MobileTab from '../../Components/mobileTab';
import Navbar from '../../Components/navbar/Navbar';
import Modal from '../../Components/modal';
import { useState } from 'react';
import { SettingsModalContent } from './components/modalContent/SettingsModalContent';
type Props = {};

const Settings = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <Container>
      <Navbar title='Настройки' back={true} variant='bottomLine' />
      <MobileTab icon={<CgSmartphone />} title='+7 (925) 380-25-73' />
      <MobileTab icon={<RiUser3Line />} title='Дмитрий' onClick={handleShow} />
      <Modal show={show} setShow={setShow}>
        <SettingsModalContent />
      </Modal>
    </Container>
  );
};

export default Settings;
