/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '../../user/types/userModel';

export type AuthModel = {
  user: User;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
};
