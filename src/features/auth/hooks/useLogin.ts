import { showMessage } from '../../../adapters/showMessage';
import { authLogin } from '../services/authLogin';
import { fetchUser } from '../services/fetchUser';
import { AuthActionTypes } from '../context/authActions';
import { useAuthContext } from './useAuthContext';
import { AxiosError } from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema, type FormData } from '../validations/login-schema';

type LoginFormData = {
  email: string;
  password: string;
};

export function useLogin() {
  const { dispatch } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  async function onSubmit(data: LoginFormData) {
    showMessage.dismiss();
    try {
      await authLogin(data.email, data.password);
      const userData = await fetchUser();

      if (userData) {
        dispatch({
          type: AuthActionTypes.LOGIN,
          payload: { name: userData.name, email: userData.email },
        });
        showMessage.success('User logged in successfully!');
        reset();
      } else {
        console.log('Null ou undefined');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        showMessage.error(`${error.response?.data.errors}`);
      } else {
        showMessage.error('Internal error');
      }
    }
  }

  return { register, handleSubmit, reset, onSubmit, errors, isSubmitting };
}
