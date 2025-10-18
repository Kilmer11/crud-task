import styles from './styles.module.css';
import {FaCheck} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import { taskDelete } from '../../services/taskDelete';

export type taskModalProps = { 
  id: string
  completed: boolean
  description: string
  handleDelete:(id: string)=>{}
}
export function TaskModal({completed, description, id, handleDelete}: taskModalProps) {
  return (
    <div className={styles.taskModal}>
      <div className={styles.taskCard}>
        <div className={styles.content}>
          <div className={styles.text}>
            {completed == true ? 
              <h3>{<s>description</s>}</h3>
              :
              <>

                <div className={styles.description}>
                  <h3>{description} </h3>
                  <span><FaCheck color="green" cursor='pointer' /></span>
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
