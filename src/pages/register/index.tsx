import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { FormTemplate } from '../../template/formTemplate';
import { authRegister } from '../../services/authRegister.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../../validations/register/schema';
import type { FormData } from '../../validations/register/schema.ts';

export function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormData) {
    const success = authRegister(data.name, data.email, data.password);

    if (await success) return reset();
  }

  return (
    <FormTemplate onSubmit={handleSubmit(onSubmit)}>
      <h2>Entrar</h2>

      <Input
        {...register('name')}
        id='name'
        labelText='Name'
        type='text'
        placeholder='Type your full name'
        title='Type your full name'
      />
      {errors.name && <span>{errors.name.message}</span>}

      <Input
        {...register('email')}
        id='email'
        labelText='Email'
        type='text'
        placeholder='Type your email'
        title='Type your email'
      />
      {errors.email && <span>{errors.email.message}</span>}

      <Input
        {...register('password')}
        id='password'
        labelText='Password'
        type='text'
        placeholder='Type your password'
        title='Type your password'
      />
      {errors.password && <span>{errors.password.message}</span>}

      <Button type='submit' disabled={isSubmitting}>
        Send
      </Button>
    </FormTemplate>
  );
}
