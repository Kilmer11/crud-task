/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthModel = {
  user: { user: string; email: string }[];
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
};
