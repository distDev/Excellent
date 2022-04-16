import React from 'react'
import { Box } from '../../../../Components/StyledComponents/Box'
import { Button } from '../../../../Components/StyledComponents/Button';
import { Text } from '../../../../Components/StyledComponents/Text';
import { Title } from '../../../../Components/StyledComponents/Title';

type Props = {}

const CartTotalPrice = (props: Props) => {
  return (
    <Box gap='20px' margin='0px 0px 80px 0px' display='flex' flexDirection='column'>
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