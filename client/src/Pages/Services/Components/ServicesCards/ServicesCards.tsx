import React, { FC } from 'react'
import { Title } from '../../../../Components/StyledComponents/Title'

type Props = {
    title: string;
}

const ServicesCards: FC<Props> = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Grid>
          
      </Grid>
    </div>
  );
};

export default ServicesCards