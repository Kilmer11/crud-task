import { PrivateRoute } from './privateRoute';
import { Login } from '../../features/auth/pages/login';
import { Register } from '../../features/auth/pages/register';

import { Route, Routes } from 'react-router-dom';

const routes = [
  { path: '/login', element: <Login />, isClosed: false },
  { path: '/register', element: <Register />, isClosed: false },
];

export function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, element, isClosed }) => (
        <Route
          path={path}
          element={<PrivateRoute isClosed={isClosed}>{element}</PrivateRoute>}
        />
      ))}
    </Routes>
  );
}
