import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import MobileTab from '../../Components/MobileTab/MobileTab';
import { StyledContainer } from '../../Components/StyledComponents/StyledContainer';
import { IoCarSportOutline } from 'react-icons/io5';

type Props = {};

const Garage = (props: Props) => {
  return (
    <StyledContainer>
      <MobileNavbar title='Гараж' back={true} />
      <MobileTab icon={<IoCarSportOutline />} title='Reno Logan' jc='center' />
      <MobileTab icon={<IoCarSportOutline />} title='Bmw X5' jc='center' />
      <MobileTab icon={<IoCarSportOutline />} title='Opel Astra' jc='center' />
    </StyledContainer>
  );
};

export default Garage;
