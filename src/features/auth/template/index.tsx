import styles from './styles.module.css';

type FormTemplateProps = {
  children: React.ReactNode;
};

export function FormTemplate({ children }: FormTemplateProps) {
  return (
    <div className={styles.divForm}>
      <form className={styles.form}>{children}</form>
    </div>
  );
}
