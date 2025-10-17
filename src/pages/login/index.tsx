import styles from './styles.module.css';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { useLogin } from '../../features/auth/hooks/useLogin';
import { FormTemplate } from '../../template/formTemplate';

export function Login() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useLogin();

  return (
    <FormTemplate onSubmit={handleSubmit(onSubmit)}>
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
