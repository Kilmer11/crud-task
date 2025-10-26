import { AxiosError } from 'axios';
import { api } from '../../../services/axios';
import type { FetchServiceError } from '../../../types/fetchError';
import type { User } from '../types/userModel';

export async function fetchUser(): Promise<User | null> {
  try {
    const { data } = await api.get<User>('/users');
    return data;
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
