import React from 'react'
import { Box } from '../StyledComponents/Box'
import { Button } from '../StyledComponents/Button';
import { Text } from '../StyledComponents/Text';
import { Title } from '../StyledComponents/Title';

type Props = {}

const CartTotalPrice = (props: Props) => {
  return (
    <Box gap='20px' display='flex' flexDirection='column'>
      <Box display='flex' justifyContent='space-between'>
        <Title color='grey'>Итого:</Title>
        <Title>1500 ₽</Title>
      </Box>
      <Box>
        <Button background='dark'>Продолжить запись</Button>
      </Box>
    </Box>
  );
}

export default CartTotalPrice