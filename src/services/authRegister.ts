import { showMessage } from '../adapters/showMessage';
import { api } from './axios';

export async function authRegister(
  name: string,
  email: string,
  password: string,
) {
  showMessage.dismiss();
  try {
    await api.post('/auth/register', {
      name,
      email,
      password,
    });
    showMessage.success('Usuário cadastrado com sucesso!');

    return true;
  } catch (error: unknown) {
    showMessage.error(`Erro ao cadastrar o usuário`);

    return false;
  }
}
