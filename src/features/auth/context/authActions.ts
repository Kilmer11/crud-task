import type { User } from '../types/authModel';

export const AuthActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
} as const;

export type AuthActionsModel =
  | {
      type: typeof AuthActionTypes.LOGIN;
      payload: User;
    }
  | {
      type: typeof AuthActionTypes.LOGOUT;
    };
