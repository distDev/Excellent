import React from 'react'
import { MobileNavbar } from '../Components/MobileNavbar/MobileNavbar'
import { Container } from '../Components/StyledComponents/Container'

type Props = {}

const Cart = (props: Props) => {
  return (
    <Container>
      <MobileNavbar title='Корзина' />
      
    </Container>
  )
}

export default Cart