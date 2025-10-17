import type { AuthState } from '../types/authModel';
import { AuthActionTypes, type AuthActionsModel } from './authActions';

export function AuthReducer(
  state: AuthState,
  action: AuthActionsModel,
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        user: { name: action.payload.name, email: action.payload.email },
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };
    }

    case AuthActionTypes.LOGOUT: {
      return state;
    }

    default: {
      return state;
    }
  }
}
