import type { User } from '../../user/types/userModel';

export const AuthActionTypes = {
  REQUEST: 'REQUEST',
  FAILURE: 'FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
} as const;

export type AuthOperation = 'LOGIN' | 'LOGOUT' | 'UPLOAD_IMAGE';

export type AuthActionsModel =
  | {
      type: typeof AuthActionTypes.REQUEST;
      payload: { operation: AuthOperation };
    }
  | {
      type: typeof AuthActionTypes.FAILURE;
      payload: { operation: AuthOperation; message: string };
    }
  | {
      type: typeof AuthActionTypes.LOGIN_SUCCESS;
      payload: User;
    }
  | {
      type: typeof AuthActionTypes.LOGOUT_SUCCESS;
    }
  | {
      type: typeof AuthActionTypes.UPLOAD_IMAGE_SUCCESS;
      payload: Pick<User, 'profileUrl'>;
    };
