import React from 'react';
import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import { ServiceCard } from './Components/ServiceListCard/ServiceListCard';
import { Container } from '../../Components/StyledComponents/Container';

type Props = {};

const ServiceList = (props: Props) => {
  return (
    <Container>
      <MobileNavbar title='Записи' back={true} margin='auto' />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </Container>
  );
};

export default ServiceList;
