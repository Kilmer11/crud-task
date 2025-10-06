import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { FormTemplate } from '../../template/formTemplate';

export function Register() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <FormTemplate onSubmit={handleSubmit}>
      <h2>Entrar</h2>

      <Input
        id='name'
        labelText='Name'
        type='text'
        placeholder='Type your full name'
        title='Type your full name'
      />

      <Input
        id='email'
        labelText='Email'
        type='text'
        placeholder='Type your email'
        title='Type your email'
      />

      <Input
        id='password'
        labelText='Password'
        type='text'
        placeholder='Type your password'
        title='Type your password'
      />

      <Button>Send</Button>
    </FormTemplate>
  );
}
