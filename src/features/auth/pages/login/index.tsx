import styles from './styles.module.css';

import { Button } from '../../../../shared/components/button';
import { Input } from '../../../../shared/components/input';
import { FormTemplate } from '../../template';

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
