import styles from './styles.module.css';

import { Navbar } from '../../components/navbar';
import { TaskModal } from '../../components/task-modal';
import { UserModal } from '../../components/user-modal';

export function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        <UserModal />
        <TaskModal />
      </div>
    </div>
  );
}
