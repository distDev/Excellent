import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../State/store';
import { CART_ORDER_ROUTE, CART_ROUTE } from '../../Utils/routerConst';
import { StyledPopupButton } from '../StyledComponents/StyledPopupButton';

type Props = {};

const PopupButton = (props: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cartData = useAppSelector((state) => state.cart);

  // сумма выбранных услуг
  const totalSum = [...cartData]
    .map((e) => Number(e.price))
    .reduce((a, b) => a + b);

  return (
    <>
      {pathname === CART_ROUTE && null}
      {pathname !== CART_ROUTE && pathname !== CART_ORDER_ROUTE && (
        <StyledPopupButton onClick={() => navigate('/cart')}>
          {totalSum} ₽
        </StyledPopupButton>
      )}
    </>
  );
};

export default PopupButton;
