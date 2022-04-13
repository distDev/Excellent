import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import MobileTab from '../../Components/MobileTab/MobileTab';
import { Container } from '../../Components/StyledComponents/Container';
import { IoCarSportOutline } from 'react-icons/io5';

type Props = {};

const Garage = () => {
  return (
    <Container>
      <MobileNavbar title='Гараж' back={true} margin='auto' />
      <MobileTab
        icon={<IoCarSportOutline />}
        title='Reno Logan'
        alignItems='center'
      />
      <MobileTab
        icon={<IoCarSportOutline />}
        title='Bmw X5'
        alignItems='center'
      />
      <MobileTab
        icon={<IoCarSportOutline />}
        title='Opel Astra'
        alignItems='center'
      />
    </Container>
  );
};

export default Garage;
