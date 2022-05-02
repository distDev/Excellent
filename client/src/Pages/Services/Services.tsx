import { Container } from '../../Components/StyledComponents/Container';
import Filters from './Components/filters/index'
import { ServicesContent } from './Components/servicesContent/ServicesContent';

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
