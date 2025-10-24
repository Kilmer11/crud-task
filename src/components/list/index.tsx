import type { TaskModel } from '../../features/tasks/types/taskModel';
import styles from './styles.module.css';

type listProps = {
  items: TaskModel[];
  renderItem: (item: TaskModel) => React.ReactNode;
};

export function List({ items, renderItem }: listProps) {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <div key={item._id} className={styles.item}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
