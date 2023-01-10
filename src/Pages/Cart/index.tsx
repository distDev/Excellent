import OrderCards from '../../Components/order-cards';
import CartController from './components/cartController/index';
import Navbar from '../../Components/navbar/Navbar';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { routerConst } from '../../Utils/routerConst';
import { useAppSelector } from '../../Hooks/useAppSelector';

type Props = {};

const Cart = (props: Props) => {
  const cartData = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <CartWrapper>
      {cartData.length > 0 && (
        <>
          <Navbar title='Корзина' justify='start' />
          <CartContainer>
            <OrderCards data={cartData}  />
            <CartController />
          </CartContainer>
        </>
      )}

      {!cartData.length && (
        <EmptyCartContainer>
          <div className='empty-cart__box'>
            <EmptyCartImage>
              <img src='/empty-cart-light.svg' alt='empry-cart-light' />
            </EmptyCartImage>
            <EmptyCartContent>
              <EmptyCartText>
                <h4 className='empty-cart__title'>Корзина пуста</h4>
                <p className='empty-cart__subtitle'>
                  Похоже вы не добавили <br /> ни одной услуги
                </p>
              </EmptyCartText>
              <EmptyCartButton
                onClick={() => navigate(routerConst.SERVICES_ROUTE)}
              >
                Перейти к услугам
              </EmptyCartButton>
            </EmptyCartContent>
          </div>
        </EmptyCartContainer>
      )}
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  padding: 15px;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  height: auto;
  gap: 100px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 190px;
  }
`;

const EmptyCartContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .empty-cart__box {
    height: 70vh;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 30px;

    .empty-cart__box {
      height: 70vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .empty-cart__box {
      height: 60vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  }
`;

const EmptyCartImage = styled.div`
  @media (min-width: 320px) and (max-width: 380px) {
    img {
      width: 130px;
      height: 150px;
    }
  }
`;

const EmptyCartContent = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 65px;
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 380px) {
    display: grid;
    gap: 35px;
    width: 100%;
  }
`;

const EmptyCartText = styled.div`
  display: grid;
  gap: 15px;

  .empty-cart__title {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: 24px;
  }

  .empty-cart__subtitle {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    display: grid;
    gap: 15px;
  }

  @media (min-width: 320px) and (max-width: 390px) {
    .empty-cart__title {
      color: ${({ theme: { colors } }) => colors.textMain};
      font-size: 20px;
    }
  }
`;

const EmptyCartButton = styled.button`
  width: 100%;
  padding: 20px;
  margin: 0px auto;
  margin-top: 50px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 500;
  }

  @media (min-width: 320px) and (max-width: 390px) {
    display: none;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 400;
  }
`;
