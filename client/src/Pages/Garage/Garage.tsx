import { Container } from '../../Components/StyledComponents/Container';
import { IoCarSportOutline } from 'react-icons/io5';
import MobileTab from '../../Components/mobileTab';
import Navbar from '../../Components/navbar/Navbar';

type Props = {};

const Garage = () => {
  return (
    <Container>
      <Navbar title='Гараж' back={true} variant='bottomLine' />
      <MobileTab icon={<IoCarSportOutline />} title='Reno Logan' />
    </Container>
  );
};

export default Garage;
