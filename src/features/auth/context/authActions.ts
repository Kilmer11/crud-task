import type { User } from '../../user/types/userModel';

export const AuthActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPLOAD_IMAGE: 'UPLOAD_IMAGE',
} as const;

export type AuthActionsModel =
  | {
      type: typeof AuthActionTypes.LOGIN;
      payload: User;
    }
  | {
      type: typeof AuthActionTypes.LOGOUT;
    }
  | {
      type: typeof AuthActionTypes.UPLOAD_IMAGE;
      payload: Pick<User, 'profileUrl'>;
    };
