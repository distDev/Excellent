import React, { FC } from 'react';
import Card from '../../../../Components/card';
import { Box } from '../../../../Components/StyledComponents/Box';
import { Grid } from '../../../../Components/StyledComponents/Grid';

import { Title } from '../../../../Components/StyledComponents/Title';

type Props = {
  title?: string;
};

const ServicesCards: FC<Props> = ({ title }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};

export default ServicesCards;
