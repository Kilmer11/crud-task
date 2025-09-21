import styles from './styles.module.css';

import { FormTemplate } from '../../template';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

export function Login() {
  return (
    <FormTemplate>
      <h2>Entrar</h2>

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

      <section className={styles.divLinks}>
        <a href='#' className={styles.blackLink}>
          Remember me
        </a>
        <a href='#'>Create a account</a>
      </section>

      <Button>Send</Button>
    </FormTemplate>
  );
}
