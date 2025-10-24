import { api } from '../../../services/axios';

export async function authLogout(): Promise<void> {
  await api.post('/auth/logout');
}
