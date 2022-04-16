import React from 'react'
import CartCards from './Components/CartCards/CartCards'
import CartTotalPrice from './Components/CartTotalPrice/CartTotalPrice'
import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar'
import { Box } from '../../Components/StyledComponents/Box'
import { Container } from '../../Components/StyledComponents/Container'

type Props = {}

const Cart = (props: Props) => {
  return (
    <Container>
      <MobileNavbar title='Корзина' border='none' />
      <Box height='74vh' display='flex' flexDirection='column' justifyContent='space-between' >
        <CartCards />
        <CartTotalPrice />
      </Box>
    </Container>
  );
}

export default Cart