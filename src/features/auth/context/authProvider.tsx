import { useEffect, useReducer } from 'react';
import { AuthReducer } from './authReducer';
import { initialAuthState } from './initialState';
import { AuthContext } from './authContext';
import type { AuthModel } from '../types/authModel';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const storedState = localStorage.getItem('authState');
  const parsedState: AuthModel = storedState
    ? JSON.parse(storedState)
    : initialAuthState;

  const [state, dispatch] = useReducer(AuthReducer, parsedState);

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
