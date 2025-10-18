import styles from './styles.module.css';

export type taskModalProps = { 
  completed: boolean
  description: string
}
export function TaskModal({completed, description}: taskModalProps) {
  return (
    <div className={styles.taskModal}>
      <div className={styles.taskCard}>
        <div className={styles.content}>
          <div className={styles.text}>
            {completed == true ? 
              <h3>{<s>description</s>}</h3>
              :
              <>
                <h3>{description}</h3>
                <p>Not done</p>
              </>
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
