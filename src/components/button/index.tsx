import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  size?: string;
  variant?: string;
} & React.ComponentProps<'button'>;

export function Button({
  children,
  size = 'big',
  variant = 'blue',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[variant]}`}
      {...props}
    >
      <h4>{children}</h4>
    </button>
  );
}
