import { useLocation, useNavigate } from 'react-router-dom';
import { routerConst } from '../../Utils/routerConst';
import styled from 'styled-components/macro';
import { useAppSelector } from '../../Hooks/useAppSelector';

type Props = {};

const PopupButton = (props: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cartData = useAppSelector((state) => state.cart);

  // сумма выбранных услуг
  const totalSum =
    cartData &&
    [...cartData].map((e) => Number(e.price)).reduce((a, b) => a + b);

  return (
    <>
      {pathname === routerConst.CART_ROUTE && null}
      {(pathname === routerConst.SERVICES_ROUTE ||
        pathname === routerConst.MAIN_ROUTE) && (
        <StyledPopupButton onClick={() => navigate('/cart')} data-cy="cart-popup-btn">
          {totalSum} ₽
        </StyledPopupButton>
      )}
    </>
  );
};

export default PopupButton;

const StyledPopupButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  background: ${({ theme: { background } }) => background.primary};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 17px 30px;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { size } }) => size.title.extraSmall};
  z-index: 110;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 480px) {
    position: fixed;
    bottom: 64px;
    right: 15px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background: ${({ theme: { background } }) => background.primary};
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 13px 25px;
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { size } }) => size.title.extraSmall};
    z-index: 110;
  }
`;
