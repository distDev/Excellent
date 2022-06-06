import OrderCards from '../../Components/orderCards';
import CartController from './components/cartController/index';
import Navbar from '../../Components/navbar/Navbar';
import { Container } from '../../Components/StyledComponents/Container';
import { useAppSelector } from '../../State/store';

type Props = {};

const Cart = (props: Props) => {
  const cartData = useAppSelector((state) => state.cart);

  return (
    <Container>
      <Navbar title='Корзина' justify='start' />
      <OrderCards />
      {cartData.length > 0 && <CartController />}
    </Container>
  );
};

export default Cart;
