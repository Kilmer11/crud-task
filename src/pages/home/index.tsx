import { Navbar } from '../../features/tasks/components/navbar';
import { TaskModal } from '../../features/tasks/components/task-modal';
import { UserModal } from '../../features/tasks/components/user-modal';
import styles from './styles.module.css';

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
