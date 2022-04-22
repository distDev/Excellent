import CartCards from './Components/cartCards';
import Navbar from '../../Components/navbar/Navbar';
import { Container } from '../../Components/StyledComponents/Container';

type Props = {};

const Cart = (props: Props) => {
  return (
    <Container>
      <Navbar title='Корзина' justify='start' />
      <CartCards />
    </Container>
  );
};

export default Cart;
