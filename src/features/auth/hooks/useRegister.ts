import { showMessage } from '../../../adapters/showMessage';
import { authRegister } from '../services/authRegister';
import { AxiosError } from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema, type FormData } from '../../../validations/register/schema';

export function useRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormData) {
    showMessage.dismiss();
    try {
      await authRegister(data.name, data.email, data.password);
      showMessage.success('User registered successfully!');
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        showMessage.error(
          `${error.response?.status === 401 && 'Email already exists!'}`,
        );
      } else {
        showMessage.error('Internal error');
      }
    }
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
}
