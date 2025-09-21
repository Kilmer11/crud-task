import styles from './styles.module.css';

import { Button } from '../../../../components/button';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>My tasks</h1>
      <Button>New Task</Button>
    </nav>
  );
}
