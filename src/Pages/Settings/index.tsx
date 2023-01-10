import { RiUser3Line } from 'react-icons/ri';
import { CgSmartphone } from 'react-icons/cg';
import MobileTab from '../../Components/mobile-tab';
import Navbar from '../../Components/navbar/Navbar';
import Modal from '../../Components/modal';
import { useState } from 'react';
import { SettingsModalContent } from './components/modalContent/SettingsModalContent';
import { Container } from '../../Components/ui-components/container';
import { useAppSelector } from '../../Hooks/useAppSelector';

interface Props {}

const Settings = (props: Props) => {
  const userPhone = useAppSelector((state) => state.user.phoneNumber);
  const userName = useAppSelector((state) => state.user?.name);
  const [name, setName] = useState(userName || '');
  const [show, setShow] = useState(false);
  const pcView = window.innerWidth > 900;

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <Container>
      {!pcView && <Navbar title='Настройки' back={true} variant='bottomLine' />}
      <MobileTab icon={<CgSmartphone />} title={userPhone!} />
      <MobileTab
        icon={<RiUser3Line />}
        title={name ? name : 'Нет имени'}
        onClick={handleShow}
        dataСy='username-tab'
      />
      <Modal show={show} setShow={setShow}>
        <SettingsModalContent name={name} setName={setName} setShow={setShow} />
      </Modal>
    </Container>
  );
};

export default Settings;
