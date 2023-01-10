import styled from 'styled-components/macro';
import { Title } from '../../../../Components/ui-components/title';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../Hooks/useAppSelector';

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

const CartControllerContainer = styled.div`
  max-height: 170px;
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px;
  border-radius: 20px;
  box-shadow: 0px 6px 37px 9px rgba(0, 0, 0, 0.03);
  background: ${({ theme: { background } }) => background.mainBg};

  @media screen and (max-width: 480px) {
    width: 100%;
    position: fixed;
    top: auto;
    bottom: 49px;
    padding: 15px;
    background: ${({ theme: { background } }) => background.white};
    border-top: 1px solid ${({ theme: { colors } }) => colors.border};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0;
  }
`;

const CartControllerTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const CartControllerButton = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { background } }) => background.secondBg};
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors } }) => colors.textMain};
    color: ${({ theme: { background } }) => background.secondBg};
    font-weight: 500;
  }
`;

const ClearCartButton = styled.button`
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 8px;
    right: 15px;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    border: none;
    background: ${({ theme: { background } }) => background.button};
    cursor: pointer;

    svg {
      width: 60%;
      height: 60%;
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
  }
`;
