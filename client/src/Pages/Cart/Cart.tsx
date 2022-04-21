import React from 'react';
import CartCards from './Components/cartCards';
import { MobileNavbar } from '../../Components/navbar';
import { Box } from '../../Components/StyledComponents/Box';
import { Container } from '../../Components/StyledComponents/Container';

type Props = {};

const Cart = (props: Props) => {
  return (
    <Container>
      <MobileNavbar title='Корзина' border='none' />
      <Box>
        <CartCards />
      </Box>
    </Container>
  );
};

export default Cart;
