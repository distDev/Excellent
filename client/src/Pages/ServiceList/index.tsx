import Navbar from '../../Components/navbar/Navbar';
import { Container } from '../../Components/StyledComponents/Container';
import {ServiceListCards} from './components/cardsService/index'


type Props = {};

const ServiceList = (props: Props) => {
  return (
    <Container>
      <Navbar title='Записи' back={true} variant='bottomLine' />
      <ServiceListCards />
    </Container>
  );
};

export default ServiceList;
