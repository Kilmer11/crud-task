import { useAuthContext } from '../../../auth/hooks/useAuthContext';
import styles from './styles.module.css';

export function UserModal() {
  const { state } = useAuthContext();

  return (
    <div className={styles.userModal}>
      <div className={styles.divImage}></div>
      <div className={styles.text}>
        <h4>{state.user.name}</h4>
        <p>{state.user.email}</p>
      </div>
    </div>
  );
}
