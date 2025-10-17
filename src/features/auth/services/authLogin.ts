/* eslint-disable react-hooks/rules-of-hooks */
import { api } from '../../../services/axios';

export async function authLogin(
  email: string,
  password: string,
): Promise<void> {
  await api.post('/auth/login', { email, password });
}
