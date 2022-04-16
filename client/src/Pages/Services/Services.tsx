import React from 'react'
import { Container } from '../../Components/StyledComponents/Container'
import Filters from './Components/Filters'
import { StyledFilters } from './Components/StyledComponents/StyledFilters'

type Props = {}

const Services = (props: Props) => {
  return (
    <Container>
      <Filters />
      {/* <ServicesContent /> */}
    </Container>
  );
}

export default Services