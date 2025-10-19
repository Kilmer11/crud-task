import styles from './styles.module.css';
import {FaCheck} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';

export type taskModalProps = { 
  id: string
  completed: boolean
  description: string
  handleDelete: (id: string) => {}
  handleUpdate: (id: string, description: string) => {}
}
export function TaskModal({completed, description, id, handleDelete, handleUpdate}: taskModalProps) {

  return (
    <div className={styles.taskModal}>
      <div className={styles.taskCard}>
        <div className={styles.content}>
          <div className={styles.text}>
            {Boolean(completed) ? 
              <>
                <div className={styles.description}>
                    <h3><s>{description}</s></h3>
                    <span className={styles.delete}><FaTrash cursor='pointer' onClick={(e)=>{handleDelete(id)}} /></span>
                  </div>
                  
                  <p>Done!</p>
              </>
              :
              <>

                <div className={styles.description}>
                  <h3>{description} </h3>
                  <span><FaCheck color="green" cursor='pointer' onClick={(e)=>{handleUpdate(id, description)}} /></span>
                  <span className={styles.delete}><FaTrash cursor='pointer' onClick={(e)=>{handleDelete(id)}} /></span>
                </div>
                
                <p>Not done</p>
                
              </>
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
