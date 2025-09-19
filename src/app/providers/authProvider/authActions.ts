import type { AuthModel } from '../../../shared/types/authModel';

export enum AuthTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

export type AuthActionModel =
  | {
      type: AuthTypes.LOGIN_REQUEST;
      payload: AuthModel;
    }
  | {
      type: AuthTypes.LOGIN_SUCCESS;
      payload: AuthModel;
    }
  | {
      type: AuthTypes.LOGIN_FAILURE;
      payload: AuthModel;
    };
