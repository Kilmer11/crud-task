import type { UserModel } from '../types/authModel';

export const AuthActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
} as const;

export type AuthActionsModel =
  | {
      type: typeof AuthActionTypes.LOGIN;
      payload: UserModel;
    }
  | {
      type: typeof AuthActionTypes.LOGOUT;
    };
