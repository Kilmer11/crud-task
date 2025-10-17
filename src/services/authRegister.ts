import { AxiosError } from 'axios';
import { showMessage } from '../adapters/showMessage';
import { api } from './axios';

export async function authRegister(
  name: string,
  email: string,
  password: string,
): Promise<boolean> {
  showMessage.dismiss();
  try {
    await api.post('/auth/register', {
      name,
      email,
      password,
    });
    showMessage.success('Usuário cadastrado com sucesso!');

    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      showMessage.error(`${error.response?.status && 'Email already exists!'}`);
    } else {
      showMessage.error('Internal error');
    }

    return false;
  }
}
