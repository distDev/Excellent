import { Container } from '../../Components/StyledComponents/Container';
import Filters from './Components/Filters';
import { ServicesContent } from './Components/ServicesContent/ServicesContent';

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
