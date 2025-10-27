import type { AuthModel } from '../types/authModel';
import { AuthActionTypes, type AuthActionsModel } from './authActions';

export function AuthReducer(
  state: AuthModel,
  action: AuthActionsModel,
): AuthModel {
  switch (action.type) {
    case AuthActionTypes.REQUEST: {
      return { ...state, isLoading: true, error: null };
    }

    case AuthActionTypes.FAILURE: {
      return { ...state, isLoading: false, error: action.payload.message };
    }

    case AuthActionTypes.LOGIN_SUCCESS: {
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

    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        user: { name: '', email: '', profileUrl: '' },
        isLoading: false,
        isLoggedIn: false,
        error: null,
      };
    }

    case AuthActionTypes.UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          profileUrl: action.payload.profileUrl,
        },
        isLoading: false,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}
