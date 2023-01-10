import Navbar from '../../Components/navbar/Navbar';
import { Container } from '../../Components/ui-components/container';
import { ServiceListCards } from './components/cards-service/index';

type Props = {};

const ServiceList = (props: Props) => {
  const pcView = window.innerWidth > 900;
  return (
    <Container>
      {!pcView && (
        <Navbar title='Записи' back={true} variant='bottomLine' sticky={true} />
      )}
      <ServiceListCards />
    </Container>
  );
};

export default ServiceList;
