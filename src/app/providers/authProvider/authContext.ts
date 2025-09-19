import { createContext } from 'react';
import { initialStateAuth } from './initialState';
import type { AuthModel } from '../../../shared/types/authModel';
import type { AuthActionModel } from './authActions';

type AuthContextProps = {
  auth: AuthModel;
  dispatch: React.Dispatch<AuthActionModel>;
};

const initialContextValue = {
  auth: initialStateAuth,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialContextValue);
