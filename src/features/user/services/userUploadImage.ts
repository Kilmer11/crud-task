import { AxiosError } from 'axios';
import { api } from '../../../services/axios';
import type { FetchServiceError } from '../../../types/fetchError';

export async function userUploadImage(formData: FormData) {
  try {
    await api.post('/users/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
