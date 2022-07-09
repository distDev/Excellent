import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import Cart from '../../Pages/Cart';
import Garage from '../../Pages/Garage';
import Login from '../../Pages/Login';
import Main from '../../Pages/Main';
import Order from '../../Pages/Order';
import OrderSucceess from '../../Pages/OrderSuccess';
import Profile from '../../Pages/Profile';
import ServiceList from '../../Pages/ServiceList';
import Services from '../../Pages/Services';
import Settings from '../../Pages/Settings';
import { useAppSelector } from '../../State/store';
import {
  CART_ORDER_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  PROFILE_GARAGE_ROUTE,
  PROFILE_ROUTE,
  PROFILE_SERVICELIST_ROUTE,
  PROFILE_SETTINGS_ROUTE,
  SERVICEORDER_ROUTE,
  SERVICES_ROUTE,
  SUCCESS_ROUTE,
} from '../../Utils/routerConst';
import { PrivateRoutes, PublicRoutes } from '../../Utils/routes';

type Props = {};

export const AppRouter = (props: Props) => {
  const user = useAppSelector((state) => state.user.phoneNumber);
  const pcView = window.innerWidth > 900;
  return (
    <Routes>
      {PublicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}

      {user && (
        <Route path={PROFILE_ROUTE} element={<Profile />}>
          <Route path={PROFILE_GARAGE_ROUTE} element={<Garage />} />
          <Route path={PROFILE_SERVICELIST_ROUTE} element={<ServiceList />} />
          <Route path={PROFILE_SETTINGS_ROUTE} element={<Settings />} />
        </Route>
      )}
    </Routes>

  );
};
