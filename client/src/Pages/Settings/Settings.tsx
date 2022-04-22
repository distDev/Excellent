import { RiUser3Line } from 'react-icons/ri';
import { CgSmartphone } from 'react-icons/cg';
import { Container } from '../../Components/StyledComponents/Container';
import MobileTab from '../../Components/mobileTab';
import Navbar from '../../Components/navbar/Navbar';

type Props = {};

const Settings = (props: Props) => {
  return (
    <Container>
      <Navbar title='Настройки' back={true} variant='bottomLine' />
      <MobileTab icon={<CgSmartphone />} title='+7 (925) 380-25-73' />
      <MobileTab icon={<RiUser3Line />} title='Дмитрий' />
    </Container>
  );
};

export default Settings;
