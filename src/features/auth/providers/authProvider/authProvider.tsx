import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { initialStateAuth } from './initialState';
import { AuthContext } from './authContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, dispatch] = useReducer(authReducer, initialStateAuth);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
