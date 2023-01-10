import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Garage from '../../Pages/Garage';
import Profile from '../../Pages/Profile';
import ServiceList from '../../Pages/ServiceList';
import Settings from '../../Pages/Settings';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { routerConst } from '../../Utils/routerConst';
import { PublicRoutes } from '../../Utils/routes';

type Props = {};

export const AppRouter = (props: Props) => {
  const user = useAppSelector((state) => state.user?.phoneNumber);

  // Скролл к началу страницы при роутинге
  const Wrapper = ({ children }: { children: any }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Wrapper>
      <Routes>
        {PublicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route path='*' element={<Navigate to='/' replace />} />
        {user && (
          <Route path={routerConst.PROFILE_ROUTE} element={<Profile />}>
            <Route
              path={routerConst.PROFILE_GARAGE_ROUTE}
              element={<Garage />}
            />
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
    </Wrapper>
  );
};
