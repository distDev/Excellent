import React from 'react';
import ServicesCards from '../servicesCards';
import { ServicesContentContainer } from './styles/servicesContent';

type Props = {};

export const ServicesContent = (props: Props) => {
  return (
    <ServicesContentContainer>
      <ServicesCards title='Автосервис' />
      <ServicesCards title='Диагностика' />
    </ServicesContentContainer>
  );
};
