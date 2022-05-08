import {
  CART_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  SERVICES_ROUTE,
} from '../../../../Utils/routerConst';
import { RiHomeLine, RiSearchLine, RiUser3Line } from 'react-icons/ri';
import { CgShoppingBag } from 'react-icons/cg';

export const bottomNavLinks = [
  {
    path: MAIN_ROUTE,
    icon: <RiHomeLine />,
  },
  {
    path: SERVICES_ROUTE,
    icon: <RiSearchLine />,
  },
  {
    path: CART_ROUTE,
    icon: <CgShoppingBag />,
  },
 
];
