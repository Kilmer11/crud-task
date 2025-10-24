import styles from './styles.module.css';

import { Navbar } from '../../features/tasks/components/navbar';
import { UserModal } from '../../features/tasks/components/user-modal';
import { List } from '../../components/list';
import { TaskModal } from '../../features/tasks/components/task-modal';
import { useTasks } from '../../features/tasks/hooks/useTasks';
import { Loading } from '../../components/loading';
import { ConfirmModal } from '../../components/confirmModal';

export function Home() {
  const { tasks, loading, handleDelete, handleUpdate } = useTasks();

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        <UserModal />
        {tasks && (
          <List
            renderItem={task => {
              return (
                <TaskModal
                  id={task._id}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  description={task.description}
                  completed={task.completed}
                />
              );
            }}
            items={tasks}
          />
        )}
      </div>
    </div>
  );
}
