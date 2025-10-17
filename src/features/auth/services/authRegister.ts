import { api } from '../../../services/axios';

export async function authRegister(
  name: string,
  email: string,
  password: string,
): Promise<void> {
  await api.post('/auth/register', {
    name,
    email,
    password,
  });
}
