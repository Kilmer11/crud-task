import { UserRoundIcon } from 'lucide-react';
import { useAuthContext } from '../../../auth/hooks/useAuthContext';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export function UserModal() {
  const { state } = useAuthContext();

  return (
    <div className={styles.userModal}>
      <Link to={'/upload/image'}>
        <div className={styles.divImage}>
          {state.user.profileUrl ? (
            <img src={state.user.profileUrl} />
          ) : (
            <UserRoundIcon color='#000' />
          )}
        </div>
      </Link>
      <div className={styles.text}>
        <h4>{state.user.name}</h4>
        <p>{state.user.email}</p>
      </div>
    </div>
  );
}
