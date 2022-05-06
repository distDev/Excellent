import { Container } from '../../Components/StyledComponents/Container';
import Filters from './components/filters/index'
import { ServicesContent } from './components/servicesContent';

type Props = {};

const Services = (props: Props) => {
  return (
    <Container>
      <Filters />
      <ServicesContent />
    </Container>
  );
};

export default Services;
