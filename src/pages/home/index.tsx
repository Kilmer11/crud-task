import styles from './styles.module.css';

import { Navbar } from '../../components/navbar';
import { UserModal } from '../../components/user-modal';
import { List } from '../../components/list';
import { TaskModal } from '../../components/task-modal';
import { useTasks } from '../../features/tasks/hooks/useTasks';
import { Loading } from '../../components/loading';

export function Home() {
  const { tasks, loading, handleDelete, handleUpdate } = useTasks();

  if (loading) return <Loading />;

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
