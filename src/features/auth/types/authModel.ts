import type { User } from '../../user/types/userModel';

export type AuthModel = {
  user: User;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};
