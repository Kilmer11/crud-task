import { useReducer } from 'react';
import { AuthReducer } from './authReducer';
import { initialAuthState } from './initialState';
import { AuthContext } from './authContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
