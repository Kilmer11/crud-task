import type { AuthModel } from '../../types/authModel';
import { AuthTypes, type AuthActionModel } from './authActions';

export function authReducer(state: AuthModel, action: AuthActionModel) {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST: {
      return state;
    }

    case AuthTypes.LOGIN_SUCCESS: {
      return state;
    }

    case AuthTypes.LOGIN_FAILURE: {
      return state;
    }
  }
}
