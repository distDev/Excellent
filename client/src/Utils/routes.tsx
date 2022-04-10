import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Main from "../Pages/Main";
import Profile from "../Pages/Profile";
import Services from "../Pages/Services";
import { CART_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, SERVICES_ROUTE } from "./routerConst";

export const PublicRoutes = [
  {
    path: MAIN_ROUTE,
    component: <Main />,
  },
  {
    path: SERVICES_ROUTE,
    component: <Services />,
  },
  {
    path: CART_ROUTE,
    component: <Cart />,
  },
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
];

export const PrivateRoutes = [
  {
    path: PROFILE_ROUTE,
    component: Profile,
  },
];