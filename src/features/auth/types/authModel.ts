/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserModel = {
  user: string;
  email: string;
};

export type AuthModel = {
  userData: UserModel;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
};
