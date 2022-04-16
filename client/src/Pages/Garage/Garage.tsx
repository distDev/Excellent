import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import MobileTabItem from '../../Components/MobileTab/MobileTab';
import { Container } from '../../Components/StyledComponents/Container';
import { IoCarSportOutline } from 'react-icons/io5';

type Props = {};

const Garage = () => {
  return (
    <Container>
      <MobileNavbar title='Гараж' back={true} margin='auto' />
      <MobileTabItem
        icon={<IoCarSportOutline />}
        title='Reno Logan'
        alignItems='center'
      />
      <MobileTabItem
        icon={<IoCarSportOutline />}
        title='Bmw X5'
        alignItems='center'
      />
      <MobileTabItem
        icon={<IoCarSportOutline />}
        title='Opel Astra'
        alignItems='center'
      />
    </Container>
  );
};

export default Garage;