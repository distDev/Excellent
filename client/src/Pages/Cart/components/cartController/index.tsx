import {
  CartControllerButton,
  CartControllerContainer,
  CartControllerTotal,
} from './styles/cartController';
import { Title } from '../../../../Components/uiComponents/title';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../../../../State/store';
import { useNavigate } from 'react-router-dom';

type Props = {};

const CartController = (props: Props) => {
  const cartData = useAppSelector((state) => state.cart);
  const cartTotal =
    cartData.length > 0 &&
    cartData.map((e) => Number(e.price)).reduce((a, b) => a + b);

  const navigate = useNavigate();
  const pcView = window.innerWidth > 906;

  if (pcView) {
    return (
      <CartControllerContainer>
        <CartControllerTotal>
          <Title as='h3' variant='extraSmall' color='textSecond'>
            Итого
          </Title>
          <Title as='h3' variant='extraSmall' color='textMain'>
            {cartTotal} ₽
          </Title>
        </CartControllerTotal>
        <CartControllerButton onClick={() => navigate('/cart/order')}>
          Продолжить запись
        </CartControllerButton>
      </CartControllerContainer>
    );
  }
  
  return createPortal(
    <CartControllerContainer>
      <CartControllerTotal>
        <Title as='h3' variant='extraSmall' color='textSecond'>
          Итого
        </Title>
        <Title as='h3' variant='extraSmall' color='textMain'>
          {cartTotal} ₽
        </Title>
      </CartControllerTotal>
      <CartControllerButton onClick={() => navigate('/cart/order')}>
        Продолжить запись
      </CartControllerButton>
    </CartControllerContainer>,
    document.body
  );
};

export default CartController;
