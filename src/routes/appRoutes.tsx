import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { FormTask } from '../pages/formTask';
import { PrivateRoute } from './privateRoute';

import { Route, Routes } from 'react-router-dom';

const routes = [
  { path: '/', element: <Home />, isClosed: false },
  { path: '/login', element: <Login />, isClosed: false },
  { path: '/register', element: <Register />, isClosed: false },
  { path: '/create/task', element: <FormTask />, isClosed: false },
  { path: '*', element: <Home />, isClosed: false },
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
