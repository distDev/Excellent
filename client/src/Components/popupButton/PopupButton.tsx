import { useLocation } from 'react-router-dom';
import { CART_ROUTE } from '../../Utils/routerConst';
import { StyledPopupButton } from '../StyledComponents/StyledPopupButton';

type Props = {};

const PopupButton = (props: Props) => {
  let { pathname } = useLocation();

  return (
    <>
      {pathname === CART_ROUTE ? (
        <StyledPopupButton bg='dark'>
          
        </StyledPopupButton>
      ) : (
        <StyledPopupButton>
          
        </StyledPopupButton>
      )}
    </>
  );
};

export default PopupButton;
