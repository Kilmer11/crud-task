import type { AuthModel } from '../types/authModel';
import { AuthActionTypes, type AuthActionsModel } from './authActions';

export function AuthReducer(
  state: AuthModel,
  action: AuthActionsModel,
): AuthModel {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          profileUrl: action.payload.profileUrl,
        },
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };
    }

    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        user: { name: '', email: '', profileUrl: '' },
        isLoading: false,
        isLoggedIn: false,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}
