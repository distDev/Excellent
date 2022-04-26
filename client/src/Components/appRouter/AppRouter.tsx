import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from '../../Utils/routes';

type Props = {};

export const AppRouter = (props: Props) => {
  return (
    <Routes>
      {PublicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};
