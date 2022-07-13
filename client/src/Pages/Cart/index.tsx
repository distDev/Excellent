import OrderCards from '../../Components/orderCards';
import CartController from './components/cartController/index';
import Navbar from '../../Components/navbar/Navbar';

import { useAppDispatch, useAppSelector } from '../../State/store';
import { CartContainer, ClearCartButton } from './components/cartController/styles/cartController';
import { AiOutlineDelete } from 'react-icons/ai';
import { clearCart } from '../../State/action-creators';
import { Container } from '../../Components/uiComponents/container';

type Props = {};

const Cart = (props: Props) => {
  const cartData = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Navbar title='Корзина' justify='start' />
      {!cartData.length && <h2>Корзина пуста</h2>}
      {cartData.length > 0 && (
        <CartContainer>
          <OrderCards data={cartData} />
          <CartController />
        </CartContainer>
      )}
    </Container>
  );
};

export default Cart;
