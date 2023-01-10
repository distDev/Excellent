import {
  routerConst,
} from '../../../../Utils/routerConst';
import { RiHomeLine, RiSearchLine, RiUser3Line } from 'react-icons/ri';
import { CgShoppingBag } from 'react-icons/cg';

export const bottomNavLinks = [
  {
    path: routerConst.MAIN_ROUTE,
    icon: <RiHomeLine />,
  },
  {
    path: routerConst.SERVICES_ROUTE,
    icon: <RiSearchLine />,
  },
  {
    path: routerConst.CART_ROUTE,
    icon: <CgShoppingBag />,
  },
];
