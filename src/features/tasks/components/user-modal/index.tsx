import styles from './styles.module.css';

export function UserModal() {
  return (
    <div className={styles.userModal}>
      <div className={styles.divImage}></div>
      <div className={styles.text}>
        <h4>Olá, Kilmer</h4>
        <p>kilmerandrade45@gmail.com</p>
      </div>
    </div>
  );
}
