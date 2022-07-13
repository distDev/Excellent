import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import Main from '../Pages/Main';
import Garage from '../Pages/Garage';
import Profile from '../Pages/Profile';
import ServiceList from '../Pages/ServiceList';
import Settings from '../Pages/Settings';
import Services from '../Pages/Services';
import Order from '../Pages/Order/index';
import OrderSuccess from '../Pages/OrderSuccess';
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
    path: routerConst.LOGIN_ROUTE,
    component: <Login />,
  },
  {
    path: routerConst.SUCCESS_ROUTE,
    component: <OrderSuccess />,
  },
];

export const PrivateRoutes = [
  {
    path: routerConst.PROFILE_ROUTE,
    component: <Profile />,
  },
  {
    path: routerConst.PROFILE_GARAGE_ROUTE,
    component: <Garage />,
  },
  {
    path: routerConst.PROFILE_SERVICELIST_ROUTE,
    component: <ServiceList />,
  },
  {
    path: routerConst.PROFILE_SETTINGS_ROUTE,
    component: <Settings />,
  },
];
