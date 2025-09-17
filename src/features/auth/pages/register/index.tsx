import { Button } from '../../../../shared/components/button';
import { Input } from '../../../../shared/components/input';
import { FormTemplate } from '../../template';

export function Register() {
  return (
    <FormTemplate>
      <h2>Entrar</h2>

      <Input
        id='name'
        labelText='Name'
        type='text'
        placeholder='Type your name'
      />

      <Input
        id='email'
        labelText='Email'
        type='text'
        placeholder='Type your email'
      />

      <Input
        id='password'
        labelText='Password'
        type='text'
        placeholder='Type your password'
      />

      <Button text='Send' />
    </FormTemplate>
  );
}
