import styles from './styles.module.css';

import { FormTemplate } from '../../template/formTemplate';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authLogin } from '../../features/auth/services/authLogin';
import { schema } from '../../features/auth/validations/login-schema';
import { type FormData } from '../../features/auth/validations/login-schema';
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { AuthActionTypes } from '../../features/auth/context/authActions';
import { showMessage } from '../../adapters/showMessage';
import { fetchUser } from '../../features/auth/services/fetchUser';
import { AxiosError } from 'axios';

type LoginFormData = {
  email: string;
  password: string;
};

export function Login() {
  const { dispatch } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  async function onsubmit(data: LoginFormData) {
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

  return (
    <FormTemplate onSubmit={handleSubmit(onsubmit)}>
      <h2>Entrar</h2>

      <Input
        {...register('email')}
        id='email'
        labelText='Email'
        type='text'
        placeholder='Type your email'
        title='email'
      />
      {errors.email && <span>{errors.email.message}</span>}

      <Input
        {...register('password')}
        id='password'
        labelText='Password'
        type='text'
        placeholder='Type your password'
        title='password'
      />
      {errors.password && <span>{errors.password.message}</span>}

      <section className={styles.divLinks}>
        <a href='#' className={styles.blackLink}>
          Remember me
        </a>
        <a href='#'>Create a account</a>
      </section>

      <Button disabled={isSubmitting}>Send</Button>
    </FormTemplate>
  );
}
