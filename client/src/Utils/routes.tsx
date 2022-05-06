import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Main from "../Pages/Main";
import Garage from "../Pages/Garage";
import Profile from "../Pages/Profile";
import ServiceList from "../Pages/ServiceList";
import Settings from "../Pages/Settings";
import Services from "../Pages/Services";
import { CART_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_GARAGE_ROUTE, PROFILE_ROUTE, PROFILE_SERVICELIST_ROUTE, PROFILE_SETTINGS_ROUTE, SERVICES_ROUTE } from "./routerConst";

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
  {
    path: PROFILE_ROUTE,
    component: <Profile />,
  },
  {
    path: PROFILE_SETTINGS_ROUTE,
    component: <Settings />,
  },
  {
    path: PROFILE_GARAGE_ROUTE,
    component: <Garage />,
  },
  {
    path: PROFILE_SERVICELIST_ROUTE,
    component: <ServiceList />,
  },
];

export const PrivateRoutes = [
  {
    path: PROFILE_ROUTE,
    component: Profile,
  },
];