import type { AuthModel } from '../types/authModel';

export const initialAuthState: AuthModel = {
  userData: { user: '', email: '' },
  isLoggedIn: false,
  isLoading: false,
  error: false,
};
