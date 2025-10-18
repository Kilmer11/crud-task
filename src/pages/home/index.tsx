import { Navbar } from '../../features/tasks/components/navbar';
import { UserModal } from '../../features/tasks/components/user-modal';
import { List } from '../../components/list';
import styles from './styles.module.css';
import { useFecth } from '../../hooks/useFecth';
import { taskList } from '../../features/tasks/services/taskList';
import type { Task } from '../../features/tasks/types/taskModel';
import { TaskModal } from '../../features/tasks/components/task-modal';
export function Home() {
  const {data, loading} = useFecth(taskList)

  if (loading) return <h3>Carregando</h3>

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        
        <UserModal/>
        <List renderItem={(Task) => { return <TaskModal description={Task.description} completed={Task.completed}/>}} items={data}/>
      </div>
    </div>
  );
}
