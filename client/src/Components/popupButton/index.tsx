import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../State/store';
import {
  routerConst,
} from '../../Utils/routerConst';
import { StyledPopupButton } from './styles/popupButton';

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
      {pathname !== routerConst.CART_ROUTE &&
        pathname !== routerConst.CART_ORDER_ROUTE && (
          <StyledPopupButton onClick={() => navigate('/cart')}>
            {totalSum} ₽
          </StyledPopupButton>
        )}
    </>
  );
};

export default PopupButton;
