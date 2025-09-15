import styles from './styles.module.css';

type ButtonProps = {
  text: string;
} & React.ComponentProps<'button'>;

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <p>{text}</p>
    </button>
  );
}
