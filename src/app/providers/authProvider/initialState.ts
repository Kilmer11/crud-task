import type { AuthModel } from '../../../shared/types/authModel';

export const initialStateAuth: AuthModel = {
  user: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
