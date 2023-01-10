import Cart from '../Pages/Cart';
import Main from '../Pages/Main';
import Services from '../Pages/Services/Services';
import Order from '../Pages/Order/index';
import OrderSuccess from '../Pages/OrderSuccess';
import About from '../Pages/About';
import { routerConst } from './routerConst';

export const PublicRoutes = [
  {
    path: routerConst.MAIN_ROUTE,
    component: <Main />,
  },
  {
    path: routerConst.SERVICES_ROUTE,
    component: <Services />,
  },
  {
    path: routerConst.CART_ROUTE,
    component: <Cart />,
  },
  {
    path: routerConst.CART_ORDER_ROUTE,
    component: <Order />,
  },
  {
    path: routerConst.SUCCESS_ROUTE,
    component: <OrderSuccess />,
  },
  {
    path: routerConst.ABOUT_ROUTE,
    component: <About />,
  },
];
