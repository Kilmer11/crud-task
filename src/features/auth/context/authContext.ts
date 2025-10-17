import React, { createContext } from 'react';
import { initialAuthState } from './initialState';
import type { AuthState } from '../types/authModel';
import type { AuthActionsModel } from './authActions';

type AuthContextProps = {
  state: AuthState;
  dispatch: React.Dispatch<AuthActionsModel>;
};

export const initialState: AuthContextProps = {
  state: initialAuthState,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialState);
