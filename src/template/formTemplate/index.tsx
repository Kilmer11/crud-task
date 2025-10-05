import styles from './styles.module.css';

type FormTemplateProps = {
  children: React.ReactNode;
} & React.ComponentProps<'form'>;

export function FormTemplate({ children, ...props }: FormTemplateProps) {
  return (
    <div className={styles.divForm}>
      <form className={styles.form} {...props}>
        {children}
      </form>
    </div>
  );
}
