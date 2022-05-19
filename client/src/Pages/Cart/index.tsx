import OrderCards from '../../Components/orderCards';
import Navbar from '../../Components/navbar/Navbar';
import { Container } from '../../Components/StyledComponents/Container';

type Props = {};

const Cart = (props: Props) => {
  return (
    <Container>
      <Navbar title='Корзина' justify='start' />
      <OrderCards />
    </Container>
  );
};

export default Cart;
