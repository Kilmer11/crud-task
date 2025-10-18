import { Navbar } from '../../features/tasks/components/navbar';
import { UserModal } from '../../features/tasks/components/user-modal';
import { List } from '../../components/list';
import type { Task } from '../../features/tasks/types/taskModel';

import styles from './styles.module.css';

import { TaskModal } from '../../features/tasks/components/task-modal';
import { useTasks } from '../../features/tasks/hooks/useTasks';

export function Home() {
  const {tasks, loading, handleDelete} = useTasks()

  if (loading) return <h3>Carregando</h3>

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        
        <UserModal/>
           <List renderItem={(Task) => { return <TaskModal handleDelete={handleDelete} id={Task._id} description={Task.description} completed={Task.completed}/>}} items={tasks}/>    
      </div>
    </div>
  );
}
