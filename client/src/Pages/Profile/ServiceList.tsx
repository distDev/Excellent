import React from 'react'
import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import { ServiceCard } from '../../Components/ServiceCard/ServiceCard';
import { StyledContainer } from '../../Components/StyledComponents/StyledContainer';

type Props = {}

const ServiceList = (props: Props) => {
  return (
    <StyledContainer>
      <MobileNavbar title='Записи' back={true} />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </StyledContainer>
  );
}

export default ServiceList