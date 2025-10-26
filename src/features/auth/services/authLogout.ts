import { AxiosError } from 'axios';
import { api } from '../../../services/axios';
import type { FetchServiceError } from '../../../types/fetchError';

export async function authLogout(): Promise<void> {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    if (error instanceof AxiosError) {
      throw {
        message: error.response?.data.errors,
        status: error.status,
      } as FetchServiceError;
    }

    throw {
      message: 'An unexpected error ocurred',
      status: 500,
    } as FetchServiceError;
  }
}
