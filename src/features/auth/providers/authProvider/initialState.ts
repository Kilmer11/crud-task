import type { AuthModel } from '../../types/authModel';

export const initialStateAuth: AuthModel = {
  user: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
