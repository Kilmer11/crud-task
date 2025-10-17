/* eslint-disable @typescript-eslint/no-explicit-any */
export type User = {
  name: string;
  email: string;
};

export type AuthState = {
  user: User;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
};
