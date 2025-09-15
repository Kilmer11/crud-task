import styles from './styles.module.css';

type InputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ id, labelText, ...props }: InputProps) {
  return (
    <div className={styles.inputDiv}>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...props} />
    </div>
  );
}
