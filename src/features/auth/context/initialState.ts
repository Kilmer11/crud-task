import type { AuthState } from '../types/authModel';

export const initialAuthState: AuthState = {
  user: { name: '', email: '' },
  isLoggedIn: false,
  isLoading: false,
  error: false,
};
