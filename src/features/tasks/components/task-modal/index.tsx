import styles from './styles.module.css';

export function TaskModal() {
  return (
    <div className={styles.taskModal}>
      <div className={styles.taskCard}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3>Example task #1</h3>
            <p>Today 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
