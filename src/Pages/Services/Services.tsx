
import { Container } from '../../Components/ui-components/container';
import Filters from './Components/filters/filters'
import { ServicesContent } from './Components/services-content/servicesContent';

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
