import { showMessage } from '../../../adapters/showMessage';
import { authLogin } from '../services/authLogin';
import { fetchUser } from '../../user/services/fetchUser';
import { AuthActionTypes } from '../context/authActions';
import { useAuthContext } from './useAuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema, type FormData } from '../validations/login-schema';
import { useNavigate } from 'react-router-dom';
import type { FetchServiceError } from '../../../types/fetchError';

type LoginFormData = {
  email: string;
  password: string;
};

export function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) });

  async function onSubmit(data: LoginFormData) {
    showMessage.dismiss();
    try {
      await authLogin(data.email, data.password);
      const userData = await fetchUser();

      if (userData) {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            name: userData.name,
            email: userData.email,
            profileUrl: userData.profileUrl,
          },
        });
        showMessage.success('User logged in successfully!');
        navigate('/');
        reset();
      }
    } catch (error) {
      const err = error as FetchServiceError;
      showMessage.error(`${err.message}`);
    }
  }

  return { register, handleSubmit, reset, onSubmit, errors, isSubmitting };
}
