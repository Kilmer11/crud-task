import styles from './styles.module.css';

import { Button } from '../../components/button';

export function FormTask() {
  return (
    <div className={styles.divForm}>
      <div className={styles.formTask}>
        <h2>Create task</h2>

        <textarea
          className={styles.textarea}
          placeholder='Describe your task..'
        />

        <div className={styles.divButton}>
          <Button size='small' variant='cancel'>
            Cancel
          </Button>
          <Button size='small'>Save</Button>
        </div>
      </div>
    </div>
  );
}
