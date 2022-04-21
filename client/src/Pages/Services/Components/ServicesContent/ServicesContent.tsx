import React from 'react';
import ServicesCards from '../ServicesCards/ServicesCards';
import { StyledServicesContent } from '../StyledComponents/StyledServicesContent';

type Props = {};

export const ServicesContent = (props: Props) => {
  return (
    <StyledServicesContent>
      <ServicesCards title='Автосервис' />
      <ServicesCards title='Диагностика' />
    </StyledServicesContent>
  );
};
