import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type PrivateRouteProps = {
  isClosed: boolean;
  children: React.ReactNode;
};

export function PrivateRoute({ children, isClosed }: PrivateRouteProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn && isClosed) {
      navigate('/login', { state: { from: location.pathname }, replace: true });
    }
  }, [isLoggedIn, isClosed, navigate, location.pathname]);

  if (isLoggedIn || !isClosed) {
    return children;
  }

  return null;
}
