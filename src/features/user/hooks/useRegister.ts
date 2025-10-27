import { showMessage } from '../../../adapters/showMessage';
import { userRegister } from '../services/userRegister';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerSchema, type FormData } from '../validations/register-schema';
import type { FetchServiceError } from '../../../types/fetchError';

export function useRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  async function onSubmit(data: FormData) {
    showMessage.dismiss();
    try {
      await userRegister(data.name, data.email, data.password);
      showMessage.success('User registered successfully!');
      reset();
    } catch (error) {
      const err = error as FetchServiceError;
      showMessage.error(`${err.message}`);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
}
