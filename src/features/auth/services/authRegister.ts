import { api } from '../../../services/axios';

export async function authRegister(email: string, password: string) {
  const { data } = await api.post('/auth/register', { email, password });

  return { data };
}
