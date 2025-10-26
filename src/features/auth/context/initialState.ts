import type { AuthModel } from '../types/authModel';

export const initialAuthState: AuthModel = {
  user: { name: '', email: '', profileUrl: '' },
  isLoggedIn: false,
  isLoading: false,
  error: false,
};
