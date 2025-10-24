import { useEffect, useRef } from 'react';
import { Button } from '../button';
import styles from './styles.module.css';

type ConfirmModalProps = {
  message: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
};

export function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onCancel]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={styles.overlay}
      aria-hidden={false}
    >
      <div className={styles.dialog} aria-modal='true' aria-label='Confirm'>
        <p>{message}</p>

        <div className={styles.actions}>
          <Button size='small' onClick={onConfirm}>
            Confirm
          </Button>
          <Button size='small' variant='cancel' onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
