import { api } from '../../../services/axios';

type fetchUserReturn = {
  name: string;
  email: string;
};

export async function fetchUser(): Promise<fetchUserReturn | null> {
  const { data } = await api.get<fetchUserReturn>('/users');

  return data;
}
