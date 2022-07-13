import { Route, Routes } from 'react-router-dom';
import Garage from '../../Pages/Garage';
import Profile from '../../Pages/Profile';
import ServiceList from '../../Pages/ServiceList';

import Settings from '../../Pages/Settings';
import { useAppSelector } from '../../State/store';
import { routerConst } from '../../Utils/routerConst';

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
        <Route path={routerConst.PROFILE_ROUTE} element={<Profile />}>
          <Route path={routerConst.PROFILE_GARAGE_ROUTE} element={<Garage />} />
          <Route
            path={routerConst.PROFILE_SERVICELIST_ROUTE}
            element={<ServiceList />}
          />
          <Route
            path={routerConst.PROFILE_SETTINGS_ROUTE}
            element={<Settings />}
          />
        </Route>
      )}
    </Routes>
  );
};
