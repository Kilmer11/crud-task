import styles from './styles.module.css';

import { Button } from '../../components/button';
import { FormTemplate } from '../../template/formTemplate';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { taskSchema } from '../../validations/register/schema';
import type { taskData } from '../../validations/register/schema.ts';
import { taskRegister } from '../../features/tasks/services/taskRegister.ts';
import { useNavigate } from 'react-router-dom';

export function FormTask() {
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<taskData>({
      resolver: yupResolver(taskSchema),
    });
  
  const handleSubmitTask = async (data: taskData) =>{ 
    const success = taskRegister(data.description);
    reset();
    if(await success){
      navigate('/')
    }
  
}

  return (
    <div className={styles.divForm}>
      
      <FormTemplate onSubmit={handleSubmit(handleSubmitTask)} children={
        <>
        <h2>Create task</h2>
        <textarea
          {...register('description')}
          className={styles.textarea}
          placeholder='Describe your task..'
        />
        {errors.description && <span>{errors.description.message}</span>}
        <div className={styles.divButton}>
          <Button size='small' variant='cancel'>
            Cancel
          </Button>
          <Button type='submit' disabled={isSubmitting} size='small'>Save</Button>
        </div>
        </>
      }/>
    </div>
  );
}
