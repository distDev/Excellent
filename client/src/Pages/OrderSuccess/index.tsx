import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../Components/uiComponents/container';
import { Title } from '../../Components/uiComponents/title';
import { routerConst } from '../../Utils/routerConst';
import {
  OrderSuccessButton,
  OrderSuccessContent,
  OrderSuccessImg,
} from './styles/orderSuccess';

const OrderSucceess = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <OrderSuccessContent>
        <OrderSuccessImg src='/success.png' />
        <Title color='textMain' variant='normal'>
          Заявка успешно отправлена
        </Title>
        <OrderSuccessButton onClick={() => navigate(routerConst.MAIN_ROUTE)}>
          На главную
        </OrderSuccessButton>
      </OrderSuccessContent>
    </Container>
  );
};

export default OrderSucceess;
