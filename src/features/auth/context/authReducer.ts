import type { AuthModel } from '../types/authModel';
import { AuthActionTypes, type AuthActionsModel } from './authActions';

export function AuthReducer(
  state: AuthModel,
  action: AuthActionsModel,
): AuthModel {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return state;
    }

    case AuthActionTypes.LOGOUT: {
      return state;
    }

    default: {
      return state;
    }
  }
}
