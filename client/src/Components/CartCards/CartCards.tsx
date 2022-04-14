import React from 'react';
import SmallCard from '../SmallCard/SmallCard';
import { Box } from '../StyledComponents/Box';

type Props = {};

const CartCards = (props: Props) => {
  return (
    <Box>
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </Box>
  );
};

export default CartCards;
